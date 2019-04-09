import NOTIFICATIONS from '../_data/notifications.json';

export default class NotificationService {
  getAll() {
    return JSON.parse(JSON.stringify(NOTIFICATIONS));
  }
}
