import React, { useState, useEffect, useRef } from "react";
import { TimelineMax as Timeline } from "gsap";
import { Transition } from "react-transition-group";

import './treatments.scss';
import { ChevronIcon } from "../../components/Icons/Icons";
// import HeroIn from "../../components/Hero/HeroIn";

// TODO
// make cards open on desktop, not on mobile

const openAnimation = (node, reverse, appear = false) => {
  // console.log("appear", appear);
  console.log('node: ', node)
  console.log('animated', )
  let duration = reverse ? 0.3 : 0.2;
  // let duration = appear ? 0.1 : reverse ? 0.35 : 0.25;
  const timeline = new Timeline({
    paused: true,
    reversed: reverse ? true : false
  });

  timeline.fromTo(
    node,
    duration,
    {
      height: "auto",
      // autoAlpha: 1,
      opacity: 1,
      ease: "Power2.easeInOut"
      // clearProps: "opacity"
    },
    {
      height: 0,
      opacity: 0,
      // autoAlpha: 0,
      ease: "Power2.easeInOut"
      // clearProps: "opacity"
    }
  );
  reverse ? timeline.reverse() : timeline.play();
};

const Treatment = (props) => {
  const {isDesktop, treatment: { title, subtitle, data }} = props;
  let treatmentRef = useRef(null);
  console.log(treatmentRef);
  // const [isOpen, setIsOpen] = useState(() => isDesktop ? true : false);
  // const [isOpen, setIsOpen] = useState(isDesktop);
  const [isOpen, setIsOpen] = useState(null);
  // console.log('isOpen', isOpen)
  // console.log('isDesktop: ', isDesktop )

  useEffect(() => {
    if (isDesktop) setIsOpen(false);
    else setIsOpen(true);
  }, [isDesktop]);

  useEffect(() => {
    if (treatmentRef && treatmentRef.current) {
      if (!isOpen && isOpen !== null) {
        // openAni(contentBoxRef, true)
        openAnimation(treatmentRef.current, true);
      } else {
        openAnimation(treatmentRef.current, false);
        // openAni(contentBoxRef, false)
      }
    }
  }, [isOpen, treatmentRef]);

  // let initStyle = {height: 0, opacity: 0}

  return (
    <>
      <div className="treatment__title" onClick={() => setIsOpen(!isOpen)}>
        <h2>
          <ChevronIcon isOpen={isOpen} />
          {title}
        </h2>
        {subtitle && <p className="treatment__title--sub">{subtitle}</p>}
      </div>
      {/* <Transition
        appear={true}
        in={isOpen}
        onEnter={(node, appear) => openAnimation(node, false, appear)}
        onExit={(node, appear) => openAnimation(node, true, appear)}
        timeout={{ enter: 350, exit: 250 }}
      > */}
      <ul
        className="treatment"
        // style={initStyle}
        ref={treatmentRef}
        // ref={el => (treatmentRef = el)}
      >
        {data.map((treatment, i) => (
          <li key={`${title}-${i}`}>
            <span className="treatment__name">{treatment.navn}</span>
            <span className="treatment__price">{treatment.pris}</span>
            {treatment.tekst && treatment.tekst.length === 1 && (
              <span className="treatment__content">{treatment.tekst[0]}</span>
            )}
            {treatment.tekst &&
              treatment.tekst.length > 1 &&
              treatment.tekst.map((_, i) => (
                <span key={`tekst-${i}`} className="treatment__content">
                  {treatment.tekst[i]}
                </span>
              ))}
          </li>
        ))}
      </ul>
      {/* </Transition> */}
      <div className="hr" />
    </>
  );
}

export default Treatment;
