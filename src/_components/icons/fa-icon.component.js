import React from "react";

export default class FaIcon extends React.Component {
  render() {
    return (
      <i className={"fa fa-" + this.props.name} style={this.props.style} />
    );
  }
}
