import React from "react";

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.menuItems) {
    }
    return (
      <li className="nav-item" key={this.props.itemName}>
        <a href="/dashboard" className="nav-link" data-toggle="dropdown">
          <i className={"fe " + this.props.iconClass} /> {this.props.itemName}
        </a>
      </li>
    );
  }
}
