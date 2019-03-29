import React from 'react';
import AbstractActionTableScene from './abstractactiontable.scene';

import FormGroup from '../_components/form/formgroup.component';
import FormLabel from '../_components/form/formlabel.component';
import FormText from '../_components/form/formtext.component';
import * as Urls from '../_constants/url.constant';

export default class InvoiceScene extends AbstractActionTableScene {
  constructor(props) {
    super(props);
    // this.model = {
    //   id: "001407",
    //   subject: "Software Update",
    //   client: "Shiskha",
    //   vat: "87956421",
    //   created: "24 Aug 2018",
    //   status: "Paid",
    //   price: "365"
    // };
    //this.setData = this.setData.bind(this);
  }

  getTableConfig() {
    return {
      title: 'Invoices',
      url: Urls.API_URL.BASE + Urls.API_URL.INVOICE,
      columns: [
        {
          name: 'Id',
          field: 'id',
          hide: true,
          render: data => <span className="text-muted">{data.id}</span>
        },
        {
          name: '#',
          field: 'id',
          sort: true,
          render: data => <span className="text-muted">{data.id}</span>
        },
        {
          name: 'Subject',
          field: 'subject',
          sort: true,
          render: data => (
            <a href="/page/invoice" className="text-inherit">
              {data.subject}
            </a>
          )
        },
        {
          name: 'Client',
          field: 'client',
          sort: true
        },
        {
          name: 'Vat #',
          field: 'vat'
        },
        {
          name: 'Created',
          field: 'created',
          sort: true
        },
        {
          name: 'Status',
          field: 'status',
          sort: true,
          render: data => (
            <span>
              <span
                className={'status-icon ' + this.getStatusColor(data.status)}
              />
              {data.status}
            </span>
          )
        },
        {
          name: 'Price',
          field: 'price',
          sort: true,
          render: data => {
            return '$' + data.price;
          }
        }
      ],
      actions: {
        add: {
          modalTitle: 'Add New Invoice'
        },
        update: {
          modalTitle: 'Update Invoice'
        },
        delete: {}
      }
    };
  }

  getStatusColor(status) {
    let statusColor;
    if (status === 'Paid' || status === 'Paid Today') {
      statusColor = 'bg-success';
    } else if (status === 'Pending') {
      statusColor = 'bg-danger';
    } else if (status === 'Due in 2 Weeks') {
      statusColor = 'bg-warning';
    } else {
      statusColor = 'bg-grey';
    }
    return statusColor;
  }

  getModalScene(model) {
    console.log('getModalScene ======>' + JSON.stringify(model));
    return (
      <div>
        <FormGroup>
          <FormLabel>Enter Id</FormLabel>
          <FormText
            id="id"
            required
            autoFocus
            defaultValue={model.id}
            //onChange={this.setData}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Subject</FormLabel>
          <FormText
            id="subject"
            defaultValue={model.subject}
            // onChange={this.setData}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Client</FormLabel>
          <FormText
            id="client"
            defaultValue={model.client}
            // onChange={this.setData}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>VAT#</FormLabel>
          <FormText id="vat" defaultValue={model.vat} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Created</FormLabel>
          <FormText
            id="created"
            defaultValue={model.created}
            // onChange={this.setData}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Status</FormLabel>
          <FormText
            id="status"
            defaultValue={model.status}
            // onChange={this.setData}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Price</FormLabel>
          <FormText
            id="price"
            defaultValue={model.price}
            // onChange={this.setData}
          />
        </FormGroup>
      </div>
    );
  }

  // setData(e) {
  //   let id = e.target.id;
  //   let value = e.target.value;
  //   this.model[id] = value;
  //   //this.setState({ [id]: value });
  // }
}
