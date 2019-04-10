import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal as RSModal,
  ModalHeader as RSModalHeader,
  ModalBody as RSModalBody,
  ModalFooter as RSModalFooter
} from 'reactstrap';
import {
  Button,
  Card,
  Dimmer,
  Form,
  Grid,
  Icon,
  List,
  RouterContextProvider,
  Site,
  Text
} from 'tabler-react';

export default class Modal extends React.Component {
  render() {
    let footerButtons;
    if (this.props.buttons) {
      footerButtons = (
        <RSModalFooter>
          {this.props.buttons.map((button, index) => (
            <Button
              key={index}
              kind={button.props.kind}
              disabled={button.props.disabled}
              size={button.props.size}
              //type="submit"
              value={button.props.value}
              onClick={button.props.onClick}
            />
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
