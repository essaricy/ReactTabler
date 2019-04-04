import React from "react";

export default class Text extends React.Component {
  render() {
    return (
      <input
        className="form-control"
        id={this.props.id}
        defaultValue={this.props.defaultValue}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}
