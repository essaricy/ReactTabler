import React from "react";
import SceneContainer from "../_containers/scene.container";

import Card from "../_components/card/card.component";
import CardHeader from "../_components/card/cardheader.component";
import CardHeaderTools from "../_components/card/cardheadertools.component";
import CardBody from "../_components/card/cardbody.component";
import CardFooter from "../_components/card/cardfooter.component";

export default class CardScene extends SceneContainer {
  scene() {
    return (
      <div className="col-md-6 col-xl-4">
        <Card>
          <CardHeader title="Card Title Here">
            <CardHeaderTools>
              <a href="/" className="card-options-collapse">
                <i className="fe fe-chevron-up" />
              </a>
            </CardHeaderTools>
          </CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            deleniti fugit incidunt, iste, itaque minima neque pariatur
            perferendis sed suscipit velit vitae voluptatem. A consequuntur,
            deserunt eaque error nulla temporibus!
          </CardBody>
          <CardFooter>Card footer content</CardFooter>
        </Card>
      </div>
    );
  }
}
