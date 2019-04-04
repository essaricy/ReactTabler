import React from "react";
import PropTypes from "prop-types";
import Modal from "../modal/modal.component";
import Button from "../form/button.component";
import FaIcon from "../icons/fa-icon.component";
import * as AlertUtil from "../../_utils/alert.util";

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.onConfirmation = this.onConfirmation.bind(this);
  }

  render() {
    if (!this.props.isOpen) {
      return "";
    }
    const type = this.props.type;
    return (
      <Modal
        title={this.getHeader(type)}
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        buttons={this.getFooterButtons(type)}
      >
        {this.props.message}
      </Modal>
    );
  }

  getHeader(type) {
    const alertType = AlertUtil.getAlert(type);
    return (
      <span>
        <FaIcon name={alertType.faIcon} style={{ color: alertType.color }} />
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
          kind="primary"
          size="sm"
          value={this.props.confirmLabel}
          onClick={this.onConfirmation}
        />
      );
    }
    buttons.push(
      <Button
        key="close"
        kind="default"
        size="sm"
        value="Close"
        onClick={this.props.toggle}
      />
    );
    return buttons;
  }

  onConfirmation() {
    this.props.toggle();
    // return promise that is already resolved
    this.props.onConfirm();
  }
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};