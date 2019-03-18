import React from "react";

export default class DataTable extends React.Component {
  render() {
    console.log("Rendering table with headers: " + this.props.headerNames);
    let title = this.props.title;
    let headerNames = this.props.headerNames;
    let tableHeaderElements = [];

    for (let headerName of headerNames) {
      tableHeaderElements.push(<th>{headerName}</th>);
    }
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">{title}</h3>
            </div>
            <div className="table-responsive">
              <table className="table card-table table-vcenter text-nowrap">
                <thead>
                  <tr>{tableHeaderElements}</tr>
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
                    <td>
                      <a className="icon" href="/dashboard">
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
                    <td>
                      <a className="icon" href="/dashboard">
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
                    <td>
                      <a className="icon" href="/dashboard">
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
                    <td>
                      <a className="icon" href="/dashboard">
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
                    <td>
                      <a className="icon" href="/dashboard">
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
                    <td>
                      <a className="icon" href="/dashboard">
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
