import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CardScene from '../_scenes/card.scene';
import CarousalScene from '../_scenes/carousal.scene';
import CrudScene from '../_scenes/crud.scene';
import InvoiceScene from '../_scenes/invoice.scene';
import FormScene from '../_scenes/form.scene';
import GalleryScene from '../_scenes/gallery.scene';
import HomeScene from '../_scenes/home.scene';
import InterfaceScene from '../_scenes/interface.scene';
import ModalScene from '../_scenes/modal.scene';
import ProfileScene from '../_scenes/profile.scene';
import AlertScene from '../_scenes/alert.scene';

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
          path="/pages/profile"
          render={props => {
            return <ProfileScene {...this.props} title="Profile" />;
          }}
        />
        <Route
          exact
          path="/pages/invoice"
          render={props => {
            return <InvoiceScene {...this.props} title="Invoice" />;
          }}
        />
      </Switch>
    );
  }
}
