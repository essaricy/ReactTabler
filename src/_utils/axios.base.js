import axios from "axios";
import * as Urls from "../_constants/url.constant";

export default axios.create({
  baseURL: Urls.API_URL.BASE
});
