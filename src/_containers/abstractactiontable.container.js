import React from "react";
import SceneContainer from "./scene.container";
import ActionTable from "../_components/table/actiontable.component";

import * as TableMock from "../_data/table.mock";

export default class AbstractActionTableContainer extends SceneContainer {
  constructor(props) {
    super(props);
    //this.state = {};
    this.model = {};
    this.currentRowData = {};
    this.getAddScene = this.getAddScene.bind(this);
    this.getUpdateScene = this.getUpdateScene.bind(this);
  }

  getResourceUrl() {
    throw Error("Must implement abstract method getResourceUrl");
  }

  populate(row) {
    throw Error("Must implement abstract method populate");
  }

  getAllowedActions() {
    throw Error("Must implement abstract method getAllowedActions");
  }

  getAddTitle() {
    throw Error("Must implement abstract method getAddTitle");
  }

  getUpdateTitle() {
    throw Error("Must implement abstract method getUpdateTitle");
  }

  getAddScene() {
    throw Error("Must implement abstract method getAddScene");
  }

  getUpdateScene() {
    throw Error("Must implement abstract method getUpdateScene");
  }

  scene() {
    return (
      <div className="row">
        <div className="col-12">
          <ActionTable
            title={TableMock.Title}
            url={this.getResourceUrl()}
            populate={this.populate}
            dataProvider={this.model}
            headerNames={TableMock.HeaderNamesAction}
            notificationType={this.props.notificationType}
            notificationMessage={this.props.notificationMessage}
            actions={this.getAllowedActions()}
            addAction={{
              label: "Add",
              modalTitle: this.getAddTitle(),
              scene: this.getAddScene()
            }}
            updateAction={{
              label: "Update",
              modalTitle: this.getUpdateTitle(),
              scene: this.getUpdateScene()
            }}
            deleteAction={{
              label: "delete"
            }}
          />
        </div>
      </div>
    );
  }
}
