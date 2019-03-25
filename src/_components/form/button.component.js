import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button
        className={"btn btn-sm btn-" + this.props.mode}
        onClick={this.props.onClick}
      >
        {this.props.value}
        {this.props.children}
      </button>
    );
  }
}
