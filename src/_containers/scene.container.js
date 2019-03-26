import React from "react";

export default class SceneContainer extends React.Component {
  scene() {
    throw new Error("Every scene must implement its own scene()");
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{this.props.title}</h1>
        </div>
        {this.scene()}
      </div>
    );
  }
}
