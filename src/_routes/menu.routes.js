import React from "react";
import { Switch, Route } from "react-router-dom";

import CardScene from "../_scenes/card.scene";
import CarousalScene from "../_scenes/carousal.scene";
import CrudScene from "../_scenes/crud.scene";
import InvoiceScene from "../_scenes/invoice.scene";
import SimpleTableScene from "../_scenes/simpletable.scene";
import FormScene from "../_scenes/form.scene";
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
          path="/form"
          render={props => {
            return <FormScene {...this.props} title="Form" />;
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
          path="/page/profile"
          render={props => {
            return <ProfileScene {...this.props} title="Profile" />;
          }}
        />
        <Route
          exact
          path="/page/invoice"
          render={props => {
            return <InvoiceScene {...this.props} title="Invoice" />;
          }}
        />
      </Switch>
    );
  }
}
