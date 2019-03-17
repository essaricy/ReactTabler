import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/login/login.component';
import Page from './template/page.template';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Login {...props} />} />
          <Route path="/dashboard" component={Page} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
