import React from "react";
import PropTypes from "prop-types";
//import AlertConstants from "../_constants/alert.constant";

export default class AlertComponent extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
  };

  render() {
    //AlertConstants.Config;
    let alertContent = "";
    if (this.props.message && this.props.message !== "") {
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
      alertContent = (
        <div
          className={
            "card-alert alert alert-icon alert-" + cssClasses + " mb-0"
          }
        >
          <i className="fe fe-x-circle mr-2" aria-hidden="true" />
          {this.props.message}
        </div>
      );
    }

    return alertContent;
  }
}
