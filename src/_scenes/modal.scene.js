import React from "react";
import AbstractScene from "./abstract.scene";
import ModalComponent from "../_components/modal.component";

export default class ModalScene extends AbstractScene {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  save() {
    console.log("Saving Data");
    this.toggle();
  }

  render() {
    return super.getContent(
      <div>
        <button className="btn btn-primary" onClick={this.toggle}>
          Launch Modal
        </button>
        <ModalComponent
          title="Sample Title"
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          buttons={[<button onClick={this.save}>Save</button>]}
        >
          <label>Modal Body</label>
        </ModalComponent>
      </div>
    );
  }
}
