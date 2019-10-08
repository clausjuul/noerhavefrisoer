import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, Transition } from "react-transition-group";

import { play, exit } from "./timelines";
import Home from './pages/home/home';
import About from './pages/about/about';
import Booking from './pages/booking/booking';
import Treatments from './pages/treatments/treatments';
import Test from './test';

const Routes = () => {
  return (
    <Route
      render={({ location, history }) => {
        const { pathname, key } = location;

        return (
          <TransitionGroup component={"main"}>
            <Transition
              key={key}
              appear={true}
              onEnter={(node, appears) => play(pathname, node, appears)}
              onExit={node => exit(node)}
              timeout={{ enter: 750, exit: 650 }}
            >
              <Switch location={location}>
                {/* <Switch> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/behandlinger" component={Treatments} />
                <Route exact path="/booking" component={Booking} />
                <Route exact path="/om-mig" component={About} />
                <Route exact path="/test" component={Test} />
                <Route render={() => history.push("/")} />
              </Switch>
            </Transition>
          </TransitionGroup>
        );
      }}
    />
  );
};
export default Routes;