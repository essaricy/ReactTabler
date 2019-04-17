import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Dimmer, Icon, Table } from "tabler-react";
import Modal from "../../_components/modal/modal.component";

import {
  ActionConfigComponentProtoType,
  ColumnConfigProtoType
} from "../../_prototypes/actiontable.prototype";
import "./actiontable.component.css";

import * as ApiConstants from "../../_constants/api.constant";
import * as ActionTableConstants from "../../_constants/actiontable.constant";

import ActionTableService from "../../_services/actiontable.service";
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
    this.getTableHeaders = this.getTableHeaders.bind(this);
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
  }

  componentWillMount() {
    this.actionTableService.getAll().then(response => {
      this.dataset = response;
      this.setState({
        isDataLoading: false,
        dataset: this.response
      });
    });
  }

  render() {
    const tableHeaders = this.getTableHeaders();
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
        <Card.Header>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Options>{headerTools}</Card.Options>
        </Card.Header>
        <Dimmer active={this.state.isDataLoading} loader={true}>
          <Table responsive className="card-table table-vcenter text-nowrap">
            <Table.Header>
              <Table.Row>{tableHeaders}</Table.Row>
            </Table.Header>
            <Table.Body>{tableDataRows}</Table.Body>
          </Table>
        </Dimmer>
      </Card>
    );
  }

  getTableHeaders() {
    const tableHeaders = [];
    this.props.columns.forEach((column, index) => {
      let sortIcon;
      let sortClassName = "";
      let hideClassName = "";
      if (column.sort) {
        sortClassName = "actiontable-col-sortable";
        sortIcon =
          this.sortBy.column === column.name ? (
            this.sortBy.order === ActionTableConstants.SortOrder.ASC ? (
              <Icon prefix="fa" name="sort-amount-asc" />
            ) : (
              <Icon prefix="fa" name="sort-amount-desc" />
            )
          ) : (
            <Icon prefix="fa" name="sort" />
          );
      }
      if (column.hide) {
        hideClassName = "actiontable-col-hidden";
      }
      tableHeaders.push(
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
      tableHeaders.push(<Table.ColHeader key="Actions">-</Table.ColHeader>);
    }
    return tableHeaders;
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
    if (!config.getEmpty) {
      throw Error("Missing declaration of getEmpty for add configuration");
    }
    const modalData = config.getEmpty();
    if (this.state.isAddOpen) {
      content = config.content(modalData);
    }
    return (
      <div key="Add">
        <Button
          //icon="plus"
          color="primary"
          disabled={this.state.isDataLoading}
          onClick={this.toggleAdd}
        >
          {triggerName}
        </Button>
        <Modal
          title={modalTitle}
          isOpen={this.state.isAddOpen}
          toggle={this.toggleAdd}
          buttons={[
            <Button
              color="primary"
              disabled={this.state.isDataLoading}
              onClick={() => this.onAddAction(modalData)}
            >
              {actionName}
            </Button>
          ]}
        >
          <Dimmer active={this.state.isDataLoading} loader={true}>
            <Dimmer.Content>{content}</Dimmer.Content>
          </Dimmer>
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

  getErrorContent() {
    return this.getSpannedContent(
      "ERRORROW",
      "An Error has occurred while loading data"
    );
  }

  getSpannedContent(key, message) {
    return (
      <Table.Row key={key}>
        <Table.Col id={key} colSpan="100%">
          {message}
        </Table.Col>
      </Table.Row>
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
        <Table.Col key="action-cell">
          {index === 0 && actions.update
            ? this.getUpdateModal(actions.update)
            : ""}
          {rowActions}
        </Table.Col>
      );
    }
    return (
      <Table.Row key={index}>
        {this.getRenderedColumns(data, columnsConfig)}
        {actionColumnContent}
      </Table.Row>
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
      <td key={index} style={style}>
        {renderedElement}
      </td>
    );
  }

  getUpdateLink(index) {
    return (
      <a
        key="edit"
        className="actiontable-update"
        onClick={() => this.toggleUpdate(index)}
      >
        <Icon name="edit" color="#5eba00" />
      </a>
    );
  }

  getDeleteLink(index) {
    return (
      <a
        key="delete"
        className="actiontable-delete"
        onClick={() => this.onDeleteAction(index)}
      >
        <Icon name="trash" color="#cd201f" />
      </a>
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
            color="primary"
            disabled={this.state.isDataLoading}
            onClick={() => this.onUpdateAction(modalData)}
          >
            {actionName}
          </Button>
        ]}
      >
        <Dimmer active={this.state.isDataLoading} loader={true}>
          <Dimmer.Content>{content}</Dimmer.Content>
        </Dimmer>
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
        AlertService.success(response.message);
      } else {
        AlertService.error(response.message);
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
        AlertService.success(response.message);
      } else {
        AlertService.error(response.message);
      }
      this.setState({ isDataLoading: false });
    });
  }

  onDeleteAction(index) {
    console.log("ActionTable: onDeleteAction called at: " + index);
    if (this.hasActions()) {
      AlertService.confirm(
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
        AlertService.success(response.message);
      } else {
        AlertService.error(response.message);
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
