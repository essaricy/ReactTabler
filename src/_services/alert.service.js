//import React from "react";

export default class AlertService {
  static instance;

  constructor(domRef) {
    if (AlertService.instance) {
      return AlertService.instance;
    }
    if (!domRef) {
      throw Error("DOM REF is required to create alert service");
    }
    this.alertDOMRef = domRef;
    AlertService.instance = this;
  }
  static getInstance() {
    if (AlertService.instance) {
      return AlertService.instance;
    }
  }

  success(message) {
    this.showAlert("success", message);
  }

  warning(message) {
    this.showAlert("warning", message);
  }

  info(message) {
    this.showAlert("info", message);
  }

  error(message) {
    this.showAlert("error", message);
  }

  showAlert(type, message) {
    this.alertDOMRef.current.state.type = type;
    this.alertDOMRef.current.state.message = message;
    this.alertDOMRef.current.toggle();
  }

  confirm(message, confirmLabel = "Yes", onConfirm = function() {}) {
    this.alertDOMRef.current.state.type = "confirm";
    this.alertDOMRef.current.state.message = message;
    this.alertDOMRef.current.state.confirmLabel = confirmLabel;
    this.alertDOMRef.current.state.onConfirm = onConfirm;
    this.alertDOMRef.current.toggle();
  }
}
