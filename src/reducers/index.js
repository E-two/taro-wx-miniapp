import { combineReducers } from 'redux';
import { filter, meta, entities } from './server';
import system from './system';

export default combineReducers({
  filter,
  meta,
  entities,
  system
});
