import React from "react";
import AbstractScene from "./abstract.scene";

export default class FormsScene extends AbstractScene {
  render() {
    return super.getContent(<div>This is Forms page</div>);
  }
}
