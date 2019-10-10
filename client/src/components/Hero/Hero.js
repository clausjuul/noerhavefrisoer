import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { Transition } from "react-transition-group";
import { TimelineMax as Timeline, Power2 } from "gsap";

import HeroImage from '../../images/banner1.jpg';
import './Hero.scss';

export const enter = (node, reverse) => {
  const timeline = new Timeline({ 
    paused: true,
    reversed: reverse ? true : false
  });

  timeline
    .from(node, 0.5, {
      autoAlpha: 0,
      y: 0,
      ease: Power2.easeInOut,
      clearProps: "opacity, visibility, transform"
    })
    .staggerFrom(
      [
        node.querySelector("h2"),
        node.querySelector("p"),
        node.querySelector("a")
      ],
      0.8,
      {
        y: 5,
        opacity: 0,
        ease: Power2.easeInOut,
        clearProps: "opacity, transform"
      },
      0.1
    );
  reverse ? timeline.reverse() : timeline.play()
};

const Hero = (props) => {
  const { image, height, position, title, subTitle, link, to } = props;

  const [show] = useState(true)

  const titleRef = useRef(null)
  const subTitleRef = useRef(null)
  const ctaRef = useRef(null)

  return (
    <Transition
      appear={true}
      in={show}
      onEnter={node => enter(node, false)}
      onExit={node => enter(node, true)}
      timeout={{ enter: 1000, exit: 1000 }}
    >
      <section
        className="hero"
        style={{
          backgroundImage: `url(${image || HeroImage})`,
          backgroundPosition: position || "50% 50%",
          height: height || "auto"
        }}
      >
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
    </Transition>
  );
};
export default Hero;
