import React from "react";
import "./login.component.css";

import * as ApiConstants from "../../constants/api.constant";
import LoginService from "../../services/login/login.service";

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
    this.loginService = new LoginService({});
  }

  render() {
    return (
      <div className="page-single">
        <div className="container">
          <div className="row">
            <div className="col col-login mx-auto">
              <div className="text-center mb-6">
                <img src="/images/brand/tabler.svg" className="h-6" alt="" />
              </div>
              <form className="card" onSubmit={this.handleSubmit}>
                <div className="card-header">
                  <h3 className="card-title">Login to your account</h3>
                </div>
                {this.state.error ? (
                  <div className="card-alert alert alert-danger mb-0">
                    {this.state.error}
                  </div>
                ) : null}
                <div className="card-body p-6">
                  <div
                    className={
                      this.state.loggingIn ? "dimmer active" : "dimmer"
                    }
                  >
                    <div className="loader" />
                    <div className="dimmer-content">
                      <div className="form-group">
                        <label className="form-label">Login Id</label>
                        <input
                          type="text"
                          className="form-control"
                          id="loginId"
                          aria-describedby="emailHelp"
                          placeholder="Enter email/mobile number"
                          defaultValue={this.state.loginId}
                          required
                          autoFocus
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          Password
                          <a
                            href="./forgot-password.html"
                            className="float-right small"
                          >
                            I forgot password
                          </a>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          defaultValue={this.state.password}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">
                            Remember me
                          </span>
                        </label>
                      </div>
                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center text-muted">
                Don't have account yet? <a href="./register.html">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loggingIn: true, error: null });
    let payload = {
      loginId: this.state.loginId,
      password: this.state.password
    };
    this.loginService.login(payload).then(response => {
      if (response.code === ApiConstants.Result.SUCCESS) {
        this.props.history.push("/dashboard");
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
