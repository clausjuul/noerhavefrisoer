import React
// , { useRef, useEffect } 
from "react";
import { useInView } from "react-intersection-observer";
// import { TweenMax } from "gsap";

import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Maria from '../../images/maria.jpg';
import './about.scss';

const About = () => {

  // let profileTitleRef = useRef(null);
  // let imageRef = useRef(null);
  
  const [profileTitleRef, profileTitleInView] = useInView({
    // rootMargin: "-100px 0px",
    threshold: 1,
    triggerOnce: true
  });

  // const [imageBoxRef, imageBoxInView] = useInView({
  //   rootMargin: "-100px 0px",
  //   triggerOnce: true
  // });

  // useEffect(() => {
  //   if (profileBoxInView) {
  //     TweenMax.fromTo(
  //       profileRef,
  //       0.8,
  //       { opacity: 0, y: 10 },
  //       { opacity: 1, y: 0, delay: 0.3, clearProps: "transform, opacity" }
  //     );
  //   }
  // }, [profileBoxInView]);

  // useEffect(() => {
  //   if (imageBoxInView) {
  //     TweenMax.fromTo(
  //       "#profile-image",
  //       0.8,
  //       { opacity: 0, y: 10 },
  //       { opacity: 1, y: 0, delay: 0.4, clearProps: "transform, opacity" }
  //     );
  //   }
  // }, [imageBoxInView]);

  return (
    <section className="about">
      <Hero
        position={"100% 70%"}
        title={"Mangler du en tid?"}
        subTitle={"Ring og bestil en tid eller"}
        link={"Book online"}
        to={"/booking"}
      />
      <h1 className="page-title">Om salonen</h1>
      <p className="page-content">
        Betaling med kontant, kort og MobilePay.
        <br></br>
        Gratis parkering lige ved døren.
      </p>

      <div className="hr" />

      <section className="contact">
        <ul className="opening-hours">
          <li className="full">
            <h3 className="section-sub-title">Åbningstider</h3>
          </li>
          <li>Mandag</li>
          <li>lukket</li>
          <li>Tirsdag</li>
          <li>08:00 - 17:00</li>
          <li>Onsdag</li>
          <li>08:00 - 17:00</li>
          <li>Torsdag</li>
          <li>12:00 - 20:00</li>
          <li>Fredag</li>
          <li>08:00 - 17:00</li>
          <li>
            Lørdag
            <div className="small bold">Ulige uger</div>
          </li>
          <li>08:00 - 13:00</li>
          <li>
            Lørdag
            <div className="small bold">Lige uger</div>
          </li>
          <li>lukket</li>
          <li>Søndag</li>
          <li>lukket</li>
        </ul>

        <ul className="contacts">
          <li className="full">
            <h3 className="section-sub-title">Kontakt</h3>
          </li>
          <li className="bol">Maria Louise Nørhave</li>
          <li>Gl. Hobrovej 59</li>
          <li>8920 Randers NV</li>
          {/* <li>Cvr. 40697156</li> */}
          <li className="bol">+45 4265 5687</li>
          <li className="bol">Maria@noerhavefrisoer.dk</li>
        </ul>
      </section>

      <div className="hr" />

      <article className="profile">
        {/* <div> */}
          <h3
            ref={profileTitleRef}
            className={
              profileTitleInView ? "section-title under" : "section-title"
            }
          >
            Hvem er jeg?
          </h3>
          <p
            // style={{ opacity: 0 }}
            // ref={element => (profileRef = element)}
            className="section-content"
          >
            <span className="bold full">Maria Louise Nørhave (1993)</span>{" "}
            Færdiguddannet som frisør i 2016. Har under frisøruddanelsen
            deltaget i diverse konkurrencer, som både DM, fotokonkurrencer og
            randersmesterskabet for frisør, og fået rigtig flotte placeringer.
            Har også medvirket på modeuge, fotoshoots og andre kreative jobs.
            Her igennem har jeg opnået en stor erfaring og udviklet den
            personlige tilgang til faget, som kommer til udtryk i mit arbejde
            som selvstændig frisør i dag.
          </p>
        {/* </div> */}

        <figure
        // style={{ opacity: 0 }}
        // id="profile-image"
        // ref={imageBoxRef}
        // ref={element => (imageRef = element)}
        >
          <img src={Maria} alt="NØRHAVE-frisør-Randers-Maria-Louise-Nørhave" />
        </figure>
      </article>

      <Footer />
    </section>
  );
};
export default About;
