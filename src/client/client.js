import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import { store } from './createStore';

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{ renderRoutes(Routes) }</div>
    </BrowserRouter>
  </Provider>, document.querySelector('#root'),
);
