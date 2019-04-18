export default class LocalStorageService {
  setUserInfo(userInfo) {
    localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
  }

  removeUserInfo() {
    localStorage.removeItem('USER_INFO');
  }

  getUserInfo() {
    const userInfo = localStorage.getItem('USER_INFO');
    return userInfo ? JSON.parse(userInfo) : null;
  }

  getUserToken() {
    const userInfo = this.getUserInfo();
    return userInfo ? userInfo.authToken : null;
  }

  getUserName() {
    const userInfo = this.getUserInfo();
    return userInfo ? userInfo.displayName : null;
  }

  getDesignation() {
    const userInfo = this.getUserInfo();
    return userInfo ? userInfo.designation : null;
  }
}
