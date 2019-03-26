import React from "react";
import SceneContainer from "../_containers/scene.container";

import SimpleTable from "../_components/table/simpletable.component";
import * as TableMock from "../_data/table.mock";

export default class DataTableScene extends SceneContainer {
  scene() {
    return (
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
