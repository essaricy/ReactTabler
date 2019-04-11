import React from "react";
import PropTypes from "prop-types";
import "./modal.component.css";

import {
  Modal as RSModal,
  ModalHeader as RSModalHeader,
  ModalBody as RSModalBody,
  ModalFooter as RSModalFooter
} from "reactstrap";
import { Button } from "tabler-react";

export default class Modal extends React.Component {
  render() {
    let footerButtons;
    if (this.props.buttons) {
      footerButtons = (
        <RSModalFooter>
          {this.props.buttons.map((button, index) => (
            <Button
              key={index}
              color={button.props.color}
              disabled={button.props.disabled}
              onClick={button.props.onClick}
            >
              {button.props.children}
            </Button>
          ))}
        </RSModalFooter>
      );
    }

    return (
      <RSModal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <RSModalHeader toggle={this.props.toggle} charCode="X">
          {this.props.title}
        </RSModalHeader>
        <RSModalBody>{this.props.children}</RSModalBody>
        {footerButtons}
      </RSModal>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.any,
  buttons: PropTypes.array,
  showClose: PropTypes.bool
};
