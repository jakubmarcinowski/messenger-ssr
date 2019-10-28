import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';

export const middlewares = [thunk];

export const cStore = (req) => {

  const store = createStore(
    reducers,
    applyMiddleware(...middlewares),
  );
  return store;

};
