import React from "react";

export default class FaIcon extends React.Component {
  render() {
    let size =
      this.props.size && this.props.size <= 1
        ? ""
        : " fa-" + this.props.size + "x";
    return (
      <i
        className={"fa fa-" + this.props.name + size}
        style={this.props.style}
      />
    );
  }
}
