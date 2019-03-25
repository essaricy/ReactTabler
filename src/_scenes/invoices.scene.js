import React from 'react';
import AbstractActionTableScene from './abstractactiontable.scene';

import FormGroup from '../_components/form/formgroup.component';
import FormLabel from '../_components/form/formlabel.component';
import FormText from '../_components/form/formtext.component';

import * as ApiConstants from '../_constants/api.constant';
import * as Urls from '../_constants/url.constant';

export default class InvoicesScene extends AbstractActionTableScene {
  constructor(props) {
    super(props);
    //this.currentRowData = { id: "001406", subject: "Software Update", client: "Shiskha", vat: "87956421", created: "24 Aug 2018", status: "Paid", price: "365" };
    //this.state = { currentRowData: this.currentRowData };
    this.state = {
      id: '001406',
      subject: 'Software Update',
      client: 'Shiskha',
      vat: '87956421',
      created: '24 Aug 2018',
      status: 'Paid',
      price: '365'
    };
    this.setData = this.setData.bind(this);
  }

  getResourceUrl() {
    return Urls.API_URL.BASE + Urls.API_URL.INVOICE;
  }

  getRenderer(data) {
    let statusColor;
    if (data.status === 'Paid' || data.status === 'Paid Today') {
      statusColor = 'bg-success';
    } else if (data.status === 'Pending') {
      statusColor = 'bg-danger';
    } else if (data.status === 'Due in 2 Weeks') {
      statusColor = 'bg-warning';
    } else {
      statusColor = 'bg-grey';
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
        <span className={'status-icon ' + statusColor} />
        {data.status}
      </span>,
      '$' + data.price
    ];
  }

  getAllowedActions() {
    return ['Add', 'Update', 'Delete'];
  }

  getAddTitle() {
    return 'Create new record';
  }

  getUpdateTitle() {
    return 'Update record';
  }
  renderAddScene() {
    let data = this.state;
    return (
      <div>
        <FormGroup>
          <FormLabel>Enter Id</FormLabel>
          <FormText
            id="id"
            required
            autoFocus
            defaultValue={data.id}
            onChange={this.setData}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Subject</FormLabel>
          <FormText
            id="subject"
            defaultValue={data.subject}
            onChange={this.setData}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Client</FormLabel>
          <FormText
            id="client"
            defaultValue={data.client}
            onChange={this.setData}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>VAT#</FormLabel>
          <FormText id="vat" defaultValue={data.vat} onChange={this.setData} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Created</FormLabel>
          <FormText
            id="created"
            defaultValue={data.created}
            onChange={this.setData}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Status</FormLabel>
          <FormText
            id="status"
            defaultValue={data.status}
            onChange={this.setData}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Price</FormLabel>
          <FormText
            id="price"
            defaultValue={data.price}
            onChange={this.setData}
          />
        </FormGroup>
      </div>
    );
  }

  setData(e) {
    let id = e.target.id;
    let value = e.target.value;
    //this.currentRowData[id] = e.target.value;
    //this.setState({ currentRowData: this.currentRowData });
    this.setState({ [id]: value });
  }

  renderUpdateScene() {
    return (
      <FormGroup>
        <FormLabel>Enter Name:</FormLabel>
        <FormText
          required
          autoFocus
          defaultValue={this.state.name}
          onChange={this.setName}
        />
      </FormGroup>
    );
  }

  // onCreate() {
  //   console.log("ActionTableScene onCreate: called");
  //   return {
  //     code: ApiConstants.Result.FAILURE,
  //     message: "Name is required"
  //   };
  // }
  // onUpdate() {
  //   console.log("ActionTableScene onUpdate: called");
  //   return {
  //     code: ApiConstants.Result.FAILURE,
  //     message: "Name is required"
  //   };
  // }
  // onDelete() {
  //   console.log("On Delete");
  // }

  render() {
    return super.render();
  }
}
