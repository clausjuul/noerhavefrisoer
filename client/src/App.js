import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Routes from './routes';

const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Routes />
    </>
  );
}
export default App;
