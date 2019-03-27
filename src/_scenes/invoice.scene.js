import React from 'react';
import AbstractActionTableScene from './abstractactiontable.scene';

import FormGroup from '../_components/form/formgroup.component';
import FormLabel from '../_components/form/formlabel.component';
import FormText from '../_components/form/formtext.component';
import * as Urls from '../_constants/url.constant';

export default class InvoiceScene extends AbstractActionTableScene {
  constructor(props) {
    super(props);
    this.model = {
      id: '001407',
      subject: 'Software Update',
      client: 'Shiskha',
      vat: '87956421',
      created: '24 Aug 2018',
      status: 'Paid',
      price: '365'
    };
    this.setData = this.setData.bind(this);
  }

  getTableConfig() {
    return {
      title: 'Invoices',
      url: Urls.API_URL.BASE + Urls.API_URL.INVOICE,
      actions: ['Add', 'Update', 'Delete'],
      columns: [
        {
          name: '#',
          field: 'id',
          show: false,
          sort: false
        },
        {
          name: 'Subject',
          field: 'subject'
        },
        {
          name: 'Client',
          field: 'client'
        },
        {
          name: 'Vat #',
          field: 'vat'
        },
        {
          name: 'Created',
          field: 'created'
        },
        {
          name: 'Status',
          field: 'status'
        },
        {
          name: 'Price',
          field: 'price'
        }
      ]
    };
  }
  populate(data) {
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

  getAddTitle() {
    return 'Create new record';
  }

  getUpdateTitle() {
    return 'Update record';
  }
  getAddScene() {
    let data = this.model;
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
    this.model[id] = value;
    //this.setState({ [id]: value });
  }

  getUpdateScene() {
    return (
      <FormGroup>
        <FormLabel>Enter Name:</FormLabel>
        <FormText
          required
          autoFocus
          //defaultValue={this.state.name}
          onChange={this.setName}
        />
      </FormGroup>
    );
  }
}
