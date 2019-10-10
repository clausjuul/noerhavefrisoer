import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TweenMax } from "gsap";
// import CSSRulePlugin from "gsap/CSSRulePlugin";

import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Image1 from '../../images/vaeg.jpeg';
import Image2 from '../../images/image2.jpg';
import Maria from '../../images/maria.jpg';
import './home.scss';
// insta som slide sideværs galleri på mobil
// desktop exspand nedad, 3 pr row?

const Highlights = (props) => {
  const { inView } = props;

  let p1Ref = useRef(null)
  let p2Ref = useRef(null)
  let p3Ref = useRef(null)
  let p4Ref = useRef(null)

  useEffect(() => {
    if(inView) {
      TweenMax.staggerFromTo(
        [p1Ref, p2Ref, p3Ref, p4Ref],
        0.8,
        { opacity: 0,
          y: 7
        },
        { opacity: 1,
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
      <h2 className={inView ? "section-title under" : "section-title"}>
        Hos mig får du
      </h2>
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
        - Nærvær, grundighed og gratis parkering lige ved døren
      </p>
    </article>
  );
}

//TODO 
// en række ned med et billede ind imellem
// Lave et eller andet lignede på om salonen

const Home = () => {

  let subTitleRef = useRef(null)
  let contentRef = useRef(null)

  const [titleRef, titleInView] = useInView({
    // threshold: 0.8,
    rootMargin: "100% 0px",
    triggerOnce: true
  });

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

  // useEffect(() => {
  //   if (imageBoxInView) {
  //     TweenMax.fromTo(
  //       "#instabox",
  //       0.8,
  //       {
  //         opacity: 0,
  //         y: 10,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         delay: 0.3,
  //         clearProps: "transform, opacity"
  //       }
  //     );
  //   }
  // }, [imageBoxInView]);

  useEffect(() => {
    if (titleInView) {
      TweenMax.staggerFromTo(
        [subTitleRef, contentRef],
        0.8,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          clearProps: "transform, opacity"
        }, 0.15
      );
    }
  }, [titleInView]);

  return (
    <>
      <section className="home">
        <Hero
          height={"60vh"}
          position={"80% 80%"}
          title={"Mangler du en tid?"}
          subTitle={"Ring og bestil en tid eller"}
          link={"Book online"}
          to={"/booking"}
        />
        <h1 ref={titleRef} className="page-title">
          Velkommen til NØRHAVE
        </h1>
        <h3
          style={{ opacity: 0 }}
          ref={element => (subTitleRef = element)}
          className="page-sub-title"
        >
          Beliggende på Gl. Hobrovej i Randers
        </h3>
        <p
          style={{ opacity: 0 }}
          ref={element => (contentRef = element)}
          className="page-content"
        >
          En hyggelig, kreativ og personlig salon, som altid sætter stor fokus
          den enkle kunde, og en hyggelig atmosfære.
        </p>

        <div className="hr" />

        <section ref={highlightsRef} className="highlights">
          <Highlights inView={highlightsInView} />
        </section>

        <section
          className="instagram-feed"
          // id="instabox"
          // ref={imageBoxRef}
          // style={{ opacity: 0 }}
        >
          <figure>
            <img
              src={Image1}
              alt="NØRHAVE-frisør-Randers"
            />
          </figure>
          <figure>
            <img
              src={Image2}
              alt="NØRHAVE-frisør-Randers"
            />
          </figure>
          <figure>
            <img
              src={Maria}
              alt="NØRHAVE-frisør-Randers"
            />
          </figure>
        </section>
        <Footer />
      </section>
    </>
  );
};
export default Home;
