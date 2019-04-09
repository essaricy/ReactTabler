import React from 'react';
import { Switch, Route } from 'react-router-dom';

import InvoiceScene from '../_scenes/invoice.scene';
import HomeScene from '../_scenes/home.scene';
import ProfileScene from '../_scenes/profile.scene';

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
