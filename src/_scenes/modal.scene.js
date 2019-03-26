import React from "react";
import SceneContainer from "../_containers/scene.container";
import ModalComponent from "../_components/modal.component";

export default class ModalScene extends SceneContainer {
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

  scene() {
    return (
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
