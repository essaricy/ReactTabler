import React from 'react';

import PageHeader from './page-header.template';
import PageFooter from './page-footer.template';
import PageMenu from './page-menu.template';
import Dashboard from '../pages/dashboard/dashboard.page';
import Crud from '../pages/crud/crud.page';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPageName: 'CRUD' };
    this.onMenuChange = this.onMenuChange.bind(this);
  }

  onMenuChange(e) {
    console.log('Requested for a new view: ' + e.target.name);
    this.setState({ currentPageName: e.target.name });
  }

  render() {
    let currentPage = null;
    if (this.state.currentPageName === 'Crud') {
      currentPage = <Crud />;
    } else {
      currentPage = <Dashboard />;
    }

    return (
      <div>
        <div className="page-main">
          <PageHeader />
          <PageMenu onMenuChange={this.onMenuChange} />
          <div className="my-3 my-md-5">{currentPage}</div>
          <PageFooter />
        </div>
      </div>
    );
  }
}
