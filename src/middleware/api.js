import Taro from '@tarojs/taro';
import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import { toQueryString } from '../utils';
import { API_URL } from '../constants/config';

let callsNum = 0;
const defaultHeaders = {
  'content-type': 'application/json',
};

// Fetches an API response.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = async ({
  endpoint,
  method,
  payload,
  options = {},
  formData,
  dataType
}, schema) => {
  const token = Taro.getStorageSync('token');
  const query = toQueryString(options);
  const url = `${API_URL}${endpoint}${query ? '?' : ''}${query}`;
  let config = {
    url,
    method: method || 'GET',
    data: formData || JSON.stringify(payload),
    dataType: dataType || "json"
  };
  if (formData) {
    config = {
      headers: { 
        'content-type': 'application/x-www-form-urlencoded',
        ...token ? {
          token
        } : {}
      },
      ...config,
    };
  } else {
    config = {
      headers: {
        ...defaultHeaders,
        ...token ? {
          token
        } : {},
      },
      ...config,
    };
  }

  let res = await Taro.request(config);
  const { data: json, statusCode } = res;
  const status = json.code || statusCode;
  const isError = status !== 200;
  if (isError) {
    return Promise.reject({
      ...json,
      status,
    });
  }

  let meta = {};
  let camelizedJson = {};

  const { page } = options;
  const { itemsPerPage: pageSize, totalItems: total, } = json;
  meta = {
    current: page,
    pageSize,
    total,
  };
  camelizedJson = camelizeKeys(json);
  Object.keys(meta).forEach(k => {
    if (meta[k] === undefined) {
      delete meta[k];
    }
  });
  return (schema) ? {
    key: Array.isArray(schema) ? schema[0]._key : schema._key,
    meta,
    data: {
      key: Array.isArray(schema) ? schema[0]._key : schema._key,
      ...normalize(camelizedJson, schema),
    },
    status,
  } : {
      key: '',
      meta,
      data: camelizedJson,
      status,
    };
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API';

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const {
    schema, type, suppressError, suppressLoading,
  } = callAPI;
  const types = [
    type,
    `${type}_SUCCESS`,
    `${type}_FAILURE`,
  ];

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;

  if (!suppressLoading) {
    callsNum += 1;
  }
  next(actionWith({ type: requestType, isLoading: callsNum > 0 }));

  return callApi(callAPI, schema).then(
    response => {
      if (!suppressLoading) {
        callsNum -= 1;
      }

      return next(actionWith({
        key: response.key,
        response: response.data,
        meta: response.meta,
        type: successType,
        status: response.status,
        isLoading: callsNum > 0,
      }));
    },
    error => {
      if (!suppressLoading) {
        callsNum -= 1;
      }

      return next(actionWith({
        suppressError,
        type: failureType,
        error: error.message || error.result || 'Bad happened',
        status: error.status,
        isLoading: callsNum > 0,
      }));
    },
  );
};
