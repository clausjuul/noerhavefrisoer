import React, { useState, useEffect, useLayoutEffect } from "react";
import Navigation from './components/Navigation/Navigation';
import Routes from './routes';
// import Topbar from './components/Topbar/Topbar';

function useWindowSize() {
  let [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
      // setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const App = () => {

  const [isMobile, setIsMobile] = useState(() => (window.innerWidth > 799 ? true : false));
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // let [width, height] = useWindowSize();
  let windowWidth = useWindowSize();
  console.log("width: ", windowWidth);


  useEffect(() => {
    // setTimeout(() => {
    if (windowWidth < 799) {
      setIsMobile(false);
      // !isMobile && setIsMobile(true);
      console.log("NOOOOOOOOOT");
    } else {
      setIsMobile(true);
      // isMobile && setIsMobile(false);
      console.log("MOBILE");
    }

    // }, 200);
  }, [windowWidth]);
console.log("wiundow: ", window.onresize);
  return (
    <>
      {/* <header> */}
      <Navigation isMobile={isMobile} />
      {/* </header> */}
      <Routes isMobile={isMobile} />
    </>
  );
}
export default App;
