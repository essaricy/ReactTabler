import React from "react";

export default class LoginBox extends React.Component {
  render() {
    return (
      <div className="page-single">
        <div className="container">
          <div className="row">
            <div className="col col-login mx-auto">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
