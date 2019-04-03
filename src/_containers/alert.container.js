import React from "react";

import AlertComponent from "../_components/modal/alert.component";

export default class AlertContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      message: "",
      //confirmLabel: props.confirmLabel ? props.confirmLabel : "Yes",
      confirmLabel: "",
      onConfirm: null,
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <AlertComponent
        type={this.state.type}
        message={this.state.message}
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        confirmLabel={this.state.confirmLabel}
        onConfirm={this.state.onConfirm}
      />
    );
  }
}
