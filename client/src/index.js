import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import Loading from './components/Loading/Loading';
import './index.scss';

const App = React.lazy(() => import('./App'));

// TODO
// react-helmet-async

// hvis det ikke virker, installere 'npm' & 'install'

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.register();
