import { UPDATE_FILTER, CLEAR_DATAS } from '../constants/actionTypes';

export const filter = (
  state = {
    tests: {},
  },
  {
    type,
    key,
    payload,
  },
) => {
  switch (type) {
    case UPDATE_FILTER:
      return key === 'all' ?
        Object.keys(state).reduce((obj, k) => ({
          ...obj,
          [k]: {
            ...payload,
          },
        }), {})
        : {
          ...state,
          [key]: {
            ...payload,
          },
        };
    case CLEAR_DATAS:
      return {
        ...state,
        [key]: {},
      };
    default:
      return state;
  }
};

export const meta = (state = {
  tests: {},
}, action) => {
  const { type, meta: actionMeta, key } = action;
  if (type === CLEAR_DATAS) {
    return {
      ...state,
      [key]: {},
    };
  }
  if (actionMeta && Object.keys(actionMeta).length > 0 && key) {
    return {
      ...state,
      [key]: {
        ...actionMeta,
      },
    };
  }

  return state;
};

// Updates an entity cache in response to any action with response.entities.
export const entities = (state = {
  tests: {},
  testsIds: [],
}, action) => {
  const { type, key: actionKey } = action;
  if (type === CLEAR_DATAS) {
    return {
      ...state,
      [actionKey]: {},
      [`${actionKey}Ids`]: [],
    };
  }
  if (action.response && action.response.entities) {
    const { result, key } = action.response;
    let data = {
      ...action.response.entities[key],
    };
    let ids = [...state[`${key}Ids`]];

    if (Array.isArray(result)) {
      ids = [...result];
    }

    if (typeof result === 'string') {
      if (ids.indexOf(result) < 0) {
        // add new
        ids = [result, ...state[`${key}Ids`]];
      }

      data = {
        ...state[key],
        ...action.response.entities[key],
      };
    }
    ids.filter(idsTemp => idsTemp);

    return {
      ...state,
      [key]: data,
      [`${key}Ids`]: ids,
    };
  }

  return state;
};