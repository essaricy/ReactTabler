import React from "react";
import PropTypes from "prop-types";

export default class Select extends React.Component {
  render() {
    let optionElements = [];
    this.props.values.forEach(value => {
      optionElements.push(
        <option key={value.code} value={value.code}>
          {value.text}
        </option>
      );
    });
    return (
      <select id={this.props.id} className="form-control custom-select">
        {optionElements}
      </select>
    );
  }
}

Select.prototypes = {
  values: PropTypes.array.isRequired
};
