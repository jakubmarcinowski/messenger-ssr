import React from 'react';
import { renderRoutes } from 'react-router-config';
// import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
  return (
    <div>
		{ renderRoutes(route.routes) }
	</div>
  );
};
// loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
// loadData have store,dispatch
export default {
  component: App,

};
