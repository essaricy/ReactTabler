import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem
} from "reactstrap";

export default class MenuItemComponent extends React.Component {
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

        dropdownItems.push(
          <DropdownItem
            key={menuItem.id}
            data-id={menuItem.id}
            className="dropdown-item"
          >
            <Link to={menuItem.url} style={{ color: "#6e7687" }}>
              {menuItemTitle}
            </Link>
          </DropdownItem>
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
