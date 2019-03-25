import React from "react";

export default class FeIconLink extends React.Component {
  render() {
    return (
      <a href={this.props.url} className="icon" onClick={this.props.onClick}>
        <i className={"fe fe-" + this.props.name} />
      </a>
    );
  }
}
