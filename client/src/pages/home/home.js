import React from "react";

import Footer from '../../components/Footer/Footer';
import HeroIn from '../../components/Hero/Hero';
// import HeroIn from '../../components/Hero/HeroIn';
import Image from './image.jpg';
import Image1 from './1.jpg';
import './home.scss';
// insta som slide sideværs galleri på mobil
// desktop exspand nedad, 3 pr row?


//TODO 
// en række ned med et billede ind imellem
// Lave et eller andet lignede på om salonen
// behandlinger chevron pill dims skal alignes
const Home = () => {
  return (
    <>
      <section className="home">
        <HeroIn height={"65vh"} />
        <h1 className="page-title">Velkommen til NØRHAVE</h1>
        <h3 className="page-sub-title">Beliggende på Gl. Hobrovej i Randers</h3>

        <div className="hr" />

        <section className="highlights">
        <article className="highlights__content">
          <h2 className="section-title">Hos mig får du</h2>
          <p>- Afslappet og hyggelig atmosfære</p>
          <p>- Professionel og personlig rådgivning</p>
          <p>- En behandling som passer til dig og dine ønsker</p>
          <p>- Nærvær, grundighed og bliver altid mødt med et smil</p>
        </article>
        </section>

        <section className="imageBox">
          <figure>
            <img
              className="test-img"
              // style={{ opacity: "0.8" }}
              src={Image}
              alt="test-test"
            />
          </figure>
          <figure>
            <img
              className="test-img"
              // style={{ opacity: "0.8" }}
              src={Image1}
              alt="test-test"
            />
          </figure>
          <figure>
            <img
              className="test-img"
              // style={{ opacity: "0.8" }}
              src={Image}
              alt="test-test"
            />
          </figure>
        </section>

        {/* <article className="highlights">
          <div className="testbox">
            <div className="tekst">
              <h2 className="section-title">Hos mig får du</h2>
              <p>- Afslappet og hyggelig atmosfære</p>
              <p>- Professionel og personlig rådgivning</p>
              <p>- En behandling som passer til dig og dine ønsker</p>
              <p>- Nærvær, grundighed og bliver altid mødt med et smil</p>
            </div>

            <img
              className="test-img"
              // style={{ margin: "0 0 1rem 3rem", width: "50%", opacity: "0.8" }}
              src={Image}
              alt="test-test"
            />
            <img
              className="test-img"
              style={{ margin: "0 0 1rem 3rem", width: "50%", opacity: "0.8" }}
              src={Image}
              alt="test-test"
            />
            <img
              className="test-img"
              // style={{ margin: "0 0 1rem 3rem", width: "50%", opacity: "0.8" }}
              src={Image}
              alt="test-test"
            />
          </div>
        </article> */}

        {/* <div className="hr" />

        <section className="instagram-feed">
          <h3>Seneste Instagram billeder</h3>
          <img className="test-img" src={Image} alt="test-test" />
          <img className="test-img" src={Image} alt="test-test" />
          <img className="test-img" src={Image} alt="test-test" />
          <img className="test-img" src={Image} alt="test-test" />
        </section> */}
        <Footer />
      </section>
    </>
  );
};
export default Home;
