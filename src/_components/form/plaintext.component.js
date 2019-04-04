import React from "react";

export default class PlainText extends React.Component {
  render() {
    return (
      <div className="form-control-plaintext" id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}
