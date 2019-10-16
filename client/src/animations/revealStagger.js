import { TweenMax, Power2 } from "gsap";

export const revealStaggerAnimation = (nodes, delay) => {
  TweenMax.staggerFromTo(
    nodes,
    0.7,
    {
      opacity: 0,
      y: 7
    },
    {
      opacity: 1,
      y: 0,
      delay,
      ease: Power2.easeOut,
      clearProps: "transform, opacity"
    },
    0.15
  );
};
