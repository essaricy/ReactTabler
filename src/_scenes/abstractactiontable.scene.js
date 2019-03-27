import React from 'react';
import SceneContainer from '../_containers/scene.container';
import ActionTable from '../_components/table/actiontable.component';

import * as TableMock from '../_data/table.mock';

export default class AbstractActionTableScene extends SceneContainer {
  constructor(props) {
    super(props);
    //this.state = {};
    this.model = {};

    this.getTableConfig = this.getTableConfig.bind(this);
    this.tableConfig = this.getTableConfig();
    // this.tableConfig = {
    //   title: "Table Title",
    //   url: "dummy",
    //   actions: [],
    //   columnConfig: []

    // };
    //this.getApiUrl = this.getApiUrl.bind(this);
    this.currentRowData = {};
    this.getAddScene = this.getAddScene.bind(this);
    this.getUpdateScene = this.getUpdateScene.bind(this);
  }

  getTableConfig() {
    throw new Error('Subclasses must implement getTableConfig method');
  }

  populate(row) {
    throw Error('Must implement abstract method populate');
  }

  getAddTitle() {
    throw Error('Must implement abstract method getAddTitle');
  }

  getUpdateTitle() {
    throw Error('Must implement abstract method getUpdateTitle');
  }

  getAddScene() {
    throw Error('Must implement abstract method getAddScene');
  }

  getUpdateScene() {
    throw Error('Must implement abstract method getUpdateScene');
  }

  scene() {
    return (
      <div className="row">
        <div className="col-12">
          <ActionTable
            config={this.tableConfig}
            //title={this.tableConfig.title}
            //url={this.tableConfig.url}
            //config={this.tableConfig}
            populate={this.populate}
            dataProvider={this.model}
            headerNames={TableMock.HeaderNamesAction}
            addAction={{
              label: 'Add',
              modalTitle: this.getAddTitle(),
              scene: this.getAddScene()
            }}
            updateAction={{
              label: 'Update',
              modalTitle: this.getUpdateTitle(),
              scene: this.getUpdateScene()
            }}
            deleteAction={{
              label: 'delete'
            }}
          />
        </div>
      </div>
    );
  }
}
