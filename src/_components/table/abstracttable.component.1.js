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

  validateRenderBy() {
    let headerNames = this.props.headerNames;
    let renderBy = this.props.renderBy; // data, elements
    let tableDataRows = [];

    let renderingData = null;
    console.log("renderBy==> " + renderBy);
    if (renderBy === "data" && !this.props.data) {
      return this.getErrorContent(
        headerNames.length,
        "Prop 'data' is required when renderBy is set to 'data'"
      );
    } else if (renderBy === "elements" && !this.props.elements) {
      return this.getErrorContent(
        headerNames.length,
        "Prop 'elements' is required when renderBy is set to 'elements'"
      );
    } else if (renderBy === "api") {
      if (!this.props.url) {
        return this.getErrorContent(
          headerNames.length,
          "Prop 'url' is required when renderBy is set to 'api'"
        );
      }
    } else {
      return this.getErrorContent(
        headerNames.length,
        "Prop 'renderBy' must be set either to 'data', elements' or 'api'"
      );
    }
    console.log(tableDataRows);
    return renderingData;
  }

  // validateAndGetRendingObject() {
  //   let headerNames = this.props.headerNames;
  //   let renderBy = this.props.renderBy; // data, elements
  //   let tableDataRows = [];

  //   let renderingData = null;
  //   console.log("renderBy==> " + renderBy);
  //   if (renderBy === "data") {
  //     if (!this.props.data) {
  //       tableDataRows.push(
  //         this.getErrorContent(
  //           headerNames.length,
  //           "Prop 'data' is required when renderBy is set to 'data'"
  //         )
  //       );
  //     } else {
  //       renderingData = this.props.data;
  //     }
  //   } else if (renderBy === "elements") {
  //     if (!this.props.elements) {
  //       tableDataRows.push(
  //         this.getErrorContent(
  //           headerNames.length,
  //           "Prop 'elements' is required when renderBy is set to 'elements'"
  //         )
  //       );
  //     } else {
  //       renderingData = this.props.elements;
  //     }
  //   } else {
  //     tableDataRows.push(
  //       this.getErrorContent(
  //         headerNames.length,
  //         "Prop 'renderBy' must be set either to 'data' or elements'"
  //       )
  //     );
  //   }
  //   console.log(tableDataRows);
  //   return renderingData;
  // }

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
