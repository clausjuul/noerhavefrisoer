import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navigation from 'components/Navigation/Navigation';
import Routes from 'routes';

// TODO
// margin i bunden på android chrome?

const App = ({ isDesktop }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isDesktop) window.scrollTo(0, 0);
    else setTimeout(() => {
      document.documentElement.scrollTop = 0;
    }, 250);
  }, [pathname, isDesktop]);

  return (
    <>
      <Navigation />
      <Routes />
    </>
  );
}

export default App;
