import React from "react";

import Footer from "../../components/Footer/Footer";
import HeroIn from "../../components/Hero/HeroIn";
import './about.scss';

const About = () => {
  return (
    <section className="about">
      <HeroIn />
      <section>Om mig</section>
      <Footer />
    </section>
  );
};
export default About;
