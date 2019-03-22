import React from "react";
import PropTypes from "prop-types";
import "./actiontable.component.css";

import AbstractTable from "./abstracttable.component";
import FeIconLink from "../icons/fe-icon-link.component";
import Button from "../form/button.component";

export default class ActionTable extends AbstractTable {
  render() {
    console.log("Rendering table with headers: " + this.props.headerNames);
    let headerNames = this.props.headerNames;
    let tableDataRows = [];
    let renderingData = super.validateAndGetRendingObject();
    let actionButtons = [];
    let allowAdd = false;
    let allowEdit = false;
    let allowDelete = false;

    // Render data
    if (renderingData == null || renderingData.length === 0) {
      // No records found
      tableDataRows.push(this.getNoDataContent(headerNames.length));
    } else {
      if (this.props.actions) {
        let actions = this.props.actions;
        allowAdd = actions.includes("Add");
        allowEdit = actions.includes("Update");
        allowDelete = actions.includes("Delete");
      }
    }
    // Add "+" button if action contains "Add"
    if (allowAdd) {
      actionButtons.push(<Button key="Add" type="primary" value="Add" />);
    }

    tableDataRows = renderingData.map((rowData, rowIndex) => (
      <tr row-id={rowIndex} key={rowIndex}>
        {super.mapColumnsFromData(rowData)}
        <td cell-id={headerNames.length - 1} key={headerNames.length - 1}>
          {allowEdit ? <FeIconLink url="/" name="edit-3" /> : ""}
          {allowDelete ? <FeIconLink url="/" name="trash" /> : ""}
        </td>
      </tr>
    ));
    return super.getRenderingContent(actionButtons, tableDataRows);
  }
}

ActionTable.propTypes = {
  title: PropTypes.string.isRequired,
  headerNames: PropTypes.array.isRequired,
  renderBy: PropTypes.string.isRequired,
  data: PropTypes.array,
  elements: PropTypes.array
};
