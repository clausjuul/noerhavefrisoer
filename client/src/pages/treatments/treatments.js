import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";

import Context from 'context';
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import treatmentData from 'data/treatmentData';
import Treatment from './treatment';
import BannerSalon from 'images/IMG_0241.JPG';
import './treatments.scss';

const Treatments = () => {
  const isDesktop = useContext(Context);

  return (
    <>
      <Helmet>
        <title>NØRHAVE frisør - Behandlinger - Frisør salon i Randers</title>
        <meta name="description" content="NØRHAVE frisør - En hyggelig, kreativ og personlig frisør salon i Randers, som altid sætter stor fokus på den enkelte kunde." />
        <link rel="canonical" href="https://www.noerhavefrisoer.dk/behandlinger" />
      </Helmet>
      
      <section className="treatments">
        <Hero
          image={BannerSalon}
          height={'17vh'}
          title={"Mangler du en tid?"}
          subTitle={"Ring og bestil en tid eller"}
          link={"Book online"}
          to={"/booking"}
        />

        <h1 className="page-title">
          Behandlinger
        </h1>

        {Object.values(treatmentData).map((value, i) => (
          <Treatment
            isDesktop={isDesktop}
            treatment={value}
            key={`treatment-${i}`}
          />
        ))}
        
        <Footer />
      </section>
    </>
  );
};
export default Treatments;
