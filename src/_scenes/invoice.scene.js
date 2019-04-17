import React from 'react';

import ActionTableContainer from '../_containers/actiontable.container';
import FormInput from '../_components/form/input.component';

import * as Urls from '../_constants/url.constant';
import * as Events from '../_utils/event.util';
import * as Models from '../_utils/models';

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
        name: 'Id',
        field: 'id',
        hide: true
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
        field: 'vat',
        render: data => <span className="text-muted">{data.vat}</span>
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
    ];
  }

  getActions() {
    return {
      add: {
        modalTitle: 'Add New Invoice',
        getEmpty: this.getEmpty,
        content: this.getModalScene
      },
      update: {
        modalTitle: 'Update Invoice',
        content: this.getModalScene
      },
      delete: {
        message: 'Do you really want to delete this invoice?'
      }
    };
  }

  getEmpty() {
    return Models.getInvoice();
  }

  getModalScene(data) {
    return (
      <div>
        <input type="hidden" id="id" defaultValue={data.id} />
        <FormInput
          id="subject"
          label="Subject"
          defaultValue={data.subject}
          onChange={e => Events.setDataById(e, data)}
          autoFocus
          required
        />
        <FormInput
          id="client"
          label="Client"
          defaultValue={data.client}
          onChange={e => Events.setDataById(e, data)}
        />
        <FormInput
          id="vat"
          label="VAT#"
          defaultValue={data.vat}
          onChange={e => Events.setDataById(e, data)}
        />
        <FormInput
          id="created"
          label="Created"
          defaultValue={data.created}
          onChange={e => Events.setDataById(e, data)}
        />
        <FormInput
          id="status"
          label="Status"
          defaultValue={data.status}
          onChange={e => Events.setDataById(e, data)}
        />
        <FormInput
          id="price"
          label="Price"
          defaultValue={data.price}
          onChange={e => Events.setDataById(e, data)}
        />
      </div>
    );
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
}
