import React from "react";

import Navigation from 'components/Navigation/Navigation';
import Routes from 'routes';

// TODO
// react som wordpress theme/child theme!!
// ikke markere treatment title
// fjern on tap markering på burger icon
// scroll to top after page change - no animation
// margin i bunden?
// react-helmet-async

const App = () => (
  <>
    <Navigation />
    <Routes />
  </>
);

export default App;
