import React from "react";
import "./alert.scene.css";

import SceneContainer from "../_containers/scene.container";
import AlertService from "../_services/alert.service";

export default class AlertScene extends SceneContainer {
  constructor(props) {
    super(props);
    this.alertService = AlertService.getInstance();
  }

  scene() {
    return (
      <div className="row">
        <button
          className="btn btn-success"
          onClick={() =>
            this.alertService.success("Your data has been saved successfully")
          }
        >
          Success Alert
        </button>
        <button
          className="btn btn-warning"
          onClick={() =>
            this.alertService.warning(
              "Your data has been saved successfully but there were errors"
            )
          }
        >
          Warning Alert
        </button>
        <button
          className="btn btn-danger"
          onClick={() =>
            this.alertService.error(
              "There was an error doing what is requested for"
            )
          }
        >
          Error Alert
        </button>
        <button
          className="btn btn-info"
          onClick={() =>
            this.alertService.info(
              "Your data has been saved successfully. Now make sure you go to some other screen and do some other operation"
            )
          }
        >
          Info Alert
        </button>
      </div>
    );
  }
}
