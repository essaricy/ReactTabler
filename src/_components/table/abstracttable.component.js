import React from "react";
import "./abstracttable.component.css";

import CardComponent from "../card/card.component";
import CardHeaderComponent from "../card/cardheader.component";
import CardHeaderToolsComponent from "../card/cardheadertools.component";
import ResponsiveTableComponent from "./responsivetable.component";

export default class AbstractTable extends React.Component {
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

  validate() {
    if (!this.props.url) {
      throw Error("Prop 'url' is required when renderBy is set to 'api'");
    }
  }

  getHeaderElements() {
    return this.props.headerNames.map(name => <th key={name}>{name}</th>);
  }

  mapColumnsFromData(rowData) {
    return rowData.map((cellData, cellIndex) => (
      <td cell-id={cellIndex} key={cellIndex}>
        {cellData}
      </td>
    ));
  }
  getRenderingContent(actionButtons, tableDataRows) {
    return (
      <CardComponent>
        <CardHeaderComponent title={this.props.title}>
          <CardHeaderToolsComponent>{actionButtons}</CardHeaderToolsComponent>
        </CardHeaderComponent>
        <ResponsiveTableComponent
          headers={this.getHeaderElements()}
          data={tableDataRows}
        />
      </CardComponent>
    );
  }
}
