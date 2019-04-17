import * as FetchApi from "../_utils/fetchapi.util";
import * as Urls from "../_constants/url.constant";
import * as ApiConstants from "../_constants/api.constant";

export default class LoginService {
  constructor() {
    this.authenticated = false;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isUserAuthenticated = this.isUserAuthenticated.bind(this);
  }

  login(payload) {
    const loginUrl = Urls.API_URL.BASE + Urls.API_URL.LOGIN;
    const response = FetchApi.post(loginUrl, payload);
    console.log(response);
    this.authenticated = response.code === ApiConstants.Result.SUCCESS;
    return response;
  }

  logout() {
    // TODO: Call API to invalidate session
    this.authenticated = false;
  }

  isUserAuthenticated() {
    // TODO: Send the session id to API to check if the session is still valid or not.
    // and update prop accordingly
    // console.log("Is User Authenticated? " + this.authenticated);
    // const loginUrl = Urls.API_URL.BASE + Urls.API_URL.LOGIN;
    // const response = FetchApi.patch(loginUrl, "Some Token");
    // this.authenticated = response.code === ApiConstants.Result.SUCCESS;
    // return this.authenticated;
    return true;
    //return false;
  }
}
