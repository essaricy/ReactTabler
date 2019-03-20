import React from "react";
import { Switch, Route } from "react-router-dom";

import MenuContainer from "./menu.container";
import * as PageDefault from "../_data/page.default";

import FormsScene from "../_scenes/forms.scene";
import GalleryScene from "../_scenes/gallery.scene";
import InterfaceScene from "../_scenes/interface.scene";
import CrudScene from "../_scenes/crud.scene";
import ProfileScene from "../_scenes/profile.scene";

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
        <Switch>
          <Route
            exact
            path="/forms"
            render={props => {
              return <FormsScene {...this.props} />;
            }}
          />
          <Route
            exact
            path="/gallery"
            render={props => {
              return <GalleryScene {...this.props} />;
            }}
          />
          <Route
            exact
            path="/interface"
            render={props => {
              return <InterfaceScene {...this.props} />;
            }}
          />
          <Route
            exact
            path="/pages/crud"
            render={props => {
              return <CrudScene {...this.props} />;
            }}
          />
          <Route
            exact
            path="/pages/profile"
            render={props => {
              return <ProfileScene {...this.props} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
