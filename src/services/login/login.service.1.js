import React from "react";
import * as Urls from "../../constants/url.constant";
import * as Constants from "../../constants/result.constant";

export default class LoginService extends React.Component {
  login(payload) {
    let loginUrl = Urls.API_URL.BASE + Urls.API_URL.LOGIN + payload.loginId;
    console.log(payload);
    return fetch(loginUrl, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(function(response) {
      let returnValue = { code: Constants.Result.FAILURE, message: null };
      if (response.status === 429) {
        returnValue.message =
          "You have reached your rate limit for the month. Please upgrade: https://mockit.io/manage/upgrade";
      } else if (response.status !== 200) {
        //throw new Error(response.status);
        return {
          code: Constants.Result.FAILURE,
          error: response.status
        };
      } else {
        returnValue.code = Constants.Result.SUCCESS;
        returnValue.message = "Login Successful";
      }
      return returnValue;
    });
  }
}
