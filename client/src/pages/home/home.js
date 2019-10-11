import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TweenMax } from "gsap";
// import axios from "axios";
import { fetchInstafeed } from './fetchInstafeed';

import Highlights from './highlights';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
// import Image1 from "../../images/1.jpg";
// import Image2 from "../../images/2.jpg";
// import Maria from '../../images/maria.jpg';
import './home.scss';
// TODO 
// insta som slide sideværs galleri på mobil?
// desktop exspand nedad, 3 pr row?

const Home = (props) => {
  const { location: { pathname }, history } = props;

  useEffect(() => {
    if (pathname !== "/") history.push("/");
    // eslint-disable-next-line
  }, [])

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

  const [images, setImages] = useState(null);
  
  useEffect(() => {
    fetchInstafeed(setImages);
  }, []);

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
          frisør på Gl. Hobrovej i Randers
        </h3>
        <p
          style={{ opacity: 0 }}
          ref={element => (contentRef = element)}
          className="page-content"
        >
          En hyggelig, kreativ og personlig salon, som altid sætter stor fokus
          på den enkelte kunde, og der er altid en hyggelig atmosfære.
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
          {images &&
            images.map(image => (
              <figure key={image.id}>
                <img src={image.thumbnail} alt="NØRHAVE-frisør-Randers" />
                {/* <figcaption>{image.caption}</figcaption> */}
              </figure>
            ))}
        </section>
        <Footer />
      </section>
    </>
  );
};
export default Home;
