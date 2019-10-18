import React, { useState, useEffect, useLayoutEffect } from "react";

// import { ContextProvider } from "./context";
import Navigation from './components/Navigation/Navigation';
import Routes from './routes';

// const useWindowSize = () => {
//   let [size, setSize] = useState(null);
//   useLayoutEffect(() => {
//     const updateSize = () => setSize(window.innerWidth);
    
//     window.addEventListener("resize", updateSize);
//     updateSize();
    
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);
//   return size;
// }

// TODO
// scroll to top after page change - no animation
// fix åben behandling glitch
// style iframe
// change isMobile, so true is true & so on
// slide page transition på phone, tablet?
// openGraph

const App = () => {
  // const breakpoint = 799;

  // const [isDesktop, setIsDesktop] = useState(null);
  // // const [isDesktop, setIsDesktop] = useState(() => 
  // //   window.innerWidth > breakpoint ? true : false
  // // );

  // let windowWidth = useWindowSize();

  // useEffect(() => {
  //   console.log("windowWidth", windowWidth);
  //   if (windowWidth !== null) {
  //     if (windowWidth < breakpoint) {
  //       // isDesktop && 
  //       setIsDesktop(false);
  //     } else {
  //       // !isDesktop && 
  //       setIsDesktop(true);
  //     }
  //   }
  //   // eslint-disable-next-line
  // }, [windowWidth]);

  return (
    <>
      {/* <ContextProvider value={isDesktop}> */}
        <Navigation />
        <Routes />
      {/* </ContextProvider> */}
    </>
  );
}
export default App;
