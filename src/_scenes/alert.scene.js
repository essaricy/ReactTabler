import React from "react";
import SceneContainer from "../_containers/scene.container";
import AlertComponent from "../_components/modal/alert.component";

export default class AlertScene extends SceneContainer {
  constructor(props) {
    super(props);
    this.state = {
      alertType: "",
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.showSuccessAlert = this.showSuccessAlert.bind(this);
    this.save = this.save.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  save() {
    console.log("Saving Data");
    this.toggle();
  }

  showSuccessAlert(e) {
    this.setState(prevState => ({
      alertType: "success",
      isOpen: !prevState.isOpen
    }));
  }

  scene() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.showSuccessAlert}>
          Launch Success Alert
        </button>
        <button className="btn btn-warning" onClick={this.toggle}>
          Launch Warning Alert
        </button>
        <button className="btn btn-danger" onClick={this.toggle}>
          Launch Failure Alert
        </button>
        <button className="btn btn-info" onClick={this.toggle}>
          Launch Info Alert
        </button>
        <button className="btn btn-primary" onClick={this.toggle}>
          Launch Alert
        </button>
        <AlertComponent
          type={this.state.alertType}
          message="Testing Message"
          //title="Sample Title"
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          //buttons={[<button onClick={this.save}>Save</button>]}
        >
          <label>Alert Body</label>
        </AlertComponent>
      </div>
    );
  }
}
