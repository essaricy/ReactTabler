import React from "react";
import PropTypes from "prop-types";
import "./actiontable.component.css";

export default class ActionTable extends React.Component {
  getNoDataContent(numberOfColumns) {
    return this.getSpannedContent(
      numberOfColumns,
      "NOROW",
      "No data available..."
    );
  }
  getErrorContent(numberOfColumns, message) {
    return this.getSpannedContent(numberOfColumns, "ERRORROW", message);
  }
  getSpannedContent(numberOfColumns, key, message) {
    return (
      <tr key={key}>
        <td id={key} colSpan={numberOfColumns}>
          {message}
        </td>
      </tr>
    );
  }

  render() {
    console.log("Rendering table with headers: " + this.props.headerNames);
    let title = this.props.title;
    let headerNames = this.props.headerNames;
    let renderBy = this.props.renderBy; // data, elements

    let tableHeaderElements = [];
    let tableDataRows = [];

    // Render the headers
    for (let headerName of headerNames) {
      tableHeaderElements.push(<th key={headerName}>{headerName}</th>);
    }
    // Identify the rendering component
    let renderingData = null;
    if (renderBy === "data") {
      if (!this.props.data) {
        tableDataRows.push(
          this.getErrorContent(
            headerNames.length,
            "Prop 'data' is required when renderBy is set to 'data'"
          )
        );
      } else {
        renderingData = this.props.data;
      }
    } else if (renderBy === "elements") {
      if (!this.props.elements) {
        tableDataRows.push(
          this.getErrorContent(
            headerNames.length,
            "Prop 'elements' is required when renderBy is set to 'elements'"
          )
        );
      } else {
        renderingData = this.props.elements;
      }
    } else {
      tableDataRows.push(
        this.getErrorContent(
          headerNames.length,
          "Prop 'renderBy' must be set either to 'data' or elements'"
        )
      );
    }
    // Render data
    if (renderingData == null || renderingData.length === 0) {
      // No records found
      tableDataRows.push(this.getNoDataContent(headerNames.length));
    } else {
      let actions = this.props.actions;
      // Add "+" button if action contains "Add"
      for (let rowIndex = 0; rowIndex < renderingData.length; rowIndex++) {
        let rowData = renderingData[rowIndex];
        var cellElements = [];
        for (let cellIndex = 0; cellIndex < rowData.length; cellIndex++) {
          let cellData = rowData[cellIndex];
          cellElements.push(
            <td cell-id={cellIndex} key={cellIndex}>
              {cellData}
            </td>
          );
        }
        // Add Action buttons column
        cellElements.push(
          <td cell-id={headerNames.length - 1} key={headerNames.length - 1}>
            <a className="icon">
              <i className="fe fe-edit-3" />
            </a>
            <a className="icon">
              <i className="fe fe-trash" />
            </a>
          </td>
        );
        tableDataRows.push(
          <tr row-id={rowIndex} key={rowIndex}>
            {cellElements}
          </tr>
        );
      }
    }

    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <div className="card-options">
            <span className="input-group-btn ml-2">
              <button className="btn btn-sm btn-primary">Add</button>
            </span>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table card-table table-vcenter text-nowrap">
            <thead>
              <tr>{tableHeaderElements}</tr>
            </thead>
            <tbody>{tableDataRows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

ActionTable.propTypes = {
  title: PropTypes.string.isRequired,
  headerNames: PropTypes.array.isRequired,
  renderBy: PropTypes.string.isRequired,
  data: PropTypes.array,
  elements: PropTypes.array
};
