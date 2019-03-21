import React from "react";
import AbstractScene from "./abstract.scene";

import SimpleTable from "../_components/simpletable.component";
import * as TableMock from "../_data/table.mock";

export default class DataTableScene extends AbstractScene {
  render() {
    return super.getContent(
      <div className="row">
        <div className="col-12">
          <SimpleTable
            title={TableMock.Title}
            renderBy="elements"
            headerNames={TableMock.HeaderNames}
            data={TableMock.Data}
            elements={TableMock.Elements}
          />
        </div>
      </div>
    );
  }
}
