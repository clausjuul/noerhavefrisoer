import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TweenMax } from "gsap";
// import CSSRulePlugin from "gsap/CSSRulePlugin";

import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
// import HeroIn from '../../components/Hero/HeroIn';
import Image from '../../images/image.jpg';
import Image1 from '../../images/insta1.jpg';
import './home.scss';
// insta som slide sideværs galleri på mobil
// desktop exspand nedad, 3 pr row?

const Highlights = (props) => {
  const { inView } = props;

  // let titleRef = useRef(null)
  let p1Ref = useRef(null)
  let p2Ref = useRef(null)
  let p3Ref = useRef(null)
  let p4Ref = useRef(null)

  useEffect(() => {
    if(inView) {
      TweenMax.staggerFromTo(
        [p1Ref, p2Ref, p3Ref, p4Ref],
        0.8,
        {
          opacity: 0,
          y: 7,
          // cycle: {
          //   y: [-10, 7, 7, 7, 7]
          // },
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.3,
          clearProps: "transform, opacity"
        },
        0.15
      );
    }
  }, [inView])

  return (
    <article className="highlights__content">
      <h2
        // ref={element => (titleRef = element)}
        className={inView ? "section-title under" : "section-title"}
      >
        Hos mig får du
      </h2>
      {/* <SectionTitle title={"Hos mig får du"} inView={inView} /> */}
      <p style={{ opacity: 0 }} ref={element => (p1Ref = element)}>
        - Afslappet og hyggelig atmosfære
      </p>
      <p style={{ opacity: 0 }} ref={element => (p2Ref = element)}>
        - Professionel og personlig rådgivning
      </p>
      <p style={{ opacity: 0 }} ref={element => (p3Ref = element)}>
        - En behandling som passer til dig og dine ønsker
      </p>
      <p style={{ opacity: 0 }} ref={element => (p4Ref = element)}>
        - Nærvær, grundighed og bliver altid mødt med et smil
      </p>
    </article>
  );
}

//TODO 
// en række ned med et billede ind imellem
// Lave et eller andet lignede på om salonen

const Home = () => {

  const [highlightsRef, highlightsInView] = useInView({
    // threshold: 0.8,
    rootMargin: "-100px 0px",
    triggerOnce: true
  });

  const [imageBoxRef, imageBoxInView] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  });

  // let imgBoxRef = useRef(null);

  useEffect(() => {
    if (imageBoxInView) {
      TweenMax.fromTo(
        "#instabox",
        0.8,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.3,
          clearProps: "transform, opacity"
        }
      );
    }
  }, [imageBoxInView]);

  

  return (
    <>
      <section className="home">
        <Hero 
          height={"70vh"} 
          position={"80% 80%"}
          title={"Mangler du en tid?"}
          subTitle={"Ring og bestil en tid eller"}
          link={"Book online"}
          to={"/booking"}
        />
        <h1 className="page-title">Velkommen til NØRHAVE</h1>
        <h3 className="page-sub-title">Beliggende på Gl. Hobrovej i Randers</h3>

        <div className="hr" />

        <section ref={highlightsRef} className="highlights">
          <Highlights inView={highlightsInView} />
        </section>

        <section
          id="instabox"
          ref={imageBoxRef}
          className="imageBox"
          style={{ opacity: 0 }}
        >
          <figure>
            <img className="test-img" src={Image} alt="test-test" />
          </figure>
          <figure>
            <img className="test-img" src={Image1} alt="test-test" />
          </figure>
          <figure>
            <img className="test-img" src={Image} alt="test-test" />
          </figure>
        </section>
        <Footer />
      </section>
    </>
  );
};
export default Home;
