import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
// import { TimelineMax as Timeline, Power2 } from "gsap";

import HeroImage from "../../images/banner1.jpg";
import { revealStaggerAnimation } from "../../animations/revealStagger";
import './Hero.scss';

// export const enter = (node, reverse) => {
//   const timeline = new Timeline({ 
//     paused: true,
//     reversed: reverse ? true : false
//   });

//   timeline
//     .from(node, 0.5, {
//       autoAlpha: 0,
//       y: 0,
//       ease: Power2.easeInOut,
//       clearProps: "opacity, visibility, transform"
//     })
//     .staggerFrom(
//       [
//         node.querySelector("h2"),
//         node.querySelector("p"),
//         node.querySelector("a")
//       ],
//       0.8,
//       {
//         y: 5,
//         opacity: 0,
//         ease: Power2.easeInOut,
//         clearProps: "opacity, transform"
//       },
//       0.1
//     );
//   reverse ? timeline.reverse() : timeline.play()
// };

const Hero = (props) => {
  const { image, height, position, title, subTitle, link, to } = props;

  let titleRef = useRef(null)
  let subTitleRef = useRef(null)
  let ctaRef = useRef(null)

  useEffect(() => {
    revealStaggerAnimation(
      [titleRef, subTitleRef, ctaRef],
      0.6
    );
    // eslint-disable-next-line
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${image || HeroImage})`,
        backgroundPosition: position || "50% 50%",
        height: height || "auto"
      }}
    >
      <h2
        className="hero__title"
        ref={el => (titleRef = el)}
      >
        {title}
      </h2>
      <p
        className="hero__sub-title"
        ref={el => (subTitleRef = el)}
      >
        {subTitle}
      </p>
      <Link
        className="hero__cta"
        to={to}
        ref={el => (ctaRef = el)}
      >
        {link}
      </Link>
    </section>
  );
};
export default Hero;
