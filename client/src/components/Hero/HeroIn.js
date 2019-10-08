import React from "react";
import { Link } from 'react-router-dom';

// import HeroImage from './heroImagexx.jpg';
import HeroImage from './test.jpg';
import './Hero.scss';



const Hero = (props) => {
  const { height, image } = props;

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${image || HeroImage})`, height: height || '30vh' }}
    >
      <h2 className="hero__title">Velkommen</h2>
      <p className="hero__sub-title">
        Ring og bestil en tid eller<br></br>
      </p>
      <Link className="hero__cta" to="/booking">
        Book Online
      </Link>
    </section>
  );
};
export default Hero;