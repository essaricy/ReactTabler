import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import LoginScene from './_scenes/login.scene';
import PageContainer from './_containers/page.container';
import LoginService from './_services/login.service';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loginService = new LoginService();
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
              return <PageContainer onLogout={this.onLogout} {...this.props} />;
            } else {
              return (
                <LoginScene
                  onLoginSuccessful={this.onLoginSuccessful}
                  {...this.props}
                />
              );
            }
          }}
        />
      </BrowserRouter>
    );
  }
}

export default App;
