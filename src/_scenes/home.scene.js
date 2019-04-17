import React from 'react';
import PageContainer from '../_containers/page.container';

export default class HomeScene extends React.Component {
  render() {
    return (
      <PageContainer title="Home">
        <div className="row">
          <div className="col-12">This is Home page</div>
        </div>
      </PageContainer>
    );
  }
}
