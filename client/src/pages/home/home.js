import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

import { revealStaggerAnimation } from 'animations';
import Hero from 'components/Hero/Hero';
import Highlights from './highlights';
import Footer from 'components/Footer/Footer';
// import Image1 from "images/1.jpg";
// import Image2 from "images/2.jpg";
// import Image3 from "images/bannerSalon.jpg";
import './home.scss';
import Instafeed from "components/Instafeed/Instafeed";

const Home = (props) => {
  const { location: { pathname }, history } = props;

  useLayoutEffect(() => {pathname !== "/" && history.push("/")});

  const subTitleRef = useRef(null);
  const contentRef = useRef(null);

  const [titleTrigger, titleInView] = useInView({
    threshold: 1,
    triggerOnce: true
  });

  const [highlightsTrigger, highlightsInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  });

  useEffect(() => {
    if (titleInView) {
      revealStaggerAnimation([subTitleRef.current, contentRef.current], 1);
    }
  }, [titleInView]);

  return (
    <>
      <Helmet>
        <title>NØRHAVE frisør - Velkommen - Frisør salon i Randers</title>
        <meta
          name="description"
          content="NØRHAVE frisør - En hyggelig, kreativ og personlig frisør salon i Randers, som altid sætter stor fokus på den enkelte kunde."
        />
        <link rel="canonical" href="https://www.noerhavefrisoer.dk" />
      </Helmet>
      <section className="home">
        <Hero
          height={"18.5vh"}
          position={"80% 80%"}
          title={"Mangler du en tid?"}
          subTitle={"Ring og bestil en tid eller"}
          link={"Book online"}
          to={"/booking"}
        />
        <h1 ref={titleTrigger} className="page-title">
          Velkommen til NØRHAVE
        </h1>
        <h3 className="page-sub-title" ref={subTitleRef} style={{ opacity: 0 }}>
          frisør på Gl. Hobrovej i Randers
        </h3>
        <p className="page-content" ref={contentRef} style={{ opacity: 0 }}>
          En hyggelig, kreativ og personlig salon, som altid sætter stor fokus
          på den enkelte kunde, og der er altid en hyggelig atmosfære.
        </p>

        <div className="hr" />

        <section ref={highlightsTrigger} className="highlights">
          <Highlights inView={highlightsInView} />
        </section>
        <Instafeed />
        {/* <section className="instagram-feed">
          <figure>
            <img
              src={Image1}
              alt="NØRHAVE-frisør_instagram-kunde-billede-fra-NØRHAVE-frisør-salon-i-Randers"
            />
          </figure>
          <figure>
            <img
              src={Image2}
              alt="NØRHAVE-frisør_instagram-kunde-billede-fra-NØRHAVE-frisør-salon-i-Randers"
            />
          </figure>
          <figure>
            <img
              src={Image3}
              alt="NØRHAVE-frisør_instagram-kunde-billede-fra-NØRHAVE-frisør-salon-i-Randers"
            />
          </figure>
        </section> */}
        <Footer />
      </section>
    </>
  )
}
export default Home;
