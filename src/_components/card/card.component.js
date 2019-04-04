import React from "react";
import PropTypes from "prop-types";

export default class Card extends React.Component {
  render() {
    let card;
    if (this.props.form) {
      card = (
        <form className="card" {...this.props}>
          {this.props.children}
        </form>
      );
    } else {
      card = <div className="card">{this.props.children}</div>;
    }
    return card;
  }
}

Card.propTypes = {
  form: PropTypes.bool
};
