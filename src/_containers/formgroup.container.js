import React from "react";
import PropTypes from "prop-types";

import FormGroup from "../_components/form/formgroup.component";
import Label from "../_components/form/label.component";

export default class FormGroupContainer extends React.Component {
  render() {
    return (
      <FormGroup>
        <Label>{this.props.label}</Label>
        {this.props.children}
      </FormGroup>
    );
  }
}

FormGroupContainer.prototypes = {
  label: PropTypes.string.isRequired
};
