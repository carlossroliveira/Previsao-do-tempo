// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Layout } from '../components/Layout';
// -------------------------------------------------
// Styles
// -------------------------------------------------

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Layout} />
      </Switch>
    </BrowserRouter>
  );
};
