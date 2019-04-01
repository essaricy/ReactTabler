import React from "react";
import ActionTableContainer from "../_containers/actiontable.container";

import FormGroup from "../_components/form/formgroup.component";
import FormLabel from "../_components/form/formlabel.component";
import FormText from "../_components/form/formtext.component";
import * as Urls from "../_constants/url.constant";

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
        //modalTitle: "Add New Invoice",
        content: this.getModalScene
      },
      update: {
        modalTitle: "Update Invoice",
        content: this.getModalScene
      },
      delete: {}
    };
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

  getModelId(model) {
    return model.id;
  }

  getModalScene(data) {
    console.log("getModalScene ======>" + JSON.stringify(data));
    return (
      <div>
        <input type="hidden" id="id" defaultValue={data.id} />
        <FormGroup>
          <FormLabel>Subject</FormLabel>
          <FormText id="subject" defaultValue={data.subject} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Client</FormLabel>
          <FormText
            id="client"
            defaultValue={data.client}
            //onChange={this.setModalDataById}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>VAT#</FormLabel>
          <FormText
            id="vat"
            defaultValue={data.vat}
            //onChange={this.setModalDataById}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Created</FormLabel>
          <FormText
            id="created"
            defaultValue={data.created}
            //onChange={this.setModalDataById}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Status</FormLabel>
          <FormText
            id="status"
            defaultValue={data.status}
            //onChange={this.setModalDataById}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Price</FormLabel>
          <FormText
            id="price"
            defaultValue={data.price}
            //onChange={this.setModalDataById}
          />
        </FormGroup>
      </div>
    );
  }
}
