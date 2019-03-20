import React from "react";

export default class AbstractScene extends React.Component {
  getContent(pageContent) {
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{this.props.title}</h1>
        </div>
        {pageContent}
      </div>
    );
  }
}
