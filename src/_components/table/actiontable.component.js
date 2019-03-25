import React from "react";
import PropTypes from "prop-types";
import "./actiontable.component.css";

import AbstractTable from "./abstracttable.component";
import FeIconLink from "../icons/fe-icon-link.component";
import Button from "../form/button.component";
import ModalComponent from "../modal.component";
import * as ApiConstants from "../../_constants/api.constant";
import AlertComponent from "../alert.component";
import ActionTableService from "../../_services/actiontable.service";

export default class ActionTable extends AbstractTable {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      allowAdd: props.actions.includes("Add") && this.props.addAction,
      allowEdit: props.actions.includes("Update") && this.props.updateAction,
      allowDelete: props.actions.includes("Delete") && this.props.deleteAction,
      isAddOpen: false,
      isUpdateOpen: false,
      addErrorMessage: null,
      updateErrorMessage: null
    };
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);

    this.onAddAction = this.onAddAction.bind(this);
    this.onUpdateAction = this.onUpdateAction.bind(this);
    this.actionTableService = new ActionTableService(props.url);
  }

  componentWillMount() {
    this.actionTableService.getAll().then(response => {
      this.setState({ data: response });
    });
  }

  toggleAdd() {
    this.setState(prevState => ({
      isAddOpen: !prevState.isAddOpen
    }));
  }
  toggleUpdate() {
    this.setState(prevState => ({
      isUpdateOpen: !prevState.isUpdateOpen
    }));
  }

  onAddAction() {
    console.log("ActionTableComponent: onAddAction called");
    // Check the response and close add popup
    // TODO Call API and get the response
    let response = this.props.addAction.handler();
    if (response.code === ApiConstants.Result.SUCCESS) {
      this.toggleAdd();
    } else {
      console.log("ActionTableComponent: onAddAction failed");
      this.setState({ addErrorMessage: response.message });
    }
  }

  onUpdateAction() {
    console.log("ActionTableComponent: onUpdateAction called");
    // Check the response and close update popup
    let response = this.props.addAction.handler();
    if (response.code === ApiConstants.Result.SUCCESS) {
      this.toggleUpdate();
    } else {
      console.log("ActionTableComponent: onUpdateAction failed");
      this.setState({ updateErrorMessage: response.message });
    }
  }

  render() {
    super.validate();

    console.log("Rendering table with headers: " + this.props.headerNames);
    let numberOfColumns = this.props.headerNames.length;
    let tableDataRows = [];
    let actionButtons = [];

    if (this.state.data == null || this.state.data.length === 0) {
      // No records found
      tableDataRows.push(this.getNoDataContent(numberOfColumns));
    } else {
      this.state.data.forEach((rowData, rowIndex) => {
        let columns = [];
        tableDataRows.push(
          <tr row-id={rowIndex} key={rowIndex}>
            {this.props.renderer(rowData).forEach((cellData, cellIndex) =>
              columns.push(
                <td cell-id={cellIndex} key={cellIndex}>
                  {cellData}
                </td>
              )
            )}
            {columns}
            <td cell-id={numberOfColumns - 1} key={numberOfColumns - 1}>
              {this.state.allowEdit ? this.getUpdateLink() : ""}
              {rowIndex === 0 ? this.getUpdateModal() : ""}
              {this.state.allowDelete ? this.getDeleteContent() : ""}
            </td>
          </tr>
        );
      });
    }
    // Add "+" button if action contains "Add"
    if (this.state.allowAdd) {
      actionButtons.push(this.getAddContent());
    }
    return super.getRenderingContent(actionButtons, tableDataRows);
  }

  getAddContent() {
    let addAction = this.props.addAction;
    return (
      <div key="Add">
        <Button
          mode="primary"
          value={addAction.label ? addAction.label : "Add"}
          onClick={this.toggleAdd}
        />
        <ModalComponent
          title={addAction.modalTitle}
          isOpen={this.state.isAddOpen}
          toggle={this.toggleAdd}
          buttons={[
            <Button type="submit" mode="primary" onClick={this.onAddAction}>
              Create
            </Button>
          ]}
        >
          <AlertComponent type="error" message={this.state.addErrorMessage} />
          {addAction.render}
        </ModalComponent>
      </div>
    );
  }
  getUpdateLink() {
    return <FeIconLink onClick={this.toggleUpdate} name="edit-3" />;
  }
  getUpdateModal() {
    let updateAction = this.props.updateAction;
    return (
      <ModalComponent
        title={updateAction.modalTitle}
        isOpen={this.state.isUpdateOpen}
        toggle={this.toggleUpdate}
        buttons={[
          <Button type="submit" mode="primary" onClick={this.onUpdateAction}>
            Update
          </Button>
        ]}
      >
        <AlertComponent type="error" message={this.state.updateErrorMessage} />
        {updateAction.render}
      </ModalComponent>
    );
  }

  getDeleteContent() {
    return <FeIconLink url="/" name="trash" />;
  }
}

ActionTable.propTypes = {
  title: PropTypes.string.isRequired,
  headerNames: PropTypes.array.isRequired
};
