import React from "react";
import SceneContainer from "../_containers/scene.container";
import Card from "../_components/card/card.component";
import CardHeader from "../_components/card/cardheader.component";
import CardBody from "../_components/card/cardbody.component";

import Text from "../_components/form/text.component";
import PlainText from "../_components/form/plaintext.component";
import TextArea from "../_components/form/textarea.component";
import IconText from "../_components/form/icontext.component";
import Select from "../_components/form/select.component";
import FormGroupContainer from "../_containers/formgroup.container";
import Switch from "../_components/form/switch.component";
import Radio from "../_components/form/radio.component";
import Checkbox from "../_components/form/checkbox.component";

export default class FormScene extends SceneContainer {
  scene() {
    return (
      <div className="col-md-6 col-xl-4">
        <Card>
          <CardHeader title="Form" />
          <CardBody>
            <FormGroupContainer label="Static">
              <PlainText>Some Id</PlainText>
            </FormGroupContainer>
            <FormGroupContainer label="Text" required>
              <Text placeholder="Your place holder here" required />
            </FormGroupContainer>
            <FormGroupContainer label="Textarea">
              <TextArea
                defaultValue="Oh! Come and see the violence inherent in the system! Help,
                help, I'm being repressed! We shall say 'Ni' again to you,
                if you do not appease us. I'm not a witch. I'm not a witch.
                Camelot!"
              />
            </FormGroupContainer>
            <FormGroupContainer label="Icon Text">
              <IconText
                iconName="search"
                align="left"
                placeholder="Enter search string here..."
              />
            </FormGroupContainer>
            <FormGroupContainer label="Select Country">
              <Select values={this.getCountries()} />
            </FormGroupContainer>
            <FormGroupContainer label="Toggle with switch">
              <Switch text="I agree with terms and conditions" />
            </FormGroupContainer>
            <FormGroupContainer label="Radio Buttons">
              <Radio name="radio" choices={this.getChoices()} />
            </FormGroupContainer>
            <FormGroupContainer label="Radio Buttons">
              <Checkbox name="checkbox" value="Checkbox 1" />
            </FormGroupContainer>
          </CardBody>
        </Card>
      </div>
    );
  }

  getCountries() {
    return [{ code: "G", text: "Germany" }, { code: "I", text: "India" }];
  }

  getChoices() {
    return [
      { code: "1", text: "Choice 1" },
      { code: "2", text: "Choice 2" },
      { code: "3", text: "Choice 3" }
    ];
  }
}
