import React from "react";
import ActionTableContainer from "../_containers/actiontable.container";

import { Button, Card, Dimmer, Form, Text } from "tabler-react";
import * as Urls from "../_constants/url.constant";
import * as Events from "../_utils/event.util";

export default class InvoiceScene extends React.Component {
  constructor(props) {
    super(props);

    this.getColumns = this.getColumns.bind(this);
  }

  render() {
    return (
      <ActionTableContainer
        title="Invoices"
        url={Urls.API_URL.BASE + Urls.API_URL.INVOICE}
        columns={this.getColumns()}
        actions={this.getActions()}
      />
    );
  }

  getColumns() {
    return [
      {
        name: "Id",
        field: "id",
        hide: true
      },
      {
        name: "Subject",
        field: "subject",
        sort: true,
        render: data => (
          <a href="/page/invoice" className="text-inherit">
            {data.subject}
          </a>
        )
      },
      {
        name: "Client",
        field: "client",
        sort: true
      },
      {
        name: "Vat #",
        field: "vat",
        render: data => <span className="text-muted">{data.vat}</span>
      },
      {
        name: "Created",
        field: "created",
        sort: true
      },
      {
        name: "Status",
        field: "status",
        sort: true,
        render: data => (
          <span>
            <span
              className={"status-icon " + this.getStatusColor(data.status)}
            />
            {data.status}
          </span>
        )
      },
      {
        name: "Price",
        field: "price",
        sort: true,
        render: data => {
          return "$" + data.price;
        }
      }
    ];
  }

  getActions() {
    return {
      add: {
        modalTitle: "Add New Invoice",
        getEmpty: this.getEmpty,
        content: this.getModalScene
      },
      update: {
        modalTitle: "Update Invoice",
        content: this.getModalScene
      },
      delete: {
        message: "Do you really want to delete this invoice?"
      }
    };
  }

  getEmpty() {
    return {
      id: 0,
      subject: "Test subject",
      client: "Test client",
      vat: "87956421",
      created: "24 Aug 2018",
      status: "Pending",
      price: 10
    };
  }

  getModalScene(data) {
    return (
      <div>
        <input type="hidden" id="id" defaultValue={data.id} />
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Input
            id="subject"
            defaultValue={data.subject}
            onChange={e => Events.setDataById(e, data)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Client</Form.Label>
          <Form.Input
            id="client"
            defaultValue={data.client}
            onChange={e => Events.setDataById(e, data)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>VAT#</Form.Label>
          <Form.Input
            id="vat"
            defaultValue={data.vat}
            onChange={e => Events.setDataById(e, data)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Created</Form.Label>
          <Form.Input
            id="created"
            defaultValue={data.created}
            onChange={e => Events.setDataById(e, data)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Input
            id="status"
            defaultValue={data.status}
            onChange={e => Events.setDataById(e, data)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Input
            id="price"
            defaultValue={data.price}
            onChange={e => Events.setDataById(e, data)}
          />
        </Form.Group>
      </div>
    );
  }

  getStatusColor(status) {
    let statusColor;
    if (status === "Paid" || status === "Paid Today") {
      statusColor = "bg-success";
    } else if (status === "Pending") {
      statusColor = "bg-danger";
    } else if (status === "Due in 2 Weeks") {
      statusColor = "bg-warning";
    } else {
      statusColor = "bg-grey";
    }
    return statusColor;
  }
}
