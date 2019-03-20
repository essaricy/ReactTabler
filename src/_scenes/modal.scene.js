import React from "react";
import AbstractScene from "./abstract.scene";

export default class ModalScene extends AbstractScene {
  render() {
    return super.getContent(<div>This is Modal page</div>);
  }
}
