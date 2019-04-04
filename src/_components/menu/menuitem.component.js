import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownToggle as RSDropdownToggle,
  DropdownMenu as RSDropdownMenu,
  UncontrolledDropdown as RSUncontrolledDropdown,
  DropdownItem as RSDropdownItem
} from "reactstrap";

export default class MenuItem extends React.Component {
  render() {
    const menuName = this.props.name;
    const menuData = this.props.data;
    const menuItems = menuData.menuItems;
    const hasMenuItems = menuData.menuItems && menuItems.length !== 0;

    let dropdownMenu;
    if (hasMenuItems) {
      const dropdownItems = [];
      for (const menuItem of menuItems) {
        const menuItemTitle = menuItem.title;

        dropdownItems.push(
          <RSDropdownItem
            key={menuItem.id}
            data-id={menuItem.id}
            className="dropdown-item"
          >
            <Link to={menuItem.url} style={{ color: "#6e7687" }}>
              {menuItemTitle}
            </Link>
          </RSDropdownItem>
        );
      }

      dropdownMenu = (
        <RSUncontrolledDropdown setActiveFromChild>
          <RSDropdownToggle tag="a" className="nav-link">
            <i className={menuData.iconClass} /> {menuName}
          </RSDropdownToggle>
          <RSDropdownMenu className="dropdown-menu dropdown-menu-arrow">
            {dropdownItems}
          </RSDropdownMenu>
        </RSUncontrolledDropdown>
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
