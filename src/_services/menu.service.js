import * as AppConstants from '../_constants/app.constant';
import ADMIN_ROLES from '../_data/admin.role.json';

export default class MenuService {
  accessList(role) {
    if (role === AppConstants.Role.ADMIN) {
      return JSON.parse(JSON.stringify(ADMIN_ROLES));
    }
  }
}
