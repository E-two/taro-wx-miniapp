import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import api from '../middleware/api';
import error from '../middleware/error';
import loading from '../middleware/loading';

const middlewares = [
  thunkMiddleware,
  api,
  loading,
  error,
  createLogger()
];

export default function configStore () {
  const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
  return store;
}
