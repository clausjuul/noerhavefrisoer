import React from "react";

import Footer from "../../components/Footer/Footer";
import treatmentData from './treatmentData';
import Treatment from './treatment';
import Hero from "../../components/Hero/Hero";
import './treatments.scss';

const Treatments = () => {

  // TODO
  // lav isMobile context
  // Hero tekst
  // favicon
  // react-helmet
  return (
    <section className="treatments">
      <Hero
        position={"80% 80%"}
        title={"Mangler du en tid?"}
        subTitle={"Ring og bestil en tid eller"}
        link={"Book online"}
        to={"/booking"}
      />
      <h1 className="page-title">Behandlinger</h1>
      {Object.values(treatmentData).map((value, i) => (
        <Treatment
          // isMobile={isMobile}
          treatment={value}
          key={`treatment-${i}`}
        />
      ))}
      <Footer />
    </section>
  );
};
export default Treatments;
