import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Loading from './components/Loading/Loading';
import './index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();
