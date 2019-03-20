import React from "react";
import AbstractScene from "./abstract.scene";

export default class InterfaceScene extends AbstractScene {
  render() {
    return super.getContent(<div>This is Interface page</div>);
  }
}
