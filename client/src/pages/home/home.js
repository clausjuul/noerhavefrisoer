import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Highlights from './highlights';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Image1 from "../../images/1.jpg";
import Image2 from "../../images/2.jpg";
import Image3 from "../../images/vaeg.jpg";
import { revealStaggerAnimation } from '../../animations/revealStagger';
import './home.scss';

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
      revealStaggerAnimation([subTitleRef, contentRef], 1);
    }
  }, [titleInView]);

  // const [images, setImages] = useState(null);
  
  // useEffect(() => {
  //   fetchInstafeed(setImages);
  // }, []);

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
          ref={el => (subTitleRef = el)}
          className="page-sub-title"
        >
          frisør på Gl. Hobrovej i Randers
        </h3>
        <p
          style={{ opacity: 0 }}
          ref={el => (contentRef = el)}
          className="page-content"
        >
          En hyggelig, kreativ og personlig salon, som altid sætter stor fokus
          på den enkelte kunde, og der er altid en hyggelig atmosfære.
        </p>

        <div className="hr" />

        <section ref={highlightsRef} className="highlights">
          <Highlights inView={highlightsInView} />
        </section>

        <section className="instagram-feed">
          <figure>
            <img src={Image1} alt="NØRHAVE-frisør-Randers" />
          </figure>
          <figure>
            <img src={Image2} alt="NØRHAVE-frisør-Randers" />
          </figure>
          <figure>
            <img src={Image3} alt="NØRHAVE-frisør-Randers" />
          </figure>
        </section>

        <Footer />
      </section>
    </>
  );
};
export default Home;
