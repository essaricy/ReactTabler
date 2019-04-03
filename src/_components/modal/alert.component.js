import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Button from "../form/button.component";
import FaIcon from "../icons/fa-icon.component";
import * as AlertUtil from "../../_utils/alert.util";

export default class AlertComponent extends React.Component {
  render() {
    if (!this.props.isOpen) {
      return "";
    }
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle} charCode="X">
          {this.getHeader()}
        </ModalHeader>
        <ModalBody>{this.props.message}</ModalBody>
        <ModalFooter>
          <Button
            mode="primary"
            size="sm"
            value="OK"
            onClick={this.props.toggle}
          />
        </ModalFooter>
      </Modal>
    );
  }

  getHeader() {
    const alertType = AlertUtil.getAlert(this.props.type);
    return (
      <span>
        <FaIcon name={alertType.faIcon} style={{ color: alertType.color }} />
        {" " + alertType.title}
      </span>
    );
  }
}

AlertComponent.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
