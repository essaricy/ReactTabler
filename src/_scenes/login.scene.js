import React from "react";

import * as ApiConstants from "../_constants/api.constant";
import LoginService from "../_services/login.service";
import Card from "../_components/card/card.component";
import CardHeader from "../_components/card/cardheader.component";
import CardBody from "../_components/card/cardbody.component";
import CardAlert from "../_components/alert/cardalert.component";
import FormGroup from "../_components/form/formgroup.component";
import FormLabel from "../_components/form/formlabel.component";
import FormText from "../_components/form/formtext.component";
import LoginBox from "../_containers/login.container";
import Logo from "../_components/app/logo.component";
import CardDimmer from "../_components/card/carddimmer.component";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    // 200 for good, 401 for unauthorized and 500 for server error
    this.state = {
      loginId: "200",
      password: "#password",
      loggingIn: false,
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
    this.loginService = new LoginService();
  }

  render() {
    return (
      <LoginBox>
        <Logo />
        <Card form="true" onSubmit={this.handleSubmit}>
          <CardHeader title="Login to your account" />
          <CardAlert type="error" message={this.state.error} />
          <CardBody>
            <CardDimmer active={this.state.loggingIn}>
              <FormGroup>
                <FormLabel>Login Id</FormLabel>
                <FormText
                  placeholder="Enter email/mobile number"
                  defaultValue={this.state.loginId}
                  required
                  autoFocus
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>
                  Password
                  <a href="/" className="float-right small">
                    I forgot password
                  </a>
                </FormLabel>
                <FormText
                  type="password"
                  placeholder="Password"
                  defaultValue={this.state.password}
                  required
                />
              </FormGroup>
              <div className="form-group">
                <label className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <span className="custom-control-label">Remember me</span>
                </label>
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign in
                </button>
              </div>
            </CardDimmer>
          </CardBody>
        </Card>
        <div className="text-center text-muted">
          Don't have account yet? <a href="/">Sign up</a>
        </div>
      </LoginBox>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loggingIn: true, error: null });
    const payload = {
      loginId: this.state.loginId,
      password: this.state.password
    };
    this.loginService.login(payload).then(response => {
      if (response.code === ApiConstants.Result.SUCCESS) {
        this.props.onLoginSuccessful();
      } else {
        this.handleError(response.message);
      }
      this.setState({ loggingIn: false });
    });
  }

  handleError(message) {
    this.setState({ error: message });
  }
}
