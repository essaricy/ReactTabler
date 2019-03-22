import React from "react";
import PropTypes from "prop-types";

export default class AlertComponent extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
  };

  render() {
    let type = this.props.type;
    let cssClasses;
    if (type === "error") {
      cssClasses = "danger";
    } else if (type === "warning") {
      cssClasses = "warning";
    }
    if (type === "success") {
      cssClasses = "success";
    }
    return (
      <div className={"card-alert alert alert-" + cssClasses + " mb-0"}>
        {this.props.message}
      </div>
    );
  }
}
