import React from 'react';

import * as AppConstants from '../constants/app.constant';

import Menu from '../components/menu/menu.component';
import MenuService from '../services/page/menu.service';

export default class PageMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: {}
    };
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
              <Menu
                data={this.state.menus}
                onMenuChange={this.props.onMenuChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
