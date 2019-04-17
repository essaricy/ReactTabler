import React from "react";
import ReactNotification from "react-notifications-component";

import "react-notifications-component/dist/theme.css";

import HeaderContainer from "./header.container";
import BodyContainer from "./body.container";
import FooterContainer from "./footer.container";
import NotificationService from "../_services/notification.service";
import AlertService from "../_services/alert.service";

export default class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.notificationDOMRef = React.createRef();
    this.notificationService = new NotificationService(this.notificationDOMRef);
    AlertService.setInstance(React.createRef());
  }

  render() {
    return (
      <div>
        <div className="page-main">
          <ReactNotification ref={this.notificationDOMRef} />
          <div ref={AlertService.getInstance()} />
          <HeaderContainer {...this.props} />
          <BodyContainer {...this.props} />
          <FooterContainer {...this.props} />
        </div>
      </div>
    );
  }
}
