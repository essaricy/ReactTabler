import React from "react";

export default class FormPassword extends React.Component {
  render() {
    return <label className="form-label">{this.props.children}</label>;
  }
}
