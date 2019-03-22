import React from "react";

export default class FormLabel extends React.Component {
  render() {
    return <label className="form-label">{this.props.children}</label>;
  }
}
