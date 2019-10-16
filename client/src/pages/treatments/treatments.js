import React, { useContext } from "react";

import Footer from "../../components/Footer/Footer";
import treatmentData from './treatmentData';
import Treatment from './treatment';
import Hero from "../../components/Hero/Hero";
import Context from '../../context';
import './treatments.scss';

const Treatments = () => {
  const isMobile = useContext(Context);

  // TODO
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
          isMobile={isMobile}
          treatment={value}
          key={`treatment-${i}`}
        />
      ))}
      <Footer />
    </section>
  );
};
export default Treatments;
