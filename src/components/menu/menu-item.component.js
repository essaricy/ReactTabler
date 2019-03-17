import React from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from 'reactstrap';

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
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
        let menuItemName = menuItem.name;
        dropdownItems.push(
          <DropdownItem
            key={menuItemName}
            name={menuItemName}
            tag="a"
            onClick={this.props.onMenuChange}
          >
            {menuItemName}
          </DropdownItem>
        );
      }

      dropdownMenu = (
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link">
            <i className={'fe ' + menuData.iconClass} /> {menuName}
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu dropdown-menu-arrow">
            {dropdownItems}
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    } else {
      dropdownMenu = (
        <a
          href={menuData.url}
          aria-haspopup="false"
          className="nav-link"
          aria-expanded="false"
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
