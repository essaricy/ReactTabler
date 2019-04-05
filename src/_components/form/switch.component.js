import React from "react";
import PropTypes from "prop-types";

export default class Switch extends React.Component {
  render() {
    return (
      <label className="custom-switch">
        <input
          type="checkbox"
          name="custom-switch-checkbox"
          className="custom-switch-input"
        />
        <span className="custom-switch-indicator" />
        <span className="custom-switch-description">{this.props.text}</span>
      </label>
    );
  }
}

Switch.prototypes = {
  text: PropTypes.string.isRequired
};
