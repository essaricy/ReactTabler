import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";

import LoginScene from "./_scenes/login.scene";
import PageContainer from "./_containers/page.container";
import LoginService from "./_services/login.service";

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
    let landingPage;
    if (this.state.isAutenticated) {
      landingPage = <PageContainer onLogout={this.onLogout} />;
    } else {
      landingPage = <LoginScene onLoginSuccessful={this.onLoginSuccessful} />;
    }
    return <div>{landingPage}</div>;
  }
}

export default withRouter(props => <App {...props} />);
