import React from "react";
import PropTypes from "prop-types";
import "./actiontable.component.css";

import AbstractTable from "./abstracttable.component";

export default class ActionTable extends AbstractTable {
  render() {
    console.log("Rendering table with headers: " + this.props.headerNames);
    let headerNames = this.props.headerNames;
    let tableDataRows = [];
    let renderingData = super.validateAndGetRendingObject();
    let actionButtons = [];

    // Render data
    if (renderingData == null || renderingData.length === 0) {
      // No records found
      tableDataRows.push(this.getNoDataContent(headerNames.length));
    } else {
      let actions = this.props.actions;
      // Add "+" button if action contains "Add"
      actionButtons.push(
        <button key="Add" className="btn btn-sm btn-primary">
          Add
        </button>
      );

      tableDataRows = renderingData.map((rowData, rowIndex) => (
        <tr row-id={rowIndex} key={rowIndex}>
          {super.mapColumnsFromData(rowData)}
          <td cell-id={headerNames.length - 1} key={headerNames.length - 1}>
            <a href="/" className="icon">
              <i className="fe fe-edit-3" />
            </a>
            <a href="/" className="icon">
              <i className="fe fe-trash" />
            </a>
          </td>
        </tr>
      ));
    }

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
