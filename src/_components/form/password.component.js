import React from "react";

export default class Password extends React.Component {
  render() {
    return <label className="form-label">{this.props.children}</label>;
  }
}
