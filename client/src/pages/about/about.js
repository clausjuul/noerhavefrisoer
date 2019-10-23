import React from "react";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

import Footer from "components/Footer/Footer";
import Hero from "components/Hero/Hero";
import Maria from "images/maria.jpg";
import './about.scss';

const About = React.memo(props => {

  const [profileTitleRef, profileTitleInView] = useInView({
    threshold: 1,
    triggerOnce: true
  });
console.log('about', )
  return (
    <>
      <Helmet>
        <title>NØRHAVE frisør - Om salonen - Frisør salon i Randers</title>
        <meta name="description" content="NØRHAVE frisør - En hyggelig, kreativ og personlig frisør salon i Randers, som altid sætter stor fokus på den enkelte kunde." />
        <link rel="canonical" href="https://www.noerhavefrisoer.dk/om-salonen" />
      </Helmet>
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
              <h2 className="section-sub-title">
                Åbningstider
              </h2>
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
            <li>Lørdag
              <div className="small bolder">
                Ulige uger
              </div>
            </li>
            <li>08:00 - 13:00</li>
            <li>Lørdag
              <div className="small bolder">
                Lige uger
              </div>
            </li>
            <li>lukket</li>
            <li>Søndag</li>
            <li>lukket</li>
          </ul>

          <ul className="contacts">
            <li className="full">
              <h2 className="section-sub-title">
                Kontakt
              </h2>
            </li>
            <li className="bold">Maria Louise Nørhave</li>
            <li>Gl. Hobrovej 59</li>
            <li>8920 Randers NV</li>
            <li className="bold">+45 4265 5687</li>
            <li className="bold">
              <a href="mailto:maria@noerhavefrisoer.dk">
                Maria@noerhavefrisoer.dk
              </a>
            </li>
          </ul>
        </section>

        <div className="hr" />

        <article className="profile">
          <h3
            className={profileTitleInView ? "section-title underline" : "section-title"}
            ref={profileTitleRef}
          >
            Hvem er jeg?
          </h3>
          <p className="section-content">
            <span className="bold full">Maria Louise Nørhave (1993)</span>
            Færdiguddannet som frisør i 2016. Har under frisøruddanelsen
            deltaget i diverse konkurrencer, som både DM, fotokonkurrencer og
            randersmesterskabet for frisør, og fået rigtig flotte placeringer.
            Har også medvirket på modeuge, fotoshoots og andre kreative jobs.
            Her igennem har jeg opnået en stor erfaring og udviklet den
            personlige tilgang til faget, som kommer til udtryk i mit arbejde
            som selvstændig frisør i dag.
          </p>

          <figure>
            <img src={Maria} alt="NØRHAVE-frisør_Randers-8920_Maria-Louise-Nørhave" />
          </figure>
        </article>

        <Footer />
      </section>
    </>
  );
})
export default About;
