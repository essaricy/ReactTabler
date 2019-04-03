import React from "react";
import "./alert.scene.css";

import SceneContainer from "../_containers/scene.container";
import AlertService from "../_services/alert.service";
import Button from "../_components/form/button.component";

export default class AlertScene extends SceneContainer {
  constructor(props) {
    super(props);
    this.alertService = AlertService.getInstance();
  }

  scene() {
    return (
      <div className="row">
        <Button
          kind="success"
          value="Success Alert"
          onClick={() =>
            this.alertService.success("Your data has been saved successfully")
          }
        />
        <Button
          kind="warning"
          value="Warning Alert"
          onClick={() =>
            this.alertService.warning(
              "Your data has been saved successfully with some errors"
            )
          }
        />
        <Button
          kind="error"
          value="Error Alert"
          onClick={() =>
            this.alertService.error(
              "There was an error doing what is requested for"
            )
          }
        />
        <Button
          kind="info"
          value="Info Alert"
          onClick={() =>
            this.alertService.info(
              "Your data has been saved successfully. Now make sure you go to some other screen and do some other operation"
            )
          }
        />
        <Button
          kind="primary"
          value="Confirmation"
          onClick={() =>
            this.alertService.confirm(
              "Do you really want to do this operation?",
              "Yes, Do It!",
              this.onConfirmation
            )
          }
        />
      </div>
    );
  }

  onConfirmation() {
    console.log("onConfirmation callback method");
  }
}
