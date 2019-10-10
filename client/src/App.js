import React, { useState, useEffect, useLayoutEffect } from "react";

import { ContextProvider } from "./context";
import Navigation from './components/Navigation/Navigation';
import Routes from './routes';

const useWindowSize = () => {
  let [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => setSize(window.innerWidth);
    
    window.addEventListener("resize", updateSize);
    updateSize();
    
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

// TODO
// scroll to top after page change - no animation
// fix åben behandling glitch
// burger menu
// style iframe
// https / ssl
// change isMobile, so true is true & so on
// openGraph


const App = () => {
  const breakpoint = 799;

  const [isMobile, setIsMobile] = useState(() => 
    window.innerWidth > breakpoint ? true : false
  );

  let windowWidth = useWindowSize();

  useEffect(() => {
    if (windowWidth < breakpoint) {
      isMobile && setIsMobile(false);
    } else {
      !isMobile && setIsMobile(true);
    }
    // eslint-disable-next-line
  }, [windowWidth]);

  return (
    <ContextProvider value={isMobile}>
      <Navigation />
      <Routes />
    </ContextProvider>
  );
}
export default App;
