import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, Transition } from "react-transition-group";

import Context from 'context';
import { enterPageTransition, exitPageTransition } from "animations";
import Home from 'pages/home/home';
import About from 'pages/about/about';
import Booking from 'pages/booking/booking';
import Treatments from 'pages/treatments/treatments';

// const About = React.lazy(() => import("pages/about/about"));
// const Booking = React.lazy(() => import("pages/booking/booking"));
// const Treatments = React.lazy(() => import("pages/treatments/treatments"));


const Routes = () => {
  const isDesktop = useContext(Context);
  
  return (
    <Route
      render={({ location }) => {
        return (
          <TransitionGroup
            component={"main"}
            className={!isDesktop ? "main" : undefined}
          >
            <Transition
              key={location.key}
              appear={true}
              onEnter={(node, appears) => enterPageTransition(node, appears)}
              onExit={node => exitPageTransition(node)}
              timeout={{ enter: 650, exit: 250 }}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/behandlinger" component={Treatments} />
                <Route exact path="/booking" component={Booking} />
                <Route exact path="/om-salonen" component={About} />
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