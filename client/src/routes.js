import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, Transition } from "react-transition-group";

import { play, exit } from "./timelines";
import Home from './pages/home/home';
import About from './pages/about/about';
import Booking from './pages/booking/booking';
import Treatments from './pages/treatments/treatments';
import Test from './test';

const Routes = (props) => {
    const { isMobile } = props;

  return (
    <Route
      render={({ location }) => {
        return (
          <TransitionGroup
            component={"main"}
            className={!isMobile ? "main" : undefined}
          >
            <Transition
              key={location.key}
              appear={true}
              onEnter={(node, appears) => play(node, appears)}
              onExit={node => exit(node)}
              timeout={{ enter: 650, exit: 250 }}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/behandlinger"
                  component={Treatments}
                  {...props}
                  isMobile={isMobile}
                />
                <Route exact path="/booking" component={Booking} />
                <Route exact path="/om-salonen" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={Home} />
              </Switch>
            </Transition>
          </TransitionGroup>
        );
      }}
    />
  );
};
export default Routes;