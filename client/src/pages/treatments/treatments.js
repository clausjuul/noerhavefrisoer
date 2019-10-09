import React from "react";

import Footer from "../../components/Footer/Footer";
import treatmentData from './treatmentData';
import Treatment from './treatment';
import Hero from "../../components/Hero/Hero";
import './treatments.scss';

const Treatments = () => {
  // const { isMobile } = props;

  return (
    <section className="treatments">
      <Hero />
      <h1 className="page-title">Behandlinger</h1>
      {Object.values(treatmentData).map((value, i) => (
        <Treatment 
        // isMobile={isMobile}
          treatment={value} key={`treatment-${i}`} />
      ))}
    <Footer />
    </section>
  );
};
export default Treatments;
