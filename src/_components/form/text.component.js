import React from "react";

export default class Text extends React.Component {
  render() {
    return (
      <input
        className="form-control"
        id={this.props.id}
        required={this.props.required}
        defaultValue={this.props.defaultValue}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}
