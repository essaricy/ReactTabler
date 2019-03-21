import React from "react";
import AbstractScene from "./abstract.scene";

import ActionTable from "../_components/actiontable.component";
import * as TableMock from "../_data/table.mock";

export default class ActionTableScene extends AbstractScene {
  render() {
    return super.getContent(
      <div className="row">
        <div className="col-12">
          <ActionTable
            title={TableMock.Title}
            renderBy="elements"
            headerNames={TableMock.HeaderNamesAction}
            data={TableMock.Data}
            elements={TableMock.Elements}
            actions={["Add", "Update", "Delete"]}
          />
        </div>
      </div>
    );
  }
}
