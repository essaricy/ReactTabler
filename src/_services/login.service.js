import * as FetchApi from '../_utils/fetchapi.util';
import * as Urls from '../_constants/url.constant';
import * as ApiConstants from '../_constants/api.constant';

import LocalStorageService from './localstorage.service';

export default class LoginService {
  constructor() {
    this.authenticated = false;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.validate = this.validate.bind(this);

    this.localStorageService = new LocalStorageService();
  }

  login(payload) {
    const loginUrl = Urls.API_URL.BASE + Urls.API_URL.LOGIN;
    return FetchApi.post(loginUrl, payload).then(response => {
      this.authenticated = response.code === ApiConstants.Result.SUCCESS;
      if (this.authenticated) {
        this.localStorageService.setUserInfo(response.content);
      }
      return new Promise(function(resolve, reject) {
        resolve(response);
      });
    });
  }

  logout() {
    // TODO: Call API to invalidate session
    this.localStorageService.removeUserInfo();
    this.authenticated = false;
  }

  validate() {
    if (this.authenticated) {
      console.log('isUserAuthenticated: user has already been authenticated');
      return new Promise(function(resolve, reject) {
        resolve(true);
      });
    }
    // Check if local storage has user info
    const userToken = this.localStorageService.getUserToken();
    if (userToken == null) {
      console.log(
        'isUserAuthenticated: user info does not exist in local storage'
      );
      return new Promise(function(resolve, reject) {
        resolve(false);
      });
    }
    console.log('isUserAuthenticated: Validating user token');
    // Send the JWT Token to API to check if the session is still valid or not.
    const loginUrl = Urls.API_URL.BASE + Urls.API_URL.LOGIN + userToken;
    return FetchApi.get(loginUrl)
      .then(response => {
        this.authenticated = response.code === ApiConstants.Result.SUCCESS;
        console.log('isUserAuthenticated: valid? ' + this.authenticated);
        return this.authenticated;
      })
      .catch(error => console.log('error=> ' + error));
  }
}
