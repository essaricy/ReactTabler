import React from 'react';

import * as AppConstants from '../../constants/app.constant';
import ADMIN_ROLES from '../../data/role/ADMIN.json';

export default class MenuService extends React.Component {
  accessList(role) {
    if (role === AppConstants.Role.ADMIN) {
      return JSON.parse(JSON.stringify(ADMIN_ROLES));
    }
  }
}
