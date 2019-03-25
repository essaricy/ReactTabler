import React from 'react';

export default class FormText extends React.Component {
  render() {
    return (
      <input
        className="form-control"
        id={this.props.id}
        defaultValue={this.props.defaultValue}
        onChange={this.props.onChange}
      />
    );
  }
}
