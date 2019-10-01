import React from 'react';
import Navigation from './components/Navigation/Navigation';
// import NavigationRS from './components/Navigation/NavigationRS';
import Routes from './routes';
import Hero from './components/Hero/Hero';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <header>
        <Topbar />
        <Navigation />
        <Hero />
        {/* <NavigationRS /> */}
      </header>
      <main className="container">
        <Routes />
      </main>
      <Footer />
    </>
  );
}
export default App;
