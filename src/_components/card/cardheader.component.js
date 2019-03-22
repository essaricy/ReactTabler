import React from "react";

export default class CardHeader extends React.Component {
  render() {
    return (
      <div className="card-header">
        <h3 className="card-title">{this.props.title}</h3>
        {this.props.children}
      </div>
    );
  }
}
