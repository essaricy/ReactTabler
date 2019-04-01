import React from "react";
import SceneContainer from "../_containers/scene.container";
import ActionTable from "../_components/table/actiontable.component";

export default class AbstractActionTableScene extends SceneContainer {
  constructor(props) {
    super(props);

    this.getTableConfig = this.getTableConfig.bind(this);
    this.getModalScene = this.getModalScene.bind(this);
    this.setModalDataById = this.setModalDataById.bind(this);
    this.setModalDataByName = this.setModalDataByName.bind(this);

    this.tableConfig = this.getTableConfig();
    this.setActionDefaults();
  }

  getTableConfig() {
    throw new Error("Subclasses must implement getTableConfig method");
  }

  setActionDefaults() {
    // Populate action defaults
    let actions = this.tableConfig.actions;
    if (actions) {
      if (actions.add) {
        actions.add.triggerName = actions.add.triggerName
          ? actions.add.triggerName
          : "Add";
        actions.add.modalTitle = actions.add.modalTitle
          ? actions.add.modalTitle
          : "Add new record";
        actions.add.scene = this.getModalScene;
        actions.add.actionName = actions.add.actionName
          ? actions.add.actionName
          : "Submit";
      }
    }
    if (actions.update) {
      actions.update.triggerName = actions.update.triggerName
        ? actions.update.triggerName
        : "Update";
      actions.update.modalTitle = actions.update.modalTitle
        ? actions.update.modalTitle
        : "Update record";
      actions.update.scene = this.getModalScene;
      actions.update.actionName = actions.update.actionName
        ? actions.update.actionName
        : "Update";
    }
  }

  getModalScene() {
    throw Error("Must implement abstract method getModalScene");
  }

  getModelId(model) {
    throw Error("Must implement abstract method getModelId");
  }

  setModalDataById(e) {
    let id = e.target.id;
    let value = e.target.value;
    console.log(id + "=" + value);
    this.modalData[id] = value;
  }

  setModalDataByName(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.modalData[name] = value;
  }

  scene() {
    return (
      <div className="row">
        <div className="col-12">
          <ActionTable
            config={this.tableConfig}
            modalData={this.state.modalData}
            getModelId={this.getModelId}
          />
        </div>
      </div>
    );
  }
}
