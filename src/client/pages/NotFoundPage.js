import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Not found anything</h1>;
};


export default {
  component: NotFoundPage,
};
