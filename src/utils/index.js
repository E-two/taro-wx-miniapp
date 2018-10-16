export const toQueryString = paramsObj =>
  Object
  .keys(paramsObj)
  .filter(key => paramsObj[key])
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObj[key])}`)
  .join('&');

export const sleep = time => new Promise(resolve => setTimeout(resolve, time));
