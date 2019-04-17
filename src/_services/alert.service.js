//import React from "react";

export default class AlertService {
  static instance;

  constructor() {}

  static getInstance() {
    return AlertService.instance;
  }

  static setInstance(alertDOMRef) {
    AlertService.instance = alertDOMRef;
  }

  static success(message) {
    AlertService.getInstance().showAlert("success", message);
  }

  static warning(message) {
    AlertService.getInstance().showAlert("warning", message);
  }

  static info(message) {
    AlertService.getInstance().showAlert("info", message);
  }

  static error(message) {
    AlertService.getInstance().showAlert("error", message);
  }

  showAlert(type, message) {
    const alert = AlertService.getInstance();
    alert.current.state.type = type;
    alert.current.state.message = message;
    alert.current.toggle();
  }

  static confirm(message, confirmLabel = "Yes", onConfirm = function() {}) {
    const alert = AlertService.getInstance();
    alert.current.state.type = "confirm";
    alert.current.state.message = message;
    alert.current.state.confirmLabel = confirmLabel;
    alert.current.state.onConfirm = onConfirm;
    alert.current.toggle();
  }
}
