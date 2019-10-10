import React, { useState, useEffect, useLayoutEffect } from "react";
import Navigation from './components/Navigation/Navigation';
import Routes from './routes';

import { ContextProvider } from "./context";
// import Topbar from './components/Topbar/Topbar';

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

const App = () => {

  const [isMobile, setIsMobile] = useState(() => (window.innerWidth > 799 ? true : false));
  let windowWidth = useWindowSize();

  useEffect(() => {
    if (windowWidth < 799) {
      // setIsMobile(false);
      isMobile && setIsMobile(false);
      console.log("NOOOOOOOOOT");
    } else {
      // setIsMobile(true);
      !isMobile && setIsMobile(true);
      console.log("MOBILE");
    }
  }, [windowWidth]);
  return (
    <>
      <ContextProvider value={isMobile}>
        <Navigation isMobile={isMobile} />
        <Routes isMobile={isMobile} />
      </ContextProvider>
    </>
  );
}
export default App;
