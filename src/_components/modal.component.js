import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Button from "./form/button.component";

export default class ModalComponent extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    buttons: PropTypes.array,
    showClose: PropTypes.bool
  };

  render() {
    let footerButtons;
    if (this.props.buttons) {
      footerButtons = (
        <ModalFooter>
          {this.props.buttons.map((button, index) => (
            <Button
              key={index}
              mode="primary"
              type="submit"
              value={button.props.children}
              onClick={button.props.onClick}
            />
          ))}
        </ModalFooter>
      );
    }

    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle} charCode="X">
          {this.props.title}
        </ModalHeader>
        {/* <form key="Add" onSubmit={e => e.preventDefault()}> */}
        <ModalBody>{this.props.children}</ModalBody>
        {footerButtons}
        {/* </form> */}
      </Modal>
    );
  }
}
