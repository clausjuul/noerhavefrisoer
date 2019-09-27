import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Treatments from './pages/treatments/treatments';

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/behandlinger" component={Treatments} />
      <Route exact path="/kontakt" component={Contact} />
    </Switch>
  );
};
export default Routes;