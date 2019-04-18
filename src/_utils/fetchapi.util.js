import * as ApiConstants from '../_constants/api.constant';

export function get(url) {
  console.log('Sending request (GET) to ' + url);
  return fetch(url, {
    method: 'get',
    headers: ApiConstants.JsonHeaders
  }).then(function(apiResponse) {
    return apiResponse.json();
  });
}

export function getGeneric(url) {
  console.log('Sending request (GET) to ' + url);
  return fetch(url, {
    method: 'get',
    headers: ApiConstants.JsonHeaders
  })
    .then(function(apiResponse) {
      return apiResponse.json();
    })
    .catch(error => {
      return sendFailureResponse(error);
    });
}

export function post(url, payload) {
  const payloadAsText = JSON.stringify(payload);
  console.log(
    'Sending request (POST) to ' + url + ' with payload=' + payloadAsText
  );
  return fetch(url, {
    method: 'post',
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

export function patch(url, payload) {
  const payloadAsText = JSON.stringify(payload);
  console.log(
    'Sending request (POST) to ' + url + ' with payload=' + payloadAsText
  );
  return fetch(url, {
    method: 'post',
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
  console.log('Sending request (DELETE) to ' + url);
  return fetch(url, {
    method: 'delete',
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
    errorMessage === 'Failed to fetch' ||
    errorMessage === 'NetworkError when attempting to fetch resource.' ||
    errorMessage === 'Network request failed'
  ) {
    message =
      'Unable to contact the server now. Please try again after sometime.';
  } else {
    message = 'Technical Error: ' + errorMessage;
  }
  return { code: ApiConstants.Result.FAILURE, message: message };
}
