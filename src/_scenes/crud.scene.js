import React from "react";
import AbstractScene from "./abstract.scene";

export default class CrudScene extends AbstractScene {
  render() {
    return super.getContent(<div>This is CRUD page</div>);
  }
}
