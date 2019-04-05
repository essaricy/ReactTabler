import React from "react";
import PropTypes from "prop-types";

export default class Checkbox extends React.Component {
  render() {
    return (
      <label className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          value={this.props.value}
        />
        <span className="custom-control-label">{this.props.value}</span>
      </label>
    );
  }
}

Checkbox.prototypes = {
  name: PropTypes.string,
  value: PropTypes.string
};
