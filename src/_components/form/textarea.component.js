import React from "react";

export default class TextArea extends React.Component {
  render() {
    return (
      <textarea
        className="form-control"
        id={this.props.id}
        defaultValue={this.props.defaultValue}
        rows={this.props.rows}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}
