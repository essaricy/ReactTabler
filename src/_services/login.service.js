import * as AxiosApi from "../_utils/axios.util";
import * as Urls from "../_constants/url.constant";
import * as ApiConstants from "../_constants/api.constant";

import StorageService from "./storage.service";

export default class LoginService {
  constructor() {
    this.authenticated = false;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.validate = this.validate.bind(this);

    this.storageService = new StorageService();
  }

  login(payload) {
    return AxiosApi.post(Urls.API_URL.LOGIN, payload).then(response => {
      // TODO check for the status code, then response
      this.authenticated = response.code === ApiConstants.Result.SUCCESS;
      if (this.authenticated) {
        this.storageService.setUserInfo(response.content);
      }
      return response;
    });
  }

  logout() {
    // TODO: Call API to invalidate session
    this.storageService.removeUserInfo();
    this.authenticated = false;
  }

  validate() {
    if (this.authenticated) {
      console.log("isUserAuthenticated: user has already been authenticated");
      return Promise.resolve(true);
    }
    // Check if local storage has user info
    const userToken = this.storageService.getUserToken();
    if (userToken == null) {
      console.log(
        "isUserAuthenticated: user info does not exist in local storage"
      );
      return Promise.resolve(false);
    }
    console.log("isUserAuthenticated: Validating user token");
    // Send the JWT Token to API to check if the session is still valid or not.
    return AxiosApi.get(Urls.API_URL.LOGIN + userToken)
      .then(response => {
        this.authenticated = response.code === ApiConstants.Result.SUCCESS;
        console.log("isUserAuthenticated: valid? " + this.authenticated);
        return this.authenticated;
      })
      .catch(error => console.log("error=> " + error));
  }
}
