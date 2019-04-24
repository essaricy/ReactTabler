import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";

import LoginScene from "./_scenes/login.scene";
import SiteContainer from "./_containers/site.container";
import LoginService from "./_services/login.service";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false, loginError: null };
    this.onLoginSuccessful = this.onLoginSuccessful.bind(this);
    this.onLoginFailure = this.onLoginFailure.bind(this);
    this.onLogout = this.onLogout.bind(this);

    this.loginService = new LoginService();
  }

  componentWillMount() {
    this.loginService
      .validate()
      .then(isAuthenticated =>
        this.setState({ isAuthenticated: isAuthenticated })
      );
  }

  onLoginSuccessful() {
    this.setState({ isAuthenticated: true, loginError: null });
  }

  onLoginFailure() {
    this.setState({
      isAuthenticated: false,
      loginError: "Unable to login now"
    });
  }

  onLogout() {
    this.loginService.logout();
    this.setState({
      isAuthenticated: false,
      loginError: "You have been logged out successfully"
    });
  }

  render() {
    let landingPage;
    if (this.state.isAuthenticated) {
      landingPage = <SiteContainer {...this.props} onLogout={this.onLogout} />;
    } else {
      landingPage = (
        <LoginScene
          {...this.props}
          error={this.state.loginError}
          onLoginSuccessful={this.onLoginSuccessful}
        />
      );
    }
    return <React.Fragment>{landingPage}</React.Fragment>;
  }
}

export default withRouter(props => <App {...props} />);
