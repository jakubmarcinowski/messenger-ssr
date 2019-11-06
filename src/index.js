import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import render from './helpers/render';
import { cStore } from './helpers/createStore';

var compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static('public'));

app.get('*', (req, res) => {

  const store = cStore(req);

  // Routes
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    .map((promise) => {
      if (promise) {
        return new Promise((resolve) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  // Render
  Promise.all(promises).then(() => {
    const context = {};
    const content = render(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Port 3000');
});
