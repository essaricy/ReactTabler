import React from "react";

//import * as PageDefault from "../data/page.default";

import PageHeader from "./page-header.template";
import PageBody from "./page-body.template";
import PageFooter from "./page-footer.template";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //currentView: PageDefault.DEFAULT_VIEW
    };
    //this.onMenuChange = this.onMenuChange.bind(this);
  }

  // onMenuChange(e) {
  //   let id = e.target.getAttribute("data-id");
  //   let title = e.target.getAttribute("data-title");
  //   let url = e.target.getAttribute("data-url");
  //   console.log("Requested for a new view: " + id);
  //   this.setState({
  //     currentView: { id: id, title: title }
  //   });
  // }

  render() {
    // let currentView = this.state.currentView;
    // let currentViewId = currentView.id;
    // let currentViewTitle = currentView.title;

    // let currentPage = null;
    // console.log("currentViewId=" + currentViewId);
    // if (currentViewId === Pages.Pages.Crud) {
    //   currentPage = <Crud />;
    // } else if (currentViewId === Pages.Components.DataTable) {
    //   currentPage = (
    //     <DataTable
    //       title={TableMock.TITLE}
    //       headerNames={TableMock.HEADER_NAMES}
    //     />
    //   );
    // } else {
    //   currentPage = <Dashboard />;
    // }

    return (
      <div>
        <div className="page-main">
          <PageHeader {...this.props} />
          <PageBody {...this.props} />
          <PageFooter {...this.props} />
        </div>
      </div>
    );
  }
}
