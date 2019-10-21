import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

import HeroImage from "images/banner1.jpg";
import { revealStaggerAnimation } from "animations";
import './Hero.scss';

const Hero = (props) => {
  const { image, height, position, title, subTitle, link, to } = props;

  const heroStyling = {
    backgroundImage: `url(${image || HeroImage})`,
    backgroundPosition: position ? position : "50% 50%",
    padding: height ? `${height} 10vw` : "12vh 10vw"
  };

  const titleRef = useRef(null)
  const subTitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    revealStaggerAnimation(
      [titleRef.current, subTitleRef.current, ctaRef.current],
      0.6
    );
    // eslint-disable-next-line
  }, []);

  return (
    <section className="hero" style={heroStyling}>
      <h2 className="hero__title" ref={titleRef}>
        {title}
      </h2>
      <p className="hero__sub-title" ref={subTitleRef}>
        {subTitle}
      </p>
      <Link className="hero__cta" to={to} ref={ctaRef}>
        {link}
      </Link>
    </section>
  );
};
export default Hero;
