import React from "react";
import { Switch, Route } from "react-router-dom";

import CardScene from "../_scenes/card.scene";
import CarousalScene from "../_scenes/carousal.scene";
import CrudScene from "../_scenes/crud.scene";
import ActionTableScene from "../_scenes/actiontable.scene";
import SimpleTableScene from "../_scenes/simpletable.scene";
import FormsScene from "../_scenes/forms.scene";
import GalleryScene from "../_scenes/gallery.scene";
import HomeScene from "../_scenes/home.scene";
import InterfaceScene from "../_scenes/interface.scene";
import ModalScene from "../_scenes/modal.scene";
import ProfileScene from "../_scenes/profile.scene";

export default class MenuRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => {
            return <HomeScene {...this.props} title="Home" />;
          }}
        />
        <Route
          exact
          path="/forms"
          render={props => {
            return <FormsScene {...this.props} title="Forms" />;
          }}
        />
        <Route
          exact
          path="/gallery"
          render={props => {
            return <GalleryScene {...this.props} title="Gallery" />;
          }}
        />
        <Route
          exact
          path="/interface"
          render={props => {
            return <InterfaceScene {...this.props} title="Interface" />;
          }}
        />
        <Route
          exact
          path="/component/card"
          render={props => {
            return <CardScene {...this.props} title="Card" />;
          }}
        />
        <Route
          exact
          path="/component/simpletable"
          render={props => {
            return <SimpleTableScene {...this.props} title="Simple Table" />;
          }}
        />
        <Route
          exact
          path="/component/actiontable"
          render={props => {
            return <ActionTableScene {...this.props} title="Action Table" />;
          }}
        />
        <Route
          exact
          path="/component/modal"
          render={props => {
            return <ModalScene {...this.props} title="Modal" />;
          }}
        />
        <Route
          exact
          path="/component/carousal"
          render={props => {
            return <CarousalScene {...this.props} title="Carousal" />;
          }}
        />
        <Route
          exact
          path="/page/crud"
          render={props => {
            return <CrudScene {...this.props} title="Crud" />;
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
    );
  }
}
