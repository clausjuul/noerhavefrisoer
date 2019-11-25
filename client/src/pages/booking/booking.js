import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";

import Context from "context";
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import "./booking.scss";

const Booking = () => {
  const isDesktop = useContext(Context);
  const height = isDesktop ? "480px" : "880px";

  return (
    <>
      <Helmet>
        <title>NØRHAVE frisør • Booking online • Frisør salon i Randers</title>
        <meta name="description" content="NØRHAVE frisør • En hyggelig, kreativ og personlig frisør salon i Randers, som altid sætter stor fokus på den enkelte kunde." />
        <link rel="canonical" href="https://www.noerhavefrisoer.dk/booking" />
      </Helmet>
      <section className="booking">
        <Hero
          title={"Svært ved at finde en tid?"}
          subTitle={"Ring, skriv eller kig forbi salonen"}
          link={"Kontakt info"}
          to={"/om-salonen"}
        />
        <h1 className="page-title">
          Booking
        </h1>
        <iframe
          title="booking"
          className="booking__iframe"
          src="https://noerhave.klikbook.dk"
          height={height}
        />
        <Footer />
      </section>
    </>
  );
};
export default Booking;
