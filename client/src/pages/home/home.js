import React from "react";

import Footer from '../../components/Footer/Footer';
import HeroIn from '../../components/Hero/HeroIn';
import Image from './image.jpg';
import './home.scss';
// insta som slide sideværs galleri på mobil
// desktop exspand nedad, 3 pr row?

const Home = () => {
  return (
    <>
      <section className="home">
        <HeroIn height={'65vh'} />
        <h1 className="page-title">Velkommen til NØRHAVE</h1>
        <h3 className="page-sub-title">Beliggende på Gl. Hobrovej i Randers</h3>
        <div className="hr" />
        <article className="highlights">
          <h3 className="highlights__title">Hos mig får du</h3>
          {/* <img className="test-img" src={Image} alt="test-test" /> */}
          {/* <ul className="highlights__content"> */}
          <p>- Afslappet og hyggelig atmosfære</p>
          <p>- Professionel og personlig rådgivning</p>
          <p>- En behandling som passer til dig og dine ønsker</p>
          <p>- Nærvær, grundighed og bliver altid mødt med et smil</p>
          {/* </ul> */}
        </article>

        <div className="hr" />

        <section className="instagram-feed">
          <h3>Seneste Instagram billeder</h3>
          <img className="test-img" src={Image} alt="test-test" />
          <img className="test-img" src={Image} alt="test-test" />
          <img className="test-img" src={Image} alt="test-test" />
          <img className="test-img" src={Image} alt="test-test" />
        </section>
      <Footer />
      </section>
    </>
  );
};
export default Home;
