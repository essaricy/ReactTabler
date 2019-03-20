import React from 'react';
import {
  BrowserRouter,
  Router,
  //HashRouter,
  Switch,
  Route
  //Link
} from 'react-router-dom';

import MenuContainer from './menu.container';
import * as PageDefault from '../_data/page.default';

import FormsScene from '../_scenes/forms.scene';
import GalleryScene from '../_scenes/gallery.scene';
import InterfaceScene from '../_scenes/interface.scene';
import CrudScene from '../_scenes/crud.scene';
import ProfileScene from '../_scenes/profile.scene';

export default class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: PageDefault.DEFAULT_VIEW.title,
      url: PageDefault.DEFAULT_VIEW.url
    };
    this.onMenuChange = this.onMenuChange.bind(this);
    //this.props.history.push(this.state.url);
  }

  componentWillMount() {
    //this.props.history.push(this.state.url);
    //hashHistory.push(this.state.url);
  }

  onMenuChange(e) {
    let id = e.target.getAttribute('data-id');
    let title = e.target.getAttribute('data-title');
    let url = e.target.getAttribute('data-url');
    console.log('Requested for a new view: ' + id + ' with URL: ' + url);
    //this.setState({ id: id, title: title, url: url });
    //this.props.history.push(url);
  }

  render() {
    return (
      <div>
        <MenuContainer onMenuChange={this.onMenuChange} {...this.props} />
        {/* <Route
              exact
              path="/"
              render={props => {
                if (this.state.id === 'Pages/Crud') {
                  return <CrudScene {...this.props} />;
                } else {
                  return <ProfileScene {...this.props} />;
                }
              }}
            /> */}
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
