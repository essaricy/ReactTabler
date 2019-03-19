import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Login from "./pages/login/login.component";
import Page from "./template/page.template";

import LoginService from "./services/login/login.service";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loginService = new LoginService({});
    this.state = { isAutenticated: this.loginService.isUserAuthenticated() };
    this.onLoginSuccessful = this.onLoginSuccessful.bind(this);
    this.onLoginFailure = this.onLoginFailure.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLoginSuccessful() {
    this.setState({ isAutenticated: true });
  }

  onLoginFailure() {
    this.setState({ isAutenticated: false });
  }

  onLogout() {
    this.setState({ isAutenticated: false });
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={props => {
            if (this.state.isAutenticated) {
              return <Page onLogout={this.onLogout} />;
            } else {
              return <Login onLoginSuccessful={this.onLoginSuccessful} />;
            }
          }}
        />
      </BrowserRouter>
    );
  }
}

export default App;
