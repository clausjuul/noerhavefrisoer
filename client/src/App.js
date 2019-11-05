import React, { Suspense, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Loading from 'components/Loading/Loading';
import Navigation from 'components/Navigation/Navigation';
import Routes from 'routes';

// TODO
// margin i bunden på android chrome?
// install "analytics": "0.2.2",
// install "@analytics/google-analytics": "0.2.0",

export function useWhyDidYouUpdate(name, props) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef();

  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      // Use this object to keep track of changed props
      const changesObj = {};
      // Iterate through keys
      allKeys.forEach(key => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      });

      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log("[why-did-you-update]", name, changesObj);
      }
    }

    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
}

const App = React.memo(props => {
  const { isDesktop } = props;
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
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </>
  );
})

export default App;
