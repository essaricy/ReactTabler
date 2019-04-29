import ADMIN_ROLES from "../_data/admin.role.json";

export default class MenuService {
  getMenuItems() {
    return JSON.parse(JSON.stringify(ADMIN_ROLES));
  }
}
