import React from "react";
import AbstractScene from "./abstract.scene";

export default class DataTableScene extends AbstractScene {
  render() {
    return super.getContent(<div>This is Data Table page</div>);
  }
}
