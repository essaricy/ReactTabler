import React from "react";
import PropTypes from "prop-types";

export default class FormPassword extends React.Component {
  render() {
    return <label className="form-label">{this.props.children}</label>;
  }
}
