import React from 'react';
import PageContainer from '../_containers/page.container';

export default class ProfileScene extends React.Component {
  render() {
    return (
      <PageContainer title="Home">
        <div className="row">
          <div className="col-12">This is profile page</div>
        </div>
      </PageContainer>
    );
  }
}
