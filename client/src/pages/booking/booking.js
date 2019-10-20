import React, { useContext } from "react";

import Context from "context";
import Hero from "components/Hero/Hero";
import Footer from "components/Footer/Footer";
import "./booking.scss";

const Booking = () => {

  const isDesktop = useContext(Context);
  const height = isDesktop ? "615px" : "1110px";

  return (
    <>
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
