import * as Constants from "../constants/result.constant";

export function get(url) {
  console.log("Sending request (GET) to " + url);
  return fetch(url, {
    method: "get",
    headers: Constants.JsonHeaders
  }).then(function(apiResponse) {
    //return sendGenericResponse(apiResponse);
    return apiResponse.json();
  });
}

export function post(url, payload) {
  let payloadAsText = JSON.stringify(payload);
  console.log(
    "Sending request (POST) to " + url + " with payload=" + payloadAsText
  );
  return fetch(url, {
    method: "post",
    headers: Constants.JsonHeaders,
    body: payloadAsText
  }).then(function(apiResponse) {
    return sendGenericResponse(apiResponse);
  });
}

function sendGenericResponse(apiResponse) {
  // let response = {
  //   code: null,
  //   message: null
  // };
  // response.code =
  //   apiResponse.status === 200
  //     ? Constants.Result.SUCCESS
  //     : Constants.Result.FAILURE;
  // //response.message = Constants.ApiErrors[apiResponse.status];
  // response.content = apiResponse.status === 200 ? apiResponse.json() : null;
  //return response;
  return apiResponse.json();
}
