import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { MainContainer, HomePageContainer } from 'containers';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={HomePageContainer} />
      <Route path="*" component={HomePageContainer} />
    </Route>
  </Router>
);

export default routes;
