import React from "react";
import PropTypes from "prop-types";

export default class FormGroupContainer extends React.Component {
  render() {
    let starMark;
    if (this.props.required) {
      starMark = <span className="form-required">*</span>;
    }

    return "";
    // <FormGroup>
    //   <Label>
    //     {this.props.label}
    //     {starMark}
    //   </Label>
    //   {this.props.children}
    // </FormGroup>
  }
}

FormGroupContainer.prototypes = {
  label: PropTypes.string.isRequired
};
