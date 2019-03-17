export const Result = {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

export const JsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export const ApiErrors = {
  '404': 'The page that you are requesting could not be found',
  '429':
    'You have reached your rate limit for the month. Please upgrade: https://mockit.io/manage/upgrade',
  '500': 'Technical Error. Something went really wrong.'
};
