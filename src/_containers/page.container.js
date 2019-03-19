import React from 'react';

import HeaderContainer from './header.container';
import BodyContainer from './body.container';
import FooterContainer from './footer.container';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="page-main">
          <HeaderContainer {...this.props} />
          <BodyContainer {...this.props} />
          <FooterContainer {...this.props} />
        </div>
      </div>
    );
  }
}
