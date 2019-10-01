import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/home';
import About from './pages/about/about';
import Booking from './pages/booking/booking';
import Treatments from './pages/treatments/treatments';

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/behandlinger" component={Treatments} />
      <Route exact path="/booking" component={Booking} />
      <Route exact path="/om-mig" component={About} />
    </Switch>
  );
};
export default Routes;