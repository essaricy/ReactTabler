import React from "react";

export default class CardDimmer extends React.Component {
  render() {
    return (
      <div className={this.props.active ? "dimmer active" : "dimmer"}>
        <div className="loader" />
        <div className="dimmer-content">{this.props.children}</div>
      </div>
    );
  }
}
