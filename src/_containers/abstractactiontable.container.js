import React from "react";
import SceneContainer from "./scene.container";
import ActionTable from "../_components/table/actiontable.component";

import * as TableMock from "../_data/table.mock";
import * as ContainerUtils from "../_utils/container.util";

export default class AbstractActionTableContainer extends SceneContainer {
  constructor(props) {
    super(props);
    this.state = {};
    this.currentRowData = {};
    this.renderAddScene = this.renderAddScene.bind(this);
    //this.onCreate = this.onCreate.bind(this);
    //this.onUpdate = this.onUpdate.bind(this);
    //this.onDelete = this.onDelete.bind(this);
  }

  getResourceUrl() {
    throw Error("Must implement abstract method getResourceUrl");
  }

  getRenderer(row) {
    throw Error("Must implement abstract method getRenderer");
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

  renderAddScene() {
    throw Error("Must implement abstract method renderAddScene");
  }

  renderUpdateScene() {
    throw Error("Must implement abstract method renderUpdateScene");
  }

  // onCreate() {
  //   throw Error("Must implement abstract method onCreate");
  // }
  // onUpdate() {
  //   throw Error("Must implement abstract method onUpdate");
  // }
  // onDelete() {
  //   throw Error("Must implement abstract method onDelete");
  // }

  scene() {
    return (
      <div className="row">
        <div className="col-12">
          <ActionTable
            title={TableMock.Title}
            url={this.getResourceUrl()}
            dataRenderer={this.getRenderer}
            dataProvider={this.state}
            headerNames={TableMock.HeaderNamesAction}
            notificationType={this.props.notificationType}
            notificationMessage={this.props.notificationMessage}
            actions={this.getAllowedActions()}
            addAction={{
              label: "Add",
              modalTitle: this.getAddTitle(),
              render: this.renderAddScene()
              //handler: this.onCreate,
              //errorMessage: null
            }}
            updateAction={{
              label: "Update",
              modalTitle: this.getUpdateTitle(),
              render: this.renderUpdateScene()
              //handler: this.onUpdate,
              //errorMessage: null
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
