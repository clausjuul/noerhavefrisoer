import React from "react";

import Footer from "../../components/Footer/Footer";
// import HeroIn from "../../components/Hero/HeroIn";
import Hero from "../../components/Hero/Hero";
import './about.scss';

const About = () => {
  return (
    <section className="about">
      <Hero
        position={"100% 70%"}
        title={"Mangler du en tid?"}
        subTitle={"Ring og bestil en tid eller"}
        link={"Book online"}
        to={"/booking"}
      />
      <h1 className="page-title">Om salonen</h1>

      <div className="hr" />

      <article className="profile">
        <h3 className="section-title">Hvem er jeg?</h3>
        <p className="section-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ad
          quam! Unde quos iste dolor reprehenderit sapiente, perspiciatis nobis
          ad? Voluptates sed nulla repellat ea autem aliquam nemo repudiandae
          alias.
        </p>
      </article>
      <article className="salonen">
        <h3 className="section-title">Værd at vide om salonen</h3>
        <p className="section-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ad
          quam! Unde quos iste dolor reprehenderit sapiente, perspiciatis nobis
          ad? Voluptates sed nulla repellat ea autem aliquam nemo repudiandae
          alias.
        </p>
      </article>
      <Footer />
    </section>
  );
};
export default About;
