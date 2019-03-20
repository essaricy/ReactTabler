import React from "react";
import AbstractScene from "./abstract.scene";

export default class HomeScene extends AbstractScene {
  render() {
    return super.getContent(<div>This is Home page</div>);
  }
}
