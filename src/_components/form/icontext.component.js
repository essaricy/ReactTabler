import React from "react";
import PropTypes from "prop-types";

import FeIcon from "../icons/fe-icon.component";
import Text from "./text.component";

export default class IconText extends React.Component {
  render() {
    let content;
    if (this.props.align === "right") {
      content = (
        <div className="input-icon mb-3">
          <Text
            id={this.props.id}
            defaultValue={this.props.defaultValue}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
          />
          <span className="input-icon-addon">
            <FeIcon name={this.props.iconName} />
          </span>
        </div>
      );
    } else {
      content = (
        <div className="input-icon">
          <span className="input-icon-addon">
            <FeIcon name={this.props.iconName} />
          </span>
          <Text
            id={this.props.id}
            defaultValue={this.props.defaultValue}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
          />
        </div>
      );
    }
    return content;
  }
}

IconText.prototypes = {
  iconName: PropTypes.string.isRequired,
  align: PropTypes.string
};
