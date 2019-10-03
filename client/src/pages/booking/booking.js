import React from "react";
import { Link } from 'react-router-dom';

import Footer from "../../components/Footer/Footer";
import "./booking.scss";
import HeroIn from "../../components/Hero/HeroIn";


const Booking = () => {
  return (
    <>
      <section className="booking">
        <HeroIn height={'20vh'} />
        <h1 className="page-title">Booking</h1>
        <h3 className="page-content">
          Har du svært ved at finde en tid, skal du være velkommen
          <br></br>
          til at ringe, skrive eller kigge forbi salonen
        </h3>
        <Link to="om-mig">
          Kontaktoplysningerne finder du <u>her</u>
        </Link>
        <iframe
          title="booking"
          className="booking__iframe"
          src="https://noerhave.klikbook.dk"
          // frameBorder="0"
          // height="100%"
          // width="100%"
        ></iframe>
      <Footer />
      </section>
    </>
  );
};
export default Booking;
