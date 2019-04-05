import React from "react";
import PropTypes from "prop-types";

export default class Radio extends React.Component {
  render() {
    let radioElements = [];

    this.props.choices.forEach(choice => {
      const checked = this.props.text
        ? this.props.value === this.choice.text
        : false;
      radioElements.push(
        <label
          key={choice.code}
          className="custom-control custom-radio custom-control-inline"
        >
          <input
            type="radio"
            className="custom-control-input"
            name={this.props.name}
            value={choice.code}
            //checked={checked}
          />
          <span className="custom-control-label">{choice.text}</span>
        </label>
      );
    });
    return <div className="custom-controls-stacked">{radioElements}</div>;
  }
}

Radio.prototypes = {
  name: PropTypes.string,
  choices: PropTypes.array.isRequired,
  value: PropTypes.string
};
