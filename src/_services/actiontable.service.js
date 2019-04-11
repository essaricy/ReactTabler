import * as FetchApi from "../_utils/fetchapi.util";

export default class ActionTableService {
  constructor(url) {
    this.url = url;
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  getAll() {
    return FetchApi.getGeneric(this.url);
  }

  get(id) {
    return FetchApi.get(this.url + id);
  }
  add(request) {
    console.log("Sending request to add: " + JSON.stringify(request));
    return FetchApi.post(this.url, request);
  }
  update(id, request) {
    return FetchApi.post(this.url + id, request);
  }
  delete(id) {
    return FetchApi.del(this.url + id);
  }
}
