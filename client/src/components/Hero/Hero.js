import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { Transition } from "react-transition-group";
// import { TweenMax as Tween, Power2 } from "gsap";
import { TimelineMax as Timeline, Power2 } from "gsap";
import { Tween } from "react-gsap";

// import HeroImage from './heroImagexx.jpg';
import HeroImage from './test.jpg';
import './Hero.scss';

export const enter = (node, reverse) => {
  const timeline = new Timeline({ 
    paused: true,
    reversed: reverse ? true : false
  });

  timeline
    .from(
      node,
      0.5,
      {
        autoAlpha: 0,
        // scaleX: 0.99,
        y: 0,
        ease: Power2.easeInOut
        // clearProps: "opacity"
      }
      // {
      //   autoAlpha: 0,
      //   scaleX: 0.97,
      //   y: 5,
      //   ease: Power1.easeInOut,
      //   // clearProps: "opacity"
      // },
    )
    .staggerFrom([
      node.querySelector("h2"),
      node.querySelector("p"),
      node.querySelector("a")
    ], 0.8, {
      y: 5,
      // scaleY: 0.95,
      opacity: 0,
      ease: Power2.easeInOut
    }, 0.1);
    // .from(node.querySelector("h2"), 0.8, {
    //   y: 10,
    //   // scaleY: 0.95,
    //   opacity: 0,
    //   ease: Power2.easeInOut
    // })
    // .from(node.querySelector("p"), 0.8, {
    //   // x: 15,
    //   y: 10,
    //   opacity: 0,
    //   ease: Power2.easeInOut
    // })
    // .from(node.querySelector("a"), 0.8, {
    //   y: 10,
    //   opacity: 0,
    //   ease: Power2.easeInOut
    // });
  reverse ? timeline.reverse() : timeline.play()
};

const Hero = (props) => {
  const { location } = props;

  const [show, setShow] = useState(true)
  const [isLarge, setIsLarge] = useState(false)

  const titleRef = useRef(null)
  const subTitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    console.log('large: ', isLarge)
    // if(location && location.pathname) {
      if (location.pathname.length >= 2) {
        // isLarge !== true &&
        setIsLarge(true)
      } else {
        // isLarge !== false && 
        setIsLarge(false)
      }
    // }
  }, [location])

  return (
    <Transition
      // key={key}
      appear={true}
      in={show}
      onEnter={node => enter(node, false)}
      onExit={node => enter(node, true)}
      timeout={{ enter: 1000, exit: 1000 }}
    >
    {/* <Tween
      to={{delay: 1, minHeight: '25vh'}}
      from={{ delay: 1, minHeight: '40vh' }}
      duration={0.5}
      ease="Power2.easeInOut"
      playState={isLarge ? "play" : "reverse"}
    > */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <h2 className="hero__title" ref={titleRef}>Velkommen</h2>
        <p className="hero__sub-title" ref={subTitleRef}>
          Ring og bestil en tid eller<br></br>
        </p>
        <Link className="hero__cta" to="/booking" ref={ctaRef}>
          Book Online
        </Link>
      </section>
      {/* </Tween> */}
    </Transition>
  );
};
export default Hero;
