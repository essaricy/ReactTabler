import React from 'react';

export default class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header py-4">
        <div className="container">
          <div className="d-flex">
            <a className="header-brand" href="./index.html">
              <img
                src="/images/brand/tabler.svg"
                className="header-brand-img"
                alt="tabler logo"
              />
            </a>
            <div className="d-flex order-lg-2 ml-auto">
              <div className="dropdown d-none d-md-flex">
                <a className="nav-link icon" data-toggle="dropdown" href="/">
                  <i className="fe fe-bell" />
                  <span className="nav-unread" />
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <div className="dropdown-divider" />
                  <a
                    href="/"
                    className="dropdown-item text-center text-muted-dark"
                  >
                    Mark all as read
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <a
                  href="/"
                  className="nav-link pr-0 leading-none"
                  data-toggle="dropdown"
                >
                  <span className="avatar" />
                  <span className="ml-2 d-none d-lg-block">
                    <span className="text-default">Jane Pearson</span>
                    <small className="text-muted d-block mt-1">
                      Administrator
                    </small>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a className="dropdown-item" href="/">
                    <i className="dropdown-icon fe fe-user" /> Profile
                  </a>
                  <a className="dropdown-item" href="/">
                    <i className="dropdown-icon fe fe-settings" /> Settings
                  </a>
                  <a className="dropdown-item" href="/">
                    <span className="float-right">
                      <span className="badge badge-primary">6</span>
                    </span>
                    <i className="dropdown-icon fe fe-mail" /> Inbox
                  </a>
                  <a className="dropdown-item" href="/">
                    <i className="dropdown-icon fe fe-send" /> Message
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="/">
                    <i className="dropdown-icon fe fe-help-circle" /> Need help?
                  </a>
                  <a className="dropdown-item" href="/">
                    <i className="dropdown-icon fe fe-log-out" /> Sign out
                  </a>
                </div>
              </div>
            </div>
            <a
              href="/"
              className="header-toggler d-lg-none ml-3 ml-lg-0"
              data-toggle="collapse"
              data-target="#headerMenuCollapse"
            >
              <span className="header-toggler-icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
