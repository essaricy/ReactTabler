import React from "react";

export default class PageContainer extends React.Component {
  render() {
    return (
      <div className="page-content">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">{this.props.title}</h1>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
