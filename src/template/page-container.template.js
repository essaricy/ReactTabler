import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PageMenu from "./page-menu.template";
import * as TableMock from "../data/mock/table.mock";
import * as PageDefault from "../data/page.default";

import Crud from "../pages/crud/crud.page";
import DataTable from "../components/table/datatable.component";

export default class PageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onMenuChange(e) {
    let id = e.target.getAttribute("data-id");
    let title = e.target.getAttribute("data-title");
    let url = e.target.getAttribute("data-url");
    console.log("Requested for a new view: " + id + " with URL: " + url);
    this.props.history.push(url);
  }

  render() {
    return (
      <HashRouter>
        <div>
          <PageMenu onMenuChange={this.onMenuChange} />
          <div className="my-3 my-md-5">
            <div className="container">
              <div className="page-header">
                <h1 className="page-title">Page Title</h1>
              </div>
              <Route
                path="/component/table"
                component={
                  <DataTable
                    title={TableMock.TITLE}
                    headerNames={TableMock.HEADER_NAMES}
                  />
                }
              />
              <Route path="/pages/crud" component={<Crud />} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}
