export default class StorageService {
  constructor() {
    this.userInfo = null;
  }

  setUserInfo(userInfo) {
    const userInfoJSON = JSON.stringify(userInfo);
    this.userInfo = userInfoJSON;
    localStorage.setItem('USER_INFO', userInfoJSON);
  }

  removeUserInfo() {
    this.userInfo = null;
    localStorage.removeItem('USER_INFO');
  }

  getUserInfo() {
    if (this.userInfo == null) {
      this.userInfo = JSON.parse(localStorage.getItem('USER_INFO'));
    }
    return this.userInfo;
  }

  getUserField(name) {
    const userInfo = this.getUserInfo();
    return this.userInfo ? this.userInfo[name] : null;
  }

  getUserToken() {
    return this.getUserField('authToken');
  }

  getUserName() {
    return this.getUserField('displayName');
  }

  getDesignation() {
    return this.getUserField('designation');
  }

  getImageUrl() {
    return this.getUserField('imageUrl');
  }
}
