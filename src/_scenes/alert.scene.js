import React from 'react';
import './alert.scene.css';

import SceneContainer from '../_containers/scene.container';
import AlertComponent from '../_components/modal/alert.component';

export default class AlertScene extends SceneContainer {
  constructor(props) {
    super(props);
    this.state = {
      alertType: '',
      alertMessage: '',
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.showSuccessAlert = this.showSuccessAlert.bind(this);
    this.showWarningAlert = this.showWarningAlert.bind(this);
    this.showErrorAlert = this.showErrorAlert.bind(this);
    this.showInfoAlert = this.showInfoAlert.bind(this);
  }

  toggle(e) {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  showSuccessAlert() {
    this.setState(prevState => ({
      alertType: 'success',
      alertMessage: 'Your data has been saved successfully',
      isOpen: !prevState.isOpen
    }));
  }

  showWarningAlert() {
    this.setState(prevState => ({
      alertType: 'warning',
      alertMessage:
        'Your data has been saved successfully but there were errors',
      isOpen: !prevState.isOpen
    }));
  }

  showErrorAlert() {
    this.setState(prevState => ({
      alertType: 'error',
      alertMessage: 'There was an error doing what is requested for',
      isOpen: !prevState.isOpen
    }));
  }

  showInfoAlert() {
    this.setState(prevState => ({
      alertType: 'info',
      alertMessage:
        'Your data has been saved successfully. Now make sure you go to some other screen and do some other operation',
      isOpen: !prevState.isOpen
    }));
  }

  scene() {
    return (
      <div className="row">
        <button className="btn btn-success" onClick={this.showSuccessAlert}>
          Success Alert
        </button>
        <button className="btn btn-warning" onClick={this.showWarningAlert}>
          Warning Alert
        </button>
        <button className="btn btn-danger" onClick={this.showErrorAlert}>
          Failure Alert
        </button>
        <button className="btn btn-info" onClick={this.showInfoAlert}>
          Info Alert
        </button>
        <AlertComponent
          type={this.state.alertType}
          message={this.state.alertMessage}
          isOpen={this.state.isOpen}
          toggle={this.toggle}
        />
      </div>
    );
  }
}
