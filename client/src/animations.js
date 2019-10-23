import { TimelineMax as Timeline, TweenMax as Tween, Power1, Power2 } from "gsap";

export const enterPageTransition = (node, appears) => {
    const delay = appears ? 0 : 0.25;
    const timeline = new Timeline({ paused: true });

    timeline.from(node, 0.4, {
      display: "none",
      autoAlpha: 0,
      delay: delay,
      y: 5,
      ease: Power1.easeOut,
      clearProps: "opacity, visibility, display, transform"
    });

  timeline.play();
}

export const exitPageTransition = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.25, {
    autoAlpha: 0,
    y: 5,
    ease: Power1.easeOut,
  });

  timeline.play();
}

export const revealStaggerAnimation = (nodes, delay) => {
  Tween.staggerFromTo(
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
// export const slideOpenTimeline = (node, reverse, isDesktop) => {
export const slideOpenTimeline = (node, reverse) => {
  // let duration = isDesktop ? (reverse ? 0.4 : 0.3) : reverse ? 0.2 : 0.15;
  let duration = reverse ? 0.4 : 0.3;

  const timeline = new Timeline({
    paused: true,
    reversed: reverse ? true : false
  });

  timeline.fromTo(
    node,
    duration,
    {
      height: "auto",
      opacity: 1,
      ease: "Power2.easeInOut"
    },
    {
      height: 0,
      opacity: 0,
      ease: "Power2.easeInOut"
    }
  );
  reverse ? timeline.reverse() : timeline.play();
};