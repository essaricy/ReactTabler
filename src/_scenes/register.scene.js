import React from 'react';
import { Button, Card, Dimmer, Form, Text } from 'tabler-react';

import LoginBox from '../_containers/login.container';
import Logo from '../_components/app/logo.component';

import * as ApiConstants from '../_constants/api.constant';
import LoginService from '../_services/login.service';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    // 200 for good, 401 for unauthorized and 500 for server error
    this.state = {
      loginId: '',
      password: '',
      loggingIn: false,
      error: this.props.error
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
    this.loginService = new LoginService();
  }

  render() {
    let cardError;
    if (this.state.error) {
      cardError = <Card.Alert color="danger">{this.state.error}</Card.Alert>;
    }
    return (
      <LoginBox>
        <Logo />
        <Form onSubmit={this.handleSubmit}>
          <Card>
            <Card.Header>Registration</Card.Header>
            {cardError}
            <Card.Body>
              <Dimmer active={this.state.loggingIn} loader={true}>
                <Form.Group>
                  <Form.Label>Login Id</Form.Label>
                  <Form.Input
                    name="loginId"
                    placeholder="Enter email/mobile number"
                    defaultValue={this.state.loginId}
                    required
                    autoFocus
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Password
                    <Button link className="float-right small">
                      <Text.Small>I forgot password</Text.Small>
                    </Button>
                  </Form.Label>
                  <Form.Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    defaultValue={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Checkbox name="rememberMe" label="Remember me" />
                <div className="form-footer">
                  <Button color="primary" block>
                    Sign in
                  </Button>
                </div>
              </Dimmer>
            </Card.Body>
          </Card>
        </Form>
        <div className="text-center text-muted">
          <Text.Small>
            Already have an account? <a href="/">Login</a>
          </Text.Small>
        </div>
      </LoginBox>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
