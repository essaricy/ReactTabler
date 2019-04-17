//import React from "react";

export default class AlertService {
  static _instance;

  constructor(domRef) {
    this.domRef = domRef;
  }

  static getInstance() {
    if (!AlertService._instance) {
      throw Error(
        'AlertService._instance is not set. Use setInstance before calling getInstance'
      );
    }
    return AlertService._instance;
  }

  static initiate(domRef) {
    AlertService._instance = new AlertService(domRef);
    return domRef;
  }

  static success(message) {
    AlertService.getInstance().showAlert('success', message);
  }

  static warning(message) {
    AlertService.getInstance().showAlert('warning', message);
  }

  static info(message) {
    AlertService.getInstance().showAlert('info', message);
  }

  static error(message) {
    AlertService.getInstance().showAlert('error', message);
  }

  static confirm(message, confirmLabel = 'Yes', onConfirm = function() {}) {
    const domRef = AlertService.getInstance().getDomRef();
    domRef.current.state.type = 'confirm';
    domRef.current.state.message = message;
    domRef.current.state.confirmLabel = confirmLabel;
    domRef.current.state.onConfirm = onConfirm;
    domRef.current.toggle();
  }

  showAlert(type, message) {
    const domRef = this.getDomRef();
    domRef.current.state.type = type;
    domRef.current.state.message = message;
    domRef.current.toggle();
  }

  getDomRef() {
    return this.domRef;
  }
}
