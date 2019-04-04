import React from "react";
import SceneContainer from "../_containers/scene.container";
import Modal from "../_components/modal/modal.component";
import Button from "../_components/form/button.component";

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
        <Button kind="primary" value="Launch Modal" onClick={this.toggle} />
        <Modal
          title="Sample Title"
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          buttons={[<button onClick={this.save}>Save</button>]}
        >
          <label>Modal Body</label>
        </Modal>
      </div>
    );
  }
}
