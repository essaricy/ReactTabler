import React from "react";
import AbstractScene from "./abstract.scene";

export default class GalleryScene extends AbstractScene {
  render() {
    return super.getContent(<div>This is Gallery page</div>);
  }
}
