import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const size = this.props.size ? 'btn-' + this.props.size : '';
    const kind =
      this.props.kind === 'error' ? 'btn-danger' : 'btn-' + this.props.kind;
    return (
      <button
        disabled={this.props.disabled}
        className={'btn ' + kind + ' ' + size}
        onClick={this.props.onClick}
      >
        {this.props.value}
        {this.props.children}
      </button>
    );
  }
}

Button.prototypes = {
  kind: PropTypes.string.isRequired
};
