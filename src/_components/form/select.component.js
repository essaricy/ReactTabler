import React from "react";
import PropTypes from "prop-types";

export default class Select extends React.Component {
  render() {
    let optionElements = [];
    this.props.values.forEach(value => {
      optionElements.push(<option value={value.code}>{value.text}</option>);
    });
    return (
      <select id={this.props.id} class="form-control custom-select">
        {optionElements}
      </select>
    );
  }
}

Select.prototypes = {
  values: PropTypes.array.isRequired
};
