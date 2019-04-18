import React from 'react';
import { RouterContextProvider, Site } from 'tabler-react';
import { NavLink, withRouter } from 'react-router-dom';

import Alert from '../_components/modal/alert.component';

import MenuRoutes from '../_routes/menu.routes';
import * as AppConstants from '../_constants/app.constant';
import MenuService from '../_services/menu.service';
import AlertService from '../_services/alert.service';
import NotificationService from '../_services/notification.service';
import LocalStorageService from '../_services/localstorage.service';
import LoginService from '../_services/login.service';

export default class SiteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarItems: []
    };
    this.menuService = new MenuService();
    this.notificationService = new NotificationService();
    this.localStorageService = new LocalStorageService();
    this.loginService = new LoginService();

    this.state = {
      menuItems: [],
      notifications: [],
      accountDropdownProps: {}
    };
  }

  componentDidMount() {
    this.setState({
      menuItems: this.getMenuItems(),
      notifications: this.getNotification(),
      accountDropdownProps: this.getAccountDropdownProps()
    });
  }

  getAccountDropdownProps() {
    return {
      avatarURL: './demo/faces/female/25.jpg',
      name: this.localStorageService.getUserName(),
      description: this.localStorageService.getDesignation(),
      options: [
        { icon: 'user', value: 'Profile' },
        { icon: 'settings', value: 'Settings' },
        //{ icon: 'mail', value: 'Inbox', badge: '6' },
        //{ icon: 'send', value: 'Message' },
        { isDivider: true },
        { icon: 'help-circle', value: 'Need help?' },
        {
          icon: 'log-out',
          value: 'Sign out',
          // to: "./home",
          onClick: () => {
            this.props.onLogout();
          }
        }
      ]
    };
  }

  getMenuItems() {
    const menuItems = this.menuService.accessList(AppConstants.Role.ADMIN);
    menuItems.forEach(menuItem => {
      if (menuItem.subItems) {
        menuItem.subItems.forEach(submenuItem => {
          submenuItem.LinkComponent = withRouter(NavLink);
        });
      } else {
        menuItem.LinkComponent = withRouter(NavLink);
      }
    });
    return menuItems;
  }

  getNotification() {
    const notifications = this.notificationService.getAll();
    notifications.forEach(notification => {
      const userName = notification.userName;
      const message = notification.message.replace('{userName}', userName);
      notification.message = (
        <React.Fragment>
          {/* <strong>{userName}</strong> */}
          {message}
        </React.Fragment>
      );
    });
    return notifications;
  }

  markAllAsRead() {
    console.log('mark all as read');
  }

  render() {
    const notifications = this.state.notifications;

    return (
      <Site.Wrapper
        headerProps={{
          href: '/',
          alt: 'Tabler React',
          imageURL: '/images/brand/tabler.svg',
          notificationsTray: {
            notificationsObjects: this.state.notifications,
            markAllAsRead: this.markAllAsRead,
            unread: 0
          },
          accountDropdown: this.state.accountDropdownProps
        }}
        navProps={{ itemsObjects: this.state.menuItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          copyright: (
            <React.Fragment>
              Copyright © 2019
              <a href="."> Tabler-react</a>. Theme by
              <a
                href="https://codecalm.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                codecalm.net
              </a>{' '}
              All rights reserved.
            </React.Fragment>
          )
        }}
      >
        <MenuRoutes />
        <Alert ref={AlertService.initiate(React.createRef())} />
      </Site.Wrapper>
    );
  }
}
