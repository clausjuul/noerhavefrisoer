import React from "react";
import Navigation from './components/Navigation/Navigation';
import Routes from './routes';
import Topbar from './components/Topbar/Topbar';

const App = () => {
  return (
    <>
      <header>
        <Topbar />
        <Navigation />
      </header>
      <Routes />
    </>
  );
}
export default App;
