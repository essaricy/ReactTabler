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
            <FormGroupContainer label="Text">
              <Text placeholder="Your place holder here" />
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
              <Select
                values={[
                  { code: "G", text: "Germany" },
                  { code: "I", text: "India" }
                ]}
              />
            </FormGroupContainer>
          </CardBody>
        </Card>
      </div>
    );
  }
}
