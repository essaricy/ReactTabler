import React from "react";
import { Link } from "react-router-dom";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown } from "reactstrap";

export default class MenuItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedMenuId: "" };
    this.onMenuChange = this.onMenuChange.bind(this);
  }

  onMenuChange(e) {
    let menuId = e.target.getAttribute("data-id");
    console.log("Selected Menu Id " + menuId);
    this.state.selectedMenuId = menuId;
  }

  render() {
    let menuName = this.props.name;
    let menuData = this.props.data;
    let menuItems = menuData.menuItems;
    let hasMenuItems = menuData.menuItems && menuItems.length !== 0;

    let dropdownMenu;
    if (hasMenuItems) {
      let dropdownItems = [];
      for (let menuItem of menuItems) {
        let menuItemTitle = menuItem.title;

        let active = this.state.selectedMenuId === menuItem.id;
        dropdownItems.push(
          <Link
            data-id={menuItem.id}
            key={menuItem.id}
            to={menuItem.url}
            className={active ? "dropdown-item active" : "dropdown-item"}
            onClick={this.onMenuChange}
          >
            {menuItemTitle}
          </Link>
        );
      }

      dropdownMenu = (
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link">
            <i className={menuData.iconClass} /> {menuName}
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu dropdown-menu-arrow">
            {dropdownItems}
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    } else {
      dropdownMenu = (
        <Link to={menuData.url} className="nav-link">
          <i className={menuData.iconClass} /> {menuName}
        </Link>
      );
    }
    return (
      <li className="nav-item" key={this.props.menuName}>
        {dropdownMenu}
      </li>
    );
  }
}
