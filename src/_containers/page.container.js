import React from "react";
import ReactNotification from "react-notifications-component";

import "react-notifications-component/dist/theme.css";

import HeaderContainer from "./header.container";
import BodyContainer from "./body.container";
import FooterContainer from "./footer.container";
import NotificationService from "../_services/notification.service";
import AlertService from "../_services/alert.service";
import AlertContainer from "./alert.container";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.notificationDOMRef = React.createRef();
    this.alertDOMRef = React.createRef();
    this.notificationService = new NotificationService(this.notificationDOMRef);
    this.alertService = new AlertService(this.alertDOMRef);
  }

  render() {
    return (
      <div>
        <div className="page-main">
          <ReactNotification ref={this.notificationDOMRef} />
          <AlertContainer ref={this.alertDOMRef} />
          <HeaderContainer {...this.props} />
          <BodyContainer {...this.props} />
          <FooterContainer {...this.props} />
        </div>
      </div>
    );
  }
}
