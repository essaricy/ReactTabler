import React from "react";

import MenuContainer from "./menu.container";
import * as PageDefault from "../_data/page.default";

import MenuRoutes from "../_routes/menu.routes";

export default class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: PageDefault.DEFAULT_VIEW.title,
      url: PageDefault.DEFAULT_VIEW.url
    };
  }

  render() {
    return (
      <div>
        <MenuContainer onMenuChange={this.onMenuChange} {...this.props} />
        <MenuRoutes />
      </div>
    );
  }
}
