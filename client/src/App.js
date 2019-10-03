import React
// , { useEffect, useState } 
from "react";
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
// import NavigationRS from './components/Navigation/NavigationRS';
import Routes from './routes';
import Hero from './components/Hero/Hero';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';

const App = (props) => {

  // const [showFooter, setShowFooter] = useState(false);

  // useEffect(() => {
  //   setShowFooter(true);
  // }, []);

  // useEffect(() => {
  //   setShowFooter(false);
  //   // timeline.reverse();
  //   setTimeout(() => {
  //     setShowFooter(true);
  //     // timeline.play();
  //   }, 900);
  // }, [props.location]);
  console.log('', props)
  return (
    // <Route
    //   render={props => (
        <>
          <header>
            <Topbar />
            <Navigation />
            {/* <Hero {...props} /> */}
            {/* <NavigationRS /> */}
          </header>
          {/* <main className="container"> */}
          <Routes {...props} />
          {/* </main> */}
          {/* <Footer show={showFooter} {...props} /> */}
          {/* <Footer {...props} /> */}
        </>
    //   )}
    // />
  );
}
export default App;
