import React from "react";

export default class NotificationService {
  static instance;

  constructor(domRef) {
    if (NotificationService.instance) {
      return NotificationService.instance;
    }
    if (!domRef) {
      throw Error("DOM REF is required to create notification service");
    }
    this.notificationDOMRef = domRef;
    this.addNotification = this.addNotification.bind(this);
    NotificationService.instance = this;
  }
  static getInstance() {
    if (NotificationService.instance) {
      return NotificationService.instance;
    }
  }

  addNotification(type, title, message) {
    this.notificationDOMRef.current.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "bottom-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 0 },
      dismissable: { click: true }
    });
  }

  success(message) {
    this.notificationDOMRef.current.addNotification({
      title: "Success",
      message: message,
      type: "success",
      insert: "top",
      container: "bottom-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 0 },
      dismissable: { click: true }
    });
  }

  error(message) {
    this.notificationDOMRef.current.addNotification({
      title: "Error",
      message: message,
      type: "danger",
      insert: "top",
      container: "bottom-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 0 },
      dismissable: { click: true }
    });
  }
}
