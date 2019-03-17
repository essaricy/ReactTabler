import React from 'react';

import * as AppConstants from '../constants/app.constant';

import MenuItem from '../components/menu/menuitem.component';
import MenuService from '../services/page/menu.service';

export default class PageMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: {},
      selectedMenuName: null
    };
    this.onSelectingMenu = this.onSelectingMenu.bind(this);
    this.menuService = new MenuService({});
  }

  componentDidMount() {
    this.setState({
      menus: this.menuService.accessList(AppConstants.Role.ADMIN)
    });
  }

  render() {
    JSON.stringify(this.state.menus);

    return (
      <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 ml-auto">
              <form className="input-icon my-3 my-lg-0">
                <input
                  type="search"
                  className="form-control header-search"
                  placeholder="Search&hellip;"
                />
                <div className="input-icon-addon">
                  <i className="fe fe-search" />
                </div>
              </form>
            </div>
            <div className="col-lg order-lg-first">
              <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                {Object.keys(this.state.menus).map((key, value) => (
                  <MenuItem key={key} name={key} data={this.state.menus[key]} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onSelectingMenu(selectedMenuName) {
    this.setState({
      selectedMenuName: selectedMenuName
    });
  }
}
