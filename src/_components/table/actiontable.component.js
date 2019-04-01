import React from "react";
import PropTypes from "prop-types";
import {
  ActionConfigComponentProtoType,
  ColumnConfigProtoType
} from "../../_prototypes/actiontable.prototype";
import "./actiontable.component.css";

import CardComponent from "../card/card.component";
import CardHeaderComponent from "../card/cardheader.component";
import CardHeaderToolsComponent from "../card/cardheadertools.component";
import ResponsiveTableComponent from "./responsivetable.component";
import Button from "../form/button.component";
import ModalComponent from "../modal.component";
import FeIconLink from "../icons/fe-icon-link.component";

import * as ApiConstants from "../../_constants/api.constant";
import * as ActionTableConstants from "../../_constants/actiontable.constant";

import ActionTableService from "../../_services/actiontable.service";
import NotificationService from "../../_services/notification.service";
import CardDimmer from "../card/carddimmer.component";

export default class ActionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoading: true,
      isAddOpen: false,
      isUpdateOpen: false,
      actionRowIndex: null
    };
    this.sortBy = {
      column: null,
      order: null
    };

    // Data is contained in dataset
    this.dataset = [];
    this.getHeaderNames = this.getHeaderNames.bind(this);
    this.hasActions = this.hasActions.bind(this);

    this.getAddContent = this.getAddContent.bind(this);
    this.getUpdateLink = this.getUpdateLink.bind(this);
    this.getUpdateModal = this.getUpdateModal.bind(this);
    this.getDeleteLink = this.getDeleteLink.bind(this);

    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.sort = this.sort.bind(this);
    this.onAddAction = this.onAddAction.bind(this);
    this.onUpdateAction = this.onUpdateAction.bind(this);
    this.onDeleteAction = this.onDeleteAction.bind(this);

    this.actionTableService = new ActionTableService(this.props.url);
    this.notificationService = NotificationService.getInstance();
  }

  componentWillMount() {
    this.actionTableService.getAll().then(response => {
      this.dataset = response;
      this.setState({
        dataset: this.dataset,
        isDataLoading: false
      });
      let index = this.dataset.filter(x => x.id === "1");
      console.log("Filterd record id: " + JSON.stringify(index));
    });
  }

  render() {
    let headerNames = this.getHeaderNames();
    let headerTools = [];
    let tableDataRows = [];

    let actions = this.props.actions;
    if (actions != null && actions.add) {
      headerTools.push(this.getAddContent(actions.add));
    }

    if (this.dataset == null || this.dataset.length === 0) {
      // No records found
      tableDataRows.push(this.getNoDataContent());
    } else {
      let columnsConfig = this.props.columns;
      this.dataset.forEach((row, index) => {
        tableDataRows.push(this.getRenderedRow(index, row, columnsConfig));
      });
    }
    return (
      <CardComponent>
        <CardHeaderComponent title={this.props.title}>
          <CardHeaderToolsComponent>{headerTools}</CardHeaderToolsComponent>
        </CardHeaderComponent>
        <CardDimmer active={this.state.isDataLoading}>
          <ResponsiveTableComponent
            headers={headerNames}
            data={tableDataRows}
          />
        </CardDimmer>
      </CardComponent>
    );
  }

  getHeaderNames() {
    let headerNames = [];
    this.props.columns.forEach((column, index) => {
      let classNames =
        (column.hide ? "at-col-hidden" : "") +
        (column.sort ? "at-col-sortable" : "");
      headerNames.push(
        <th
          key={column.name}
          className={classNames}
          onClick={() => this.sort(column)}
        >
          {column.name}
        </th>
      );
    });
    if (this.hasActions()) {
      headerNames.push(<th key="Actions">-</th>);
    }
    return headerNames;
  }

  hasActions() {
    let actions = this.props.actions;
    return actions != null && (actions.update || actions.delete);
  }

  getAddContent(config) {
    let triggerName = config.triggerName;
    let modalTitle = config.modalTitle;
    let actionName = config.actionName;

    let content;
    if (this.state.isAddOpen) {
      let testData = {
        id: 0,
        subject: "Test subject",
        client: "Test client",
        vat: "87956421",
        created: "24 Aug 2018",
        status: "Pending",
        price: 10
      };
      content = config.content(testData);
    }
    return (
      <div key="Add">
        <Button mode="primary" value={triggerName} onClick={this.toggleAdd} />
        <ModalComponent
          title={modalTitle}
          isOpen={this.state.isAddOpen}
          toggle={this.toggleAdd}
          buttons={[
            <Button type="submit" mode="primary" onClick={this.onAddAction}>
              {actionName}
            </Button>
          ]}
        >
          {content}
        </ModalComponent>
      </div>
    );
  }

  toggleAdd() {
    this.setState(prevState => ({
      isAddOpen: !prevState.isAddOpen
    }));
  }
  toggleUpdate(index) {
    this.setState(prevState => ({
      isUpdateOpen: !prevState.isUpdateOpen,
      actionRowIndex: index
    }));
  }

  getNoDataContent() {
    return this.getSpannedContent("EMPTYROW", "No data available...");
  }

  getSpannedContent(key, message) {
    return (
      <tr key={key}>
        <td id={key} colSpan="100%">
          {message}
        </td>
      </tr>
    );
  }

  getRenderedRow(index, data, columnsConfig) {
    let rowActions = [];
    let actionColumnContent;
    let actions = this.props.actions;

    if (this.hasActions()) {
      if (actions.update) {
        rowActions.push(this.getUpdateLink(index));
      }
      if (actions.delete) {
        rowActions.push(this.getDeleteLink(index));
      }
      actionColumnContent = (
        <td cell-id="action-cell" key="action-cell">
          {index === 0 && actions.update
            ? this.getUpdateModal(actions.update)
            : ""}
          {rowActions}
        </td>
      );
    }
    return (
      <tr row-id={index} key={index}>
        {this.getRenderedColumns(data, columnsConfig)}
        {actionColumnContent}
      </tr>
    );
  }

  getRenderedColumns(data, columnsConfig) {
    let columnElements = [];
    columnsConfig.forEach((columnConfig, index) => {
      columnElements.push(this.getRenderedColumn(index, data, columnConfig));
    });
    return columnElements;
  }

  getRenderedColumn(index, data, columnConfig) {
    let renderedElement;
    if (columnConfig.render) {
      renderedElement = columnConfig.render(data);
    } else {
      renderedElement = data[columnConfig.field];
    }
    let style = {
      display: columnConfig.hide ? "none" : ""
    };
    return (
      <td cell-id={index} key={index} style={style}>
        {renderedElement}
      </td>
    );
  }

  getUpdateLink(index) {
    return (
      <FeIconLink
        key="edit"
        onClick={() => this.toggleUpdate(index)}
        name="edit-3"
      />
    );
  }

  getDeleteLink(index) {
    return (
      <FeIconLink
        key="delete"
        name="trash"
        onClick={() => this.onDeleteAction(index)}
      />
    );
  }

  getUpdateModal(config) {
    let modalTitle = config.modalTitle;
    let actionName = config.actionName;
    let content;
    if (this.state.isUpdateOpen) {
      // Get selected record and data
      content = config.content(this.dataset[this.state.actionRowIndex]);
    }
    return (
      <ModalComponent
        title={modalTitle}
        isOpen={this.state.isUpdateOpen}
        toggle={this.toggleUpdate}
        buttons={[
          <Button type="submit" mode="primary" onClick={this.onUpdateAction}>
            {actionName}
          </Button>
        ]}
      >
        {content}
      </ModalComponent>
    );
  }

  sort(column) {
    if (column.sort === true) {
      let sortBy = this.sortBy;

      if (sortBy.column === column.name) {
        let sortOrder = sortBy.order;
        sortBy.order =
          sortOrder == null || sortOrder === ActionTableConstants.SortOrder.DESC
            ? ActionTableConstants.SortOrder.ASC
            : ActionTableConstants.SortOrder.DESC;
      } else {
        sortBy.column = column.name;
        sortBy.order = ActionTableConstants.SortOrder.ASC;
      }
      console.log("sortBy: " + JSON.stringify(sortBy));
      this.dataset.sort(function(a, b) {
        if (sortBy.order === ActionTableConstants.SortOrder.ASC) {
          return a[column.field] > b[column.field] ? 1 : -1;
        } else {
          return a[column.field] < b[column.field] ? 1 : -1;
        }
      });
      this.setState({ dataset: this.dataset });
    }
  }

  onAddAction() {
    console.log("ActionTableComponent: onAddAction called");
    console.log(this.props.modalData);

    // Call API and get the response
    this.actionTableService.add(this.props.modalData).then(response => {
      // Check the response and close add popup
      if (response.code === ApiConstants.Result.SUCCESS) {
        // Add Record to the table.
        this.addToDataset(this.props.modalData, response);
        this.toggleAdd();
        this.notificationService.success(response.message);
      } else {
        this.notificationService.error(response.message);
      }
    });
  }

  onUpdateAction() {
    console.log("ActionTableComponent: onUpdateAction called");
    let modelId = this.props.getModelId(this.props.modalData);
    // Call API and get the response
    this.actionTableService
      .update(modelId, this.props.modalData)
      .then(response => {
        // Check the response and close add popup
        if (response.code === ApiConstants.Result.SUCCESS) {
          // Update Record to the table.
          this.updateDataset(this.props.modalData, response);
          this.toggleUpdate();
          this.notificationService.success(response.message);
        } else {
          this.notificationService.error(response.message);
        }
      });
  }

  onDeleteAction(index) {
    console.log("ActionTableComponent: onDeleteAction called at: " + index);
    let modelId = this.props.getModelId(this.dataset[index]);
    // Call API and get the response
    this.actionTableService.delete(modelId).then(response => {
      // Check the response and close add popup
      if (response.code === ApiConstants.Result.SUCCESS) {
        // Add Record to the table.
        this.deleteFromDataset(modelId);
        this.notificationService.success(response.message);
      } else {
        this.notificationService.error(response.message);
      }
    });
  }

  addToDataset(modalData, response) {
    if (response.content) {
      this.dataset[this.dataset.length] = response.content;
    } else {
      this.dataset[this.dataset.length] = modalData;
    }
    console.log(this.dataset);
  }
  updateDataset(modalData, response) {
    let index = this.dataset.findIndex(item => item.id === modalData.id);
    console.log(
      "will update dataset for the id: " + modalData.id + " at index: " + index
    );
    if (response.content) {
      this.dataset[index] = response.content;
    } else {
      this.dataset[index] = modalData;
    }
  }

  deleteFromDataset(modelId) {
    let index = this.dataset.findIndex(item => item.id === modelId);
    console.log(
      "will delete from dataset where id: " + modelId + " at index: " + index
    );
    this.dataset.splice(index, 1);
    console.log(this.dataset);
  }
}

ActionTable.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.exact(ColumnConfigProtoType)).isRequired,
  actions: PropTypes.exact({
    add: PropTypes.exact(ActionConfigComponentProtoType),
    update: PropTypes.exact(ActionConfigComponentProtoType),
    delete: PropTypes.any
  })
};
