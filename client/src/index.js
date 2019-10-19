import React, { Suspense, useState, useLayoutEffect, useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from 'serviceWorker';
import Loading from 'components/Loading/Loading';
import { ContextProvider } from "context";
import './index.scss';

const App = React.lazy(() => import('App'));

const useWindowSize = () => {
  let [size, setSize] = useState(null);
  useLayoutEffect(() => {
    const updateSize = () => setSize(window.innerWidth);

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const RenderApp = () => {
  const breakpoint = 799;

  const [isDesktop, setIsDesktop] = useState(null);
  // const [isDesktop, setIsDesktop] = useState(() =>
  //   window.innerWidth > breakpoint ? true : false
  // );

  let windowWidth = useWindowSize();

  useEffect(() => {
    // console.log("windowWidth", windowWidth);
    if (windowWidth !== null) {
      if (windowWidth < breakpoint) {
        // isDesktop &&
        setIsDesktop(false);
      } else {
        // !isDesktop &&
        setIsDesktop(true);
      }
    }
    // eslint-disable-next-line
  }, [windowWidth]);

  return (
    isDesktop !== null && (
      <BrowserRouter>
        <ContextProvider value={isDesktop}>
          <App />
        </ContextProvider>
      </BrowserRouter>
    )
  ); 
}

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <RenderApp />
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.register();
