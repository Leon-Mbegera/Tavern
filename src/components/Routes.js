import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/">
        {' '}
        <Home />
      </Route>
      <Route />
      <Route />
    </Switch>
  </BrowserRouter>
);

export default Routes;
