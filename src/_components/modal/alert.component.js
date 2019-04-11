import React from "react";
import PropTypes from "prop-types";

import { Button, Icon } from "tabler-react";
import Modal from "./modal.component";
import * as AlertUtil from "../../_utils/alert.util";

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      message: "",
      confirmLabel: "",
      onConfirm: null,
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.onConfirmation = this.onConfirmation.bind(this);
  }

  toggle() {
    console.log("toggle() called.");
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    if (!this.state.isOpen) {
      return "";
    }
    const type = this.state.type;
    console.log("type => " + type);
    return (
      <Modal
        title={this.getHeader(type)}
        isOpen={this.state.isOpen}
        toggle={this.state.toggle}
        buttons={this.getFooterButtons(type)}
      >
        {this.state.message}
      </Modal>
    );
  }

  getHeader(type) {
    const alertType = AlertUtil.getAlert(type);
    return (
      <span>
        <Icon
          prefix="fa"
          name={alertType.faIcon}
          style={{ color: alertType.color }}
        />
        {" " + alertType.title}
      </span>
    );
  }

  getFooterButtons(type) {
    const buttons = [];
    if (type === "confirm") {
      buttons.push(
        <Button
          key="confirm_yes"
          color="primary"
          //size="sm"
          onClick={this.onConfirmation}
        >
          {this.state.confirmLabel}
        </Button>
      );
    }
    buttons.push(
      <Button
        key="close"
        color="default"
        //size="sm"
        onClick={this.state.toggle}
      >
        Close
      </Button>
    );
    return buttons;
  }

  onConfirmation() {
    this.toggle();
    // return promise that is already resolved
    this.state.onConfirm();
  }
}

Alert.propTypes = {
  //type: PropTypes.string.isRequired,
  //message: PropTypes.string.isRequired
};
