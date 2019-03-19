import React from 'react';
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
    if (hasMenuItems) {
      let dropdownItems = [];
      for (let menuItem of menuItems) {
        let menuItemId = menuItem.id;
        let menuItemTitle = menuItem.title;

        dropdownItems.push(
          <DropdownItem
            key={menuItemId}
            tag="a"
            data-id={menuItemId}
            data-title={menuItemTitle}
            data-url={menuItem.url}
            onClick={this.props.onMenuChange}
          >
            {menuItemTitle}
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
      let menuId = menuData.id;
      let menuTitle = menuData.title;
      dropdownMenu = (
        <a
          href={menuData.url}
          aria-haspopup="false"
          className="nav-link"
          aria-expanded="false"
          data-id={menuId}
          data-title={menuTitle}
          data-url={menuData.url}
        >
          <i className={menuData.iconClass} /> {menuName}
        </a>
      );
    }
    return (
      <li className="nav-item" key={this.props.menuName}>
        {dropdownMenu}
      </li>
    );
  }
}
