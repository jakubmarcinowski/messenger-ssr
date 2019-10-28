import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// createStore(reducers, initicialState, middleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const middlewares = [reduxThunk];
export const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeEnhancers(applyMiddleware(...middlewares)),
);
