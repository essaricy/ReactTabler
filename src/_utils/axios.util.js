import axios from "axios";
import * as AxiosBase from "./axios.base";
import * as Urls from "../_constants/url.constant";
import * as ApiConstants from "../_constants/api.constant";

export function post(url, payload) {
  const payloadAsText = JSON.stringify(payload);
  console.log(
    "Sending request (POST) to " + url + " with payload=" + payloadAsText
  );
  return axios
    .post(Urls.API_URL.BASE + url, payload)
    .then(response => response.data)
    .catch(error => {
      const errorResponse = {
        code: ApiConstants.Result.FAILURE,
        message: null
      };
      if (!errorResponse.response) {
        this.errorStatus =
          "Unable to contact the server now. Please try again after some time";
      } else {
        this.errorStatus = error.response.data.message;
      }
    });
  // .catch(error => {
  //   console.error(error);
  //   return sendFailureResponse(error);
  // });
}

///////////////////////////////////////////////////////////////////////////
export function get(url) {
  console.log("Sending request (GET) to " + url);
  return fetch(url, {
    method: "get",
    headers: ApiConstants.JsonHeaders
  }).then(function(apiResponse) {
    return apiResponse.json();
  });
}

export function getGeneric(url) {
  console.log("Sending request (GET) to " + url);
  return fetch(url, {
    method: "get",
    headers: ApiConstants.JsonHeaders
  })
    .then(function(apiResponse) {
      return apiResponse.json();
    })
    .catch(error => {
      return sendFailureResponse(error);
    });
}

export function patch(url, payload) {
  const payloadAsText = JSON.stringify(payload);
  console.log(
    "Sending request (POST) to " + url + " with payload=" + payloadAsText
  );
  return fetch(url, {
    method: "post",
    headers: ApiConstants.JsonHeaders,
    body: payloadAsText
  })
    .then(function(apiResponse) {
      return apiResponse.json();
    })
    .catch(error => {
      console.error(error);
      return sendFailureResponse(error);
    });
}

export function del(url) {
  console.log("Sending request (DELETE) to " + url);
  return fetch(url, {
    method: "delete",
    headers: ApiConstants.JsonHeaders
  })
    .then(function(apiResponse) {
      return apiResponse.json();
    })
    .catch(error => {
      console.error(error);
      return sendFailureResponse(error);
    });
}

function sendFailureResponse(error) {
  const errorMessage = error.message;
  let message;
  if (
    errorMessage === "Failed to fetch" ||
    errorMessage === "NetworkError when attempting to fetch resource." ||
    errorMessage === "Network request failed"
  ) {
    message =
      "Unable to contact the server now. Please try again after sometime.";
  } else {
    message = "Technical Error: " + errorMessage;
  }
  return { code: ApiConstants.Result.FAILURE, message: message };
}
