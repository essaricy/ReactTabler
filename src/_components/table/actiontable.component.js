import React from "react";
import PropTypes from "prop-types";
import {
  ActionConfigComponentProtoType,
  ColumnConfigProtoType
} from "../../_prototypes/actiontable.prototype";
import "./actiontable.component.css";

import Card from "../card/card.component";
import CardHeader from "../card/cardheader.component";
import CardHeaderTools from "../card/cardheadertools.component";
import CardDimmer from "../card/carddimmer.component";
import ResponsiveTable from "./responsivetable.component";
import Button from "../form/button.component";
import Modal from "../modal/modal.component";
import FaIcon from "../icons/fa-icon.component";
import FeIconLink from "../icons/fe-icon-link.component";

import * as ApiConstants from "../../_constants/api.constant";
import * as ActionTableConstants from "../../_constants/actiontable.constant";

import ActionTableService from "../../_services/actiontable.service";
import NotificationService from "../../_services/notification.service";
import AlertService from "../../_services/alert.service";

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
    this.onDeleteConfirmation = this.onDeleteConfirmation.bind(this);

    this.actionTableService = new ActionTableService(this.props.url);
    this.notificationService = NotificationService.getInstance();
    this.alertService = AlertService.getInstance();
  }

  componentWillMount() {
    this.actionTableService.getAll().then(response => {
      this.dataset = response;
      this.setState({
        dataset: this.dataset,
        isDataLoading: false
      });
    });
  }

  render() {
    const headerNames = this.getHeaderNames();
    const headerTools = [];
    const tableDataRows = [];

    const actions = this.props.actions;
    if (actions != null && actions.add) {
      headerTools.push(this.getAddContent(actions.add));
    }

    if (this.dataset == null || this.dataset.length === 0) {
      // No records found
      tableDataRows.push(this.getNoDataContent());
    } else {
      const columnsConfig = this.props.columns;
      this.dataset.forEach((row, index) => {
        tableDataRows.push(this.getRenderedRow(index, row, columnsConfig));
      });
    }
    return (
      <Card>
        <CardHeader title={this.props.title}>
          <CardHeaderTools>{headerTools}</CardHeaderTools>
        </CardHeader>
        <CardDimmer active={this.state.isDataLoading}>
          <ResponsiveTable headers={headerNames} data={tableDataRows} />
        </CardDimmer>
      </Card>
    );
  }

  getHeaderNames() {
    const headerNames = [];
    this.props.columns.forEach((column, index) => {
      let sortIcon;
      let sortClassName = "";
      let hideClassName = "";
      if (column.sort) {
        sortClassName = "actiontable-col-sortable";
        sortIcon =
          this.sortBy.column === column.name ? (
            this.sortBy.order === ActionTableConstants.SortOrder.ASC ? (
              <FaIcon name="sort-amount-asc" />
            ) : (
              <FaIcon name="sort-amount-desc" />
            )
          ) : (
            <FaIcon name="sort" />
          );
      }
      if (column.hide) {
        hideClassName = "actiontable-col-hidden";
      }
      headerNames.push(
        <th
          key={column.name}
          className={hideClassName + sortClassName}
          onClick={() => this.sort(column)}
        >
          {column.name}
          {sortIcon}
        </th>
      );
    });
    if (this.hasActions()) {
      headerNames.push(<th key="Actions">-</th>);
    }
    return headerNames;
  }

  hasActions() {
    const actions = this.props.actions;
    return actions != null && (actions.update || actions.delete);
  }

  getAddContent(config) {
    const triggerName = config.triggerName;
    const modalTitle = config.modalTitle;
    const actionName = config.actionName;

    let content;
    // TODO added for testing. remove later
    const modalData = {
      id: 0,
      subject: "Test subject",
      client: "Test client",
      vat: "87956421",
      created: "24 Aug 2018",
      status: "Pending",
      price: 10
    };
    if (this.state.isAddOpen) {
      content = config.content(modalData);
    }
    return (
      <div key="Add">
        <Button
          kind="primary"
          value={triggerName}
          disabled={this.state.isDataLoading}
          onClick={this.toggleAdd}
        />
        <Modal
          title={modalTitle}
          isOpen={this.state.isAddOpen}
          toggle={this.toggleAdd}
          buttons={[
            <Button
              kind="primary"
              value={actionName}
              //type="submit"
              disabled={this.state.isDataLoading}
              onClick={() => this.onAddAction(modalData)}
            />
          ]}
        >
          <CardDimmer active={this.state.isDataLoading}>{content}</CardDimmer>
        </Modal>
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
    const rowActions = [];
    const actions = this.props.actions;
    let actionColumnContent;

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
    const columnElements = [];
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
    const style = {
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
        name="edit"
        color="#5eba00"
        onClick={() => this.toggleUpdate(index)}
      />
    );
  }

  getDeleteLink(index) {
    return (
      <FeIconLink
        key="delete"
        name="trash"
        color="#cd201f"
        onClick={() => this.onDeleteAction(index)}
      />
    );
  }

  getUpdateModal(config) {
    const modalTitle = config.modalTitle;
    const actionName = config.actionName;
    const modalData = this.dataset[this.state.actionRowIndex];
    let content;
    if (this.state.isUpdateOpen) {
      // Get selected record and data
      content = config.content(modalData);
    }
    return (
      <Modal
        title={modalTitle}
        isOpen={this.state.isUpdateOpen}
        toggle={this.toggleUpdate}
        buttons={[
          <Button
            kind="primary"
            value={actionName}
            //type="submit"
            disabled={this.state.isDataLoading}
            onClick={() => this.onUpdateAction(modalData)}
          />
        ]}
      >
        <CardDimmer active={this.state.isDataLoading}>{content}</CardDimmer>
      </Modal>
    );
  }

  sort(column) {
    if (column.sort === true) {
      const sortBy = this.sortBy;

      if (sortBy.column === column.name) {
        const sortOrder = sortBy.order;
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

  onAddAction(modalData) {
    this.setState({ isDataLoading: true });
    console.log("ActionTable: onAddAction called");
    // Call API and get the response
    this.actionTableService.add(modalData).then(response => {
      // Check the response and close add popup
      if (response.code === ApiConstants.Result.SUCCESS) {
        // Add Record to the table.
        this.addToDataset(modalData, response);
        this.toggleAdd();
        this.notificationService.success(response.message);
      } else {
        this.notificationService.error(response.message);
      }
      this.setState({ isDataLoading: false });
    });
  }

  onUpdateAction(modalData) {
    console.log("ActionTable: onUpdateAction called");
    this.setState({ isDataLoading: true });
    const modelId = modalData.id;
    // Call API and get the response
    this.actionTableService.update(modelId, modalData).then(response => {
      // Check the response and close add popup
      if (response.code === ApiConstants.Result.SUCCESS) {
        // Update Record to the table.
        this.updateDataset(modalData, response);
        this.toggleUpdate();
        this.notificationService.success(response.message);
      } else {
        this.notificationService.error(response.message);
      }
      this.setState({ isDataLoading: false });
    });
  }

  onDeleteAction(index) {
    console.log("ActionTable: onDeleteAction called at: " + index);
    if (this.hasActions()) {
      this.alertService.confirm(
        this.props.actions.delete.message,
        "Yes, Delete!",
        () => {
          this.onDeleteConfirmation(index);
        }
      );
    }
  }

  onDeleteConfirmation(index) {
    this.setState({ isDataLoading: true });
    const modelId = this.dataset[index].id;
    // Call API and get the response
    this.actionTableService.delete(modelId).then(response => {
      // Check the response and close add popup
      if (response.code === ApiConstants.Result.SUCCESS) {
        // Add Record to the table.
        this.deleteFromDataset(index);
        this.notificationService.success(response.message);
      } else {
        this.notificationService.error(response.message);
      }
      this.setState({ isDataLoading: false });
    });
  }

  addToDataset(modalData, response) {
    if (response.content) {
      this.dataset[this.dataset.length] = response.content;
    } else {
      this.dataset[this.dataset.length] = modalData;
    }
  }

  updateDataset(modalData, response) {
    const index = this.dataset.findIndex(item => item.id === modalData.id);
    console.log(
      "will update dataset for the id: " + modalData.id + " at index: " + index
    );
    if (response.content) {
      this.dataset[index] = response.content;
    } else {
      this.dataset[index] = modalData;
    }
  }

  deleteFromDataset(index) {
    console.log("will delete from dataset where index: " + index);
    this.dataset.splice(index, 1);
    this.setState({ dataset: this.dataset });
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
