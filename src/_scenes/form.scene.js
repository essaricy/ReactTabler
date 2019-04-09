import React from "react";
import SceneContainer from "../_containers/scene.container";

export default class FormScene extends SceneContainer {
  scene() {
    return (
      <div className="col-md-6 col-xl-4">
        {/* <Card>
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
        </Card> */}
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
