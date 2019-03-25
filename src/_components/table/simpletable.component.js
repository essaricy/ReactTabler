import React from "react";

import AbstractTable from "./abstracttable.component";

export default class SimpleTable extends AbstractTable {
  render() {
    console.log("Rendering table with headers: " + this.props.headerNames);
    let headerNames = this.props.headerNames;
    let tableDataRows = [];
    let renderingData = super.validateAndGetRendingObject();
    // Render data
    if (renderingData == null || renderingData.length === 0) {
      // No records found
      tableDataRows.push(this.getNoDataContent(headerNames.length));
    } else {
      tableDataRows = renderingData.map((rowData, rowIndex) => (
        <tr row-id={rowIndex} key={rowIndex}>
          {super.mapColumnsFromData(rowData)}
        </tr>
      ));
    }

    return super.getRenderingContent(null, tableDataRows);
  }
}
