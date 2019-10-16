import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineMax as Timeline } from "gsap";

import "./Icons.scss";

export const FacebookIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 448 512"
    >
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z"
      />
    </svg>
  );
}

export const InstagramIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 448 512"
    >
      <path
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      />
    </svg>
  );
}

export const ChevronIcon = ({isOpen}) => {

  let chevronRef = useRef(null);

  useEffect(() => {
    if(isOpen) {
      TweenMax.fromTo(
        chevronRef,
        0.35,
        {
          rotation: 0
        },
        {
          rotation: 90,
          ease: "Power2.easeInOut",
        }
      );
    } else {
      TweenMax.fromTo(
        chevronRef,
        0.35,
        {
          rotation: 90
        },
        {
          rotation: 0,
          ease: "Power2.easeInOut",
          clearProps: "transform"
        }
      );
    }
  }, [isOpen]);
  
  return (
    <svg
      ref={element => (chevronRef = element)}
      aria-hidden="true"
      viewBox="0 0 320 512"
    >
      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
    </svg>
  );
}

const menuIconTimeline = (top, middle, bottom) => {
  const timeline = new Timeline({ paused: true });
  timeline
    .fromTo(middle, 0.25, {  opacity: 1 }, {  opacity: 0 }, 0)
    .fromTo(top, 0.25, { top: "0%" }, { top: "0.55rem" }, 0)
    .fromTo(bottom, 0.25, { bottom: "0%" }, { bottom: "0.55rem" }, 0)
    // .fromTo(top, 0.25, { top: "0%" }, { top: "50%" }, 0)
    // .fromTo(bottom, 0.25, { bottom: "0%" }, { bottom: "50%" }, 0)
    .fromTo(top, 0.25, { rotation: 0 }, { rotation: 45 }, 0.2)
    .fromTo(bottom, 0.25, { rotation: 0 }, { rotation: -45 }, 0.2);
  return timeline;
};

export const MenuIcon = ({isOpen}) => {
  let top = useRef(null);
  let middle = useRef(null);
  let bottom = useRef(null);

  
  useEffect(() => {
    const timeline = menuIconTimeline(top, middle, bottom);
    if(isOpen) {
      timeline.play()
    } else {
      timeline.reverse()
    }
  }, [isOpen]);

  return (
    <>
      <svg
        viewBox="0 0 448 62"
        ref={el => (top = el)}
        aria-hidden="true"
        // className="burger-icon"
      >
        <path d="M418.23,62H29.77A29.86,29.86,0,0,1,0,32.23V29.77A29.86,29.86,0,0,1,29.77,0H418.23A29.86,29.86,0,0,1,448,29.77v2.46A29.86,29.86,0,0,1,418.23,62Z" />
      </svg>
      <svg
        viewBox="0 0 448 62"
        ref={el => (middle = el)}
        aria-hidden="true"
        // className="burger-icon"
      >
        <path d="M418.23,62H29.77A29.86,29.86,0,0,1,0,32.23V29.77A29.86,29.86,0,0,1,29.77,0H418.23A29.86,29.86,0,0,1,448,29.77v2.46A29.86,29.86,0,0,1,418.23,62Z" />
      </svg>
      <svg
        viewBox="0 0 448 62"
        ref={el => (bottom = el)}
        aria-hidden="true"
        // className="burger-icon"
      >
        <path d="M418.23,62H29.77A29.86,29.86,0,0,1,0,32.23V29.77A29.86,29.86,0,0,1,29.77,0H418.23A29.86,29.86,0,0,1,448,29.77v2.46A29.86,29.86,0,0,1,418.23,62Z" />
      </svg>
    </>
  );
}

    //   <path d="M418.23 62H29.77A29.86 29.86 0 010 32.23v-2.46A29.86 29.86 0 0129.77 0h388.46A29.86 29.86 0 01448 29.77v2.46A29.86 29.86 0 01418.23 62zM418.23 222H29.77A29.86 29.86 0 010 192.23v-2.46A29.86 29.86 0 0129.77 160h388.46A29.86 29.86 0 01448 189.77v2.46A29.86 29.86 0 01418.23 222zM418.23 382H29.77A29.86 29.86 0 010 352.23v-2.46A29.86 29.86 0 0129.77 320h388.46A29.86 29.86 0 01448 349.77v2.46A29.86 29.86 0 01418.23 382z" />
    // </svg>

    // <svg viewBox="0 0 500 500" aria-hidden="true" className="burger-icon">
    //   <path
    //     ref={el => (top = el)}
    //     d="M444.23,121H55.77A29.86,29.86,0,0,1,26,91.23V88.77A29.86,29.86,0,0,1,55.77,59H444.23A29.86,29.86,0,0,1,474,88.77v2.46A29.86,29.86,0,0,1,444.23,121Z"
    //   />
    //   <path
    //     fill="#00000055"
    //     ref={el => (middle = el)}
    //     d="M444.23,281H55.77A29.86,29.86,0,0,1,26,251.23v-2.46A29.86,29.86,0,0,1,55.77,219H444.23A29.86,29.86,0,0,1,474,248.77v2.46A29.86,29.86,0,0,1,444.23,281Z"
    //   />
    //   <path
    //     fill="#99000055"
    //     ref={el => (bottom = el)}
    //     d="M444.23,441H55.77A29.86,29.86,0,0,1,26,411.23v-2.46A29.86,29.86,0,0,1,55.77,379H444.23A29.86,29.86,0,0,1,474,408.77v2.46A29.86,29.86,0,0,1,444.23,441Z"
    //   />
    // </svg>;