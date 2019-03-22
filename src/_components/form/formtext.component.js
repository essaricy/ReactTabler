import React from "react";

export default class FormText extends React.Component {
  render() {
    return <input className="form-control" {...this.props} />;
  }
}
