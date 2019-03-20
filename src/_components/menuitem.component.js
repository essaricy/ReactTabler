import React from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from 'reactstrap';

export default class MenuItemComponent extends React.Component {
  render() {
    let menuName = this.props.name;
    let menuData = this.props.data;
    let menuItems = menuData.menuItems;
    let hasMenuItems = menuData.menuItems && menuItems.length !== 0;

    let dropdownMenu;
    // if (!hasMenuItems) {
    //   dropdownMenu = (<Link to={menuData.url} className="nav-link">
    //     <i className={menuData.iconClass} /> {menuName}
    //   </Link>);
    // }
    // return (
    //   <li className="nav-item" key={this.props.menuName}>
    //     {dropdownMenu}
    //   </li>
    // );

    if (hasMenuItems) {
      let dropdownItems = [];
      for (let menuItem of menuItems) {
        let menuItemId = menuItem.id;
        let menuItemTitle = menuItem.title;

        dropdownItems.push(
          <Link to={menuItem.url} className="dropdown-item">
            {menuItemTitle}
          </Link>

          // <DropdownItem
          //   key={menuItemId}
          //   onClick={this.props.onMenuChange}
          // >
          //   <Link to={menuItem.url} className="dropdown-item">
          //     <i className={menuItem.iconClass} /> {menuItemTitle}
          //   </Link>
          // </DropdownItem>
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
      let menuId = menuData.id;
      let menuTitle = menuData.title;
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
