import React, { Suspense, useState, useLayoutEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

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

  const fontSize = window.getComputedStyle(document.body, null).getPropertyValue("font-size")
  const breakpoint = 768 + parseFloat(fontSize) * 2;
  const windowWidth = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(null);

  useLayoutEffect(() => {
    if (windowWidth < breakpoint) {
      isDesktop && setIsDesktop(false);
    } else {
      !isDesktop && setIsDesktop(true);
    }
  }, [windowWidth, isDesktop, breakpoint]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ContextProvider value={isDesktop}>
          <App isDesktop={isDesktop} />
        </ContextProvider>
      </BrowserRouter>
    </HelmetProvider>
  ); 
}

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <RenderApp />
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.register();
