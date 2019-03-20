import React from "react";
import AbstractScene from "./abstract.scene";

export default class CarousalScene extends AbstractScene {
  render() {
    return super.getContent(<div>This is Carousal page</div>);
  }
}
