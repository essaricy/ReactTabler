import React from "react";

import * as FetchApi from "../../utils/fetchapi.util";
import * as Urls from "../../constants/url.constant";

export default class LoginService extends React.Component {
  login(payload) {
    let loginUrl = Urls.API_URL.BASE + Urls.API_URL.LOGIN;
    return FetchApi.post(loginUrl, payload);
  }
}
