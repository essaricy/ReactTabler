import React from 'react';
import Header from './header.component';
import Menu from './menu.component';
import Footer from './footer.component';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <div className="page-main">
          <Header />
          <Menu />
          <div className="my-3 my-md-5" />
        </div>
        <Footer />
      </div>
    );
  }
}
