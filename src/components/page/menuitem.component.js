import React from "react";

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let styleShow = { display: "block" };
    let styleHide = { display: "none" };

    let showMenu = this.props.menuName === this.props.selectedMenuName;
    let hasMenuItems =
      this.props.menuItems && this.props.menuItems.length !== 0;

    let menuDropdown;
    if (hasMenuItems) {
      menuDropdown = (
        <div
          className={"dropdown-menu dropdown-menu-arrow"}
          style={showMenu ? styleShow : styleHide}
        >
          <a href="./cards.html" className="dropdown-item ">
            Cards design
          </a>
        </div>
      );
    }
    return (
      <li className="nav-item" key={this.props.menuName}>
        <a
          href={null}
          className="nav-link"
          data-toggle="dropdown"
          //onClick={this.props.onSelectingMenu(this.props.selectedMenuName)}
        >
          <i className={"fe " + this.props.iconClass} /> {this.props.menuName}
        </a>
        {menuDropdown}
      </li>
    );
  }
}
