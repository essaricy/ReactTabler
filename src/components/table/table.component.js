import React from "react";

export default class Table extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Invoices</h3>
            </div>
            <div className="table-responsive">
              <table className="table card-table table-vcenter text-nowrap">
                <thead>
                  <tr>
                    <th className="w-1">No.</th>
                    <th>Invoice Subject</th>
                    <th>Client</th>
                    <th>VAT No.</th>
                    <th>Created</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="text-muted">001401</span>
                    </td>
                    <td>
                      <a href="invoice.html" className="text-inherit">
                        Design Works
                      </a>
                    </td>
                    <td>Carlson Limited</td>
                    <td>87956621</td>
                    <td>15 Dec 2017</td>
                    <td>
                      <span className="status-icon bg-success" /> Paid
                    </td>
                    <td>$887</td>
                    <td className="text-right">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-secondary btn-sm"
                      >
                        Manage
                      </a>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Actions
                        </button>
                      </div>
                    </td>
                    <td>
                      <a className="icon" href="javascript:void(0)">
                        <i className="fe fe-edit" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text-muted">001402</span>
                    </td>
                    <td>
                      <a href="invoice.html" className="text-inherit">
                        UX Wireframes
                      </a>
                    </td>
                    <td>Adobe</td>
                    <td>87956421</td>
                    <td>12 Apr 2017</td>
                    <td>
                      <span className="status-icon bg-warning" /> Pending
                    </td>
                    <td>$1200</td>
                    <td className="text-right">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-secondary btn-sm"
                      >
                        Manage
                      </a>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Actions
                        </button>
                      </div>
                    </td>
                    <td>
                      <a className="icon" href="javascript:void(0)">
                        <i className="fe fe-edit" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text-muted">001403</span>
                    </td>
                    <td>
                      <a href="invoice.html" className="text-inherit">
                        New Dashboard
                      </a>
                    </td>
                    <td>Bluewolf</td>
                    <td>87952621</td>
                    <td>23 Oct 2017</td>
                    <td>
                      <span className="status-icon bg-warning" /> Pending
                    </td>
                    <td>$534</td>
                    <td className="text-right">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-secondary btn-sm"
                      >
                        Manage
                      </a>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Actions
                        </button>
                      </div>
                    </td>
                    <td>
                      <a className="icon" href="javascript:void(0)">
                        <i className="fe fe-edit" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text-muted">001404</span>
                    </td>
                    <td>
                      <a href="invoice.html" className="text-inherit">
                        Landing Page
                      </a>
                    </td>
                    <td>Salesforce</td>
                    <td>87953421</td>
                    <td>2 Sep 2017</td>
                    <td>
                      <span className="status-icon bg-secondary" /> Due in 2
                      Weeks
                    </td>
                    <td>$1500</td>
                    <td className="text-right">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-secondary btn-sm"
                      >
                        Manage
                      </a>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Actions
                        </button>
                      </div>
                    </td>
                    <td>
                      <a className="icon" href="javascript:void(0)">
                        <i className="fe fe-edit" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text-muted">001405</span>
                    </td>
                    <td>
                      <a href="invoice.html" className="text-inherit">
                        Marketing Templates
                      </a>
                    </td>
                    <td>Printic</td>
                    <td>87956621</td>
                    <td>29 Jan 2018</td>
                    <td>
                      <span className="status-icon bg-danger" /> Paid Today
                    </td>
                    <td>$648</td>
                    <td className="text-right">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-secondary btn-sm"
                      >
                        Manage
                      </a>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Actions
                        </button>
                      </div>
                    </td>
                    <td>
                      <a className="icon" href="javascript:void(0)">
                        <i className="fe fe-edit" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text-muted">001406</span>
                    </td>
                    <td>
                      <a href="invoice.html" className="text-inherit">
                        Sales Presentation
                      </a>
                    </td>
                    <td>Tabdaq</td>
                    <td>87956621</td>
                    <td>4 Feb 2018</td>
                    <td>
                      <span className="status-icon bg-secondary" /> Due in 3
                      Weeks
                    </td>
                    <td>$300</td>
                    <td className="text-right">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-secondary btn-sm"
                      >
                        Manage
                      </a>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Actions
                        </button>
                      </div>
                    </td>
                    <td>
                      <a className="icon" href="javascript:void(0)">
                        <i className="fe fe-edit" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
