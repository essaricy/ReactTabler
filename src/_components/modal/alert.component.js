import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Button from "../form/button.component";
import FaIcon from "../icons/fa-icon.component";

export default class AlertComponent extends React.Component {
  constructor(props) {
    super(props);
  }

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
          {this.getTitle()}
        </ModalHeader>
        <ModalBody>{this.props.message}</ModalBody>
        {footerButtons}
      </Modal>
    );
  }

  getTitle() {
    let title;
    let style = {};
    console.log("this.props.type=>" + this.props.type);
    if (this.props.type === "success") {
      title = "SUCCESS";
      style = { color: "green" };
    }
    return (
      <span>
        <FaIcon name="check" size={2} style={style} />
        {title}
      </span>
    );
  }
}

AlertComponent.propTypes = {
  //title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
  //buttons: PropTypes.array,
};
