import React, { useRef } from "react";
import { Transition } from "react-transition-group";
import { TimelineMax as Timeline } from "gsap";

import styles from './burger.module.scss';

const burgerIconAnimation = (node, top, bottom, duration, reverse) => {
  const timeline = new Timeline({
    paused: true,
    reversed: reverse ? false : true
  });
  timeline
    .fromTo(
      node,
      duration,
      { rotation: 0 },
      { rotation: 45, transformOrigin: "50% 50%" },
      0
    )
    .fromTo(
      top,
      duration,
      { "stroke-dashoffset": "0" },
      { "stroke-dashoffset": "-98px" },
      0
    )
    .fromTo(
      bottom,
      duration,
      { "stroke-dashoffset": "0" },
      { "stroke-dashoffset": "-138px" },
      0
    );
  reverse ? timeline.play() : timeline.reverse();
};

const BurgerIcon = ({ isOpen, setIsOpen }) => {
  let top = useRef(null);
  let bottom = useRef(null);

  return (
    <ul title="Menu" onClick={() => setIsOpen(!isOpen)}>
      <li>
        <Transition
          // appear={true}
          in={isOpen}
          onEnter={node => burgerIconAnimation(node, top, bottom, 0.5, true)}
          onExit={node => burgerIconAnimation(node, top, bottom, 0.35, false)}
          timeout={{ enter: 500, exit: 350 }}
        >
          <svg viewBox="0 0 100 100" className={styles.icon}>
            <path
              ref={el => (top = el)}
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path d="m 30,50 h 40" />
            <path
              ref={el => (bottom = el)}
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </Transition>
      </li>
    </ul>
  );
};
export default BurgerIcon;