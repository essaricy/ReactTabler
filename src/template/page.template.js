import React from "react";

import { Pages } from "../constants/page.constant";

import PageHeader from "./page-header.template";
import PageFooter from "./page-footer.template";
import PageMenu from "./page-menu.template";
import Dashboard from "../pages/dashboard/dashboard.page";
import Crud from "../pages/crud/crud.page";
import Table from "../components/table/table.component";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: {
        id: "Dashboard",
        title: "Dashboard",
        iconClass: "fe fe-home",
        url: "/dashboard"
      }
    };
    this.onMenuChange = this.onMenuChange.bind(this);
  }

  onMenuChange(e) {
    let id = e.target.getAttribute("data-id");
    let title = e.target.getAttribute("data-title");
    console.log("Requested for a new view: " + id);
    this.setState({
      currentView: { id: id, title: title }
    });
  }

  render() {
    let currentViewId = this.state.currentView.id;
    let currentViewTitle = this.state.currentView.title;

    let currentPage = null;
    if (currentViewId === Pages.Pages.Crud) {
      currentPage = <Crud />;
    } else if (currentViewId === Pages.Components.Table) {
      currentPage = <Table />;
    } else {
      currentPage = <Dashboard />;
    }

    return (
      <div>
        <div className="page-main">
          <PageHeader />
          <PageMenu onMenuChange={this.onMenuChange} />
          <div className="my-3 my-md-5">
            <div className="container">
              <div class="page-header">
                <h1 class="page-title">{currentViewTitle}</h1>
              </div>
              {currentPage}
            </div>
          </div>
          <PageFooter />
        </div>
      </div>
    );
  }
}
