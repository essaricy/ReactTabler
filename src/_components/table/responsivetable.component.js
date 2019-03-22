import React from "react";
import "./simpletable.component.css";

export default class ResponsiveTableComponent extends React.Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table card-table table-vcenter text-nowrap">
          <thead>
            <tr>{this.props.headers}</tr>
          </thead>
          <tbody>{this.props.data}</tbody>
        </table>
      </div>
    );
  }
}
