import React from "react";

export default class FeIcon extends React.Component {
  render() {
    return <i className={"fe fe-" + this.props.name} />;
  }
}
