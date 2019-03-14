import React from "react";

import * as FetchApi from "../../utils/fetchapi.util";
import * as Urls from "../../constants/url.constant";

export default class MenuService extends React.Component {
  accessList() {
    return FetchApi.get(Urls.API_URL.BASE + Urls.API_URL.MENU + "ADMIN");
  }
}
