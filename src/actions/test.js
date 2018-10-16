import { CALL_API } from '../middleware/api';
import { Schemas } from '../constants/entities';
import { GET_TEST, MODIFY_TEST } from '../constants/actionTypes';

export const getTest = options => ({
  [CALL_API]: {
    type: GET_TEST,
    endpoint: '/test/info',
    method: 'GET',
    options,
  },
});

export const modifyTest = payload => ({
  [CALL_API]: {
    type: MODIFY_TEST,
    schema: Schemas.TESTS,
    endpoint: '/test/info',
    method: 'POST',
    payload,
  },
});
