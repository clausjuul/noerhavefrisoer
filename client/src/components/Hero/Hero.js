import React from "react";
import { Link } from 'react-router-dom';

import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <h2 className="hero__title">Tekst</h2>
      <p className="hero__sub-title">sub tekst</p>
      <Link className="hero__cta" to="/booking">Book</Link>
    </section>
  );
};
export default Hero;
