import React from "react";

import * as AppConstants from "../_constants/app.constant";

import MenuService from "../_services/menu.service";

export default class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: {}
    };
    this.menuService = new MenuService();
  }

  componentDidMount() {
    this.setState({
      menus: this.menuService.accessList(AppConstants.Role.ADMIN)
    });
  }

  render() {
    return "";
    // <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
    //   <div className="container">
    //     <div className="row align-items-center">
    //       <div className="col-lg-3 ml-auto">
    //         <form className="input-icon my-3 my-lg-0">
    //           <input
    //             type="search"
    //             className="form-control header-search"
    //             placeholder="Search&hellip;"
    //           />
    //           <div className="input-icon-addon">
    //             <i className="fe fe-search" />
    //           </div>
    //         </form>
    //       </div>
    //       <div className="col-lg order-lg-first">
    //         <Menu
    //           data={this.state.menus}
    //           onMenuChange={this.props.onMenuChange}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  }
}
