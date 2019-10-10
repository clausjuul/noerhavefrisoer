import React, { useState, useEffect, useRef } from "react";
// import { Tween } from "react-gsap";
import { TimelineMax as Timeline } from "gsap";

import './treatments.scss';
import { ChevronIcon } from "../../components/Icons/Icons";
// import HeroIn from "../../components/Hero/HeroIn";

// TODO
// make cards open on desktop, not on mobile

const openAni = (ref, reverse) => {
  const timeline = new Timeline({
    paused: true,
    reversed: reverse ? true : false
  });

  timeline.fromTo(
    ref,
    0.35,
    {
      height: "auto",
      // autoAlpha: 1,
      opacity: 1,
      ease: "Power2.easeInOut",
      clearProps: "opacity"
    },
    {
      height: 0,
      opacity: 0,
      // autoAlpha: 0,
      ease: "Power2.easeInOut",
      clearProps: "opacity"
    }
  );
    // return timeline
  reverse ? timeline.reverse() : timeline.play();
};

const Treatment = (props) => {
  const {isMobile, treatment: { title, subtitle, data }} = props;

  const [isOpen, setIsOpen] = useState(isMobile);
  let contentBoxRef = useRef(null);

  useEffect(() => {
    if(isOpen) {
      openAni(contentBoxRef, true)
    } else {
      openAni(contentBoxRef, false)
    }
  }, [isOpen])

  return (
    <>
      <div className="treatment__title" onClick={() => setIsOpen(!isOpen)}>
        <h2>
          <ChevronIcon isOpen={isOpen} />
          {title}
        </h2>
        {subtitle && <p className="treatment__title--sub">{subtitle}</p>}
      </div>
      <ul className="treatment" ref={element => (contentBoxRef = element)}>
        {data.map((treatment, i) => (
          <li key={`${title}-${i}`}>
            <span className="treatment__name">{treatment.navn}</span>
            <span className="treatment__price">{treatment.pris}</span>
            {treatment.tekst && treatment.tekst.length === 1 && (
              <span className="treatment__content">{treatment.tekst[0]}</span>
            )}
            {treatment.tekst &&
              treatment.tekst.length > 1 &&
              treatment.tekst.map((t, i) => (
                <span key={`tekst-${i}`} className="treatment__content">
                  {treatment.tekst[i]}
                </span>
              ))}
          </li>
        ))}
      </ul>
      <div className="hr" />
    </>
  );
}

export default Treatment;
