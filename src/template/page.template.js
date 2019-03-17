import React from 'react';

import PageHeader from './page-header.template';
import PageFooter from './page-footer.template';
import PageMenu from './page-menu.template';
import Dashboard from '../components/dashboard/dashboard.component';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <div className="page-main">
          <PageHeader />
          <PageMenu />
          <div className="my-3 my-md-5">
            <Dashboard />
          </div>
          <PageFooter />
        </div>
      </div>
    );
  }
}
