import React from "react";

export default class CardHeaderTools extends React.Component {
  render() {
    return <div className="card-options">{this.props.children}</div>;
  }
}
