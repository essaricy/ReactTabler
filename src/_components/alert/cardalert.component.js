import React from "react";
import PropTypes from "prop-types";

export default class CardAlert extends React.Component {
  render() {
    let alertContent = "";
    if (this.props.message && this.props.message !== "") {
      const type = this.props.type;
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

CardAlert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
};
