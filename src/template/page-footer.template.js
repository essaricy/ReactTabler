import React from 'react';

export default class PageFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
              Copyright © 2018 <a href=".">Tabler</a>. Theme by{' '}
              <a
                href="https://codecalm.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                codecalm.net
              </a>{' '}
              All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
