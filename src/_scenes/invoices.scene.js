import React from "react";
import AbstractActionTableScene from "./abstractactiontable.scene";

import FormGroup from "../_components/form/formgroup.component";
import FormLabel from "../_components/form/formlabel.component";
import FormText from "../_components/form/formtext.component";

import * as ApiConstants from "../_constants/api.constant";
import * as Urls from "../_constants/url.constant";

export default class InvoicesScene extends AbstractActionTableScene {
  constructor(props) {
    super(props);
    this.state = { data: { name: "Srikanth" } };
  }

  getResourceUrl() {
    return Urls.API_URL.BASE + Urls.API_URL.INVOICE;
  }

  getRenderer(data) {
    let statusColor;
    if (data.status === "Paid" || data.status === "Paid Today") {
      statusColor = "bg-success";
    } else if (data.status === "Pending") {
      statusColor = "bg-danger";
    } else if (data.status === "Due in 2 Weeks") {
      statusColor = "bg-warning";
    } else {
      statusColor = "bg-grey";
    }

    return [
      <span className="text-muted">{data.id}</span>,
      <a href="/pages/invoices" className="text-inherit">
        {data.subject}
      </a>,
      data.client,
      data.vat,
      data.created,
      <span>
        <span className={"status-icon " + statusColor} />
        {data.status}
      </span>,
      "$" + data.price
    ];
  }

  getAllowedActions() {
    return ["Add", "Update", "Delete"];
  }

  getAddTitle() {
    return "Create new record";
  }

  getUpdateTitle() {
    return "Update record";
  }
  renderAddScene() {
    return (
      <FormGroup>
        <FormLabel>Enter Name:</FormLabel>
        <FormText required autoFocus />
      </FormGroup>
    );
  }
  renderUpdateScene() {
    return (
      <FormGroup>
        <FormLabel>Enter Name:</FormLabel>
        <FormText
          required
          autoFocus
          defaultValue={this.state.data.name}
          onChange={this.setName}
        />
      </FormGroup>
    );
  }

  setName(name) {
    this.setState({ name: name });
  }

  onCreate() {
    console.log("ActionTableScene onCreate: called");
    return {
      code: ApiConstants.Result.FAILURE,
      message: "Name is required"
    };
  }
  onUpdate() {
    console.log("ActionTableScene onUpdate: called");
    return {
      code: ApiConstants.Result.FAILURE,
      message: "Name is required"
    };
  }
  onDelete() {
    console.log("On Delete");
  }

  render() {
    return super.render();
  }
}
