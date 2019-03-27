import React from 'react';
import PropTypes from 'prop-types';
import './actiontable.component.css';

import CardComponent from '../card/card.component';
import CardHeaderComponent from '../card/cardheader.component';
import CardHeaderToolsComponent from '../card/cardheadertools.component';
import ResponsiveTableComponent from './responsivetable.component';
import Button from '../form/button.component';
import ModalComponent from '../modal.component';
import FeIconLink from '../icons/fe-icon-link.component';

import * as ApiConstants from '../../_constants/api.constant';
import ActionTableService from '../../_services/actiontable.service';
import NotificationService from '../../_services/notification.service';

export default class ActionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isAddOpen: false,
      isUpdateOpen: false
    };

    this.model = [];
    this.updateModel = this.updateModel.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);

    this.onAddAction = this.onAddAction.bind(this);
    this.onUpdateAction = this.onUpdateAction.bind(this);
    this.actionTableService = new ActionTableService(this.props.config.url);
    this.notificationService = NotificationService.getInstance();
  }

  componentWillMount() {
    this.actionTableService.getAll().then(response => {
      this.model = response;
      this.setState({ data: this.model });
    });
  }

  updateModel(record) {
    // Update the corresponding record and change the state
    //this.model = response;
    //let data = this.state.data;
    // TODO update the model, based on uniqueness of the record
    this.model[this.model.length] = record;
    this.setState({ data: this.model });
  }

  toggleAdd() {
    this.setState(prevState => ({
      isAddOpen: !prevState.isAddOpen
    }));
  }
  toggleUpdate() {
    this.setState(prevState => ({
      isUpdateOpen: !prevState.isUpdateOpen
    }));
  }

  onAddAction() {
    console.log('ActionTableComponent: onAddAction called');
    // Call API and get the response
    this.actionTableService.add(this.props.dataProvider).then(response => {
      // Check the response and close add popup
      if (response.code === ApiConstants.Result.SUCCESS) {
        // Add Record to the table.
        this.updateModel(this.props.dataProvider);
        this.toggleAdd();
        this.notificationService.success(response.message);
      } else {
        this.notificationService.error(response.message);
      }
    });
  }

  onUpdateAction() {
    console.log('ActionTableComponent: onUpdateAction called');
    // Check the response and close update popup
    let response = this.props.addAction.handler();
    if (response.code === ApiConstants.Result.SUCCESS) {
      this.toggleUpdate();
    } else {
      console.log('ActionTableComponent: onUpdateAction failed');
      this.setState({ updateErrorMessage: response.message });
    }
  }

  validate() {
    if (!this.props.config.url) {
      throw Error("Prop 'config.url' is required");
    }
  }

  getHeaderNames() {
    let headerNames = [];
    this.props.config.columns.forEach(column => {
      headerNames.push(<th key={column.name}>{column.name}</th>);
    });
    return headerNames;
  }

  getPermissions() {
    let actions = this.props.config.actions;
    return {
      add: actions.includes('Add') && this.props.addAction,
      edit: actions.includes('Update') && this.props.updateAction,
      delete: actions.includes('Delete') && this.props.deleteAction
    };
  }

  render() {
    this.validate();

    let headerNames = this.getHeaderNames();
    let permissions = this.getPermissions();
    let headerTools = [];
    let tableDataRows = [];

    if (permissions.add) {
      headerTools.push(this.getAddContent());
    }

    // let numberOfColumns = this.props.headerNames.length;

    // if (this.model == null || this.model.length === 0) {
    //   // No records found
    //   tableDataRows.push(this.getNoDataContent(numberOfColumns));
    // } else {
    //   this.model.forEach((rowData, rowIndex) => {
    //     let columns = [];
    //     tableDataRows.push(
    //       <tr row-id={rowIndex} key={rowIndex}>
    //         {this.props.populate(rowData).forEach((cellData, cellIndex) =>
    //           columns.push(
    //             <td cell-id={cellIndex} key={cellIndex}>
    //               {cellData}
    //             </td>
    //           )
    //         )}
    //         {columns}
    //         <td cell-id={numberOfColumns - 1} key={numberOfColumns - 1}>
    //           {this.state.allowEdit ? this.getUpdateLink() : ""}
    //           {rowIndex === 0 ? this.getUpdateModal() : ""}
    //           {this.state.allowDelete ? this.getDeleteContent() : ""}
    //         </td>
    //       </tr>
    //     );
    //   });
    // }
    // Add "+" button if action contains "Add"
    // if (this.state.allowAdd) {
    //   actionButtons.push(this.getAddContent());
    // }
    return (
      <CardComponent>
        <CardHeaderComponent title={this.props.config.title}>
          <CardHeaderToolsComponent>{headerTools}</CardHeaderToolsComponent>
        </CardHeaderComponent>
        <ResponsiveTableComponent headers={headerNames} data={tableDataRows} />
      </CardComponent>
    );
  }

  getAddContent() {
    let addAction = this.props.addAction;
    return (
      <div key="Add">
        <Button
          mode="primary"
          value={addAction.label ? addAction.label : 'Add'}
          onClick={this.toggleAdd}
        />
        <ModalComponent
          title={addAction.modalTitle}
          isOpen={this.state.isAddOpen}
          toggle={this.toggleAdd}
          buttons={[
            <Button type="submit" mode="primary" onClick={this.onAddAction}>
              Create
            </Button>
          ]}
        >
          {addAction.scene}
        </ModalComponent>
      </div>
    );
  }
  getUpdateLink() {
    return <FeIconLink onClick={this.toggleUpdate} name="edit-3" />;
  }
  getUpdateModal() {
    // Get the selected record and set the data
    let updateAction = this.props.updateAction;
    return (
      <ModalComponent
        title={updateAction.modalTitle}
        isOpen={this.state.isUpdateOpen}
        toggle={this.toggleUpdate}
        buttons={[
          <Button type="submit" mode="primary" onClick={this.onUpdateAction}>
            Update
          </Button>
        ]}
      >
        {updateAction.scene}
      </ModalComponent>
    );
  }

  getDeleteContent() {
    return <FeIconLink url="/" name="trash" />;
  }
}

ActionTable.propTypes = {};