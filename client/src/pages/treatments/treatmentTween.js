import React, { useState } from "react";
import { Tween } from "react-gsap";

import './treatments.scss';
import { ChevronIcon } from "../../components/Icons/Icons";
// import HeroIn from "../../components/Hero/HeroIn";

// TODO
// make cards open on desktop, not on mobile
// Herre / damer / børn

const TreatmentTween = (props) => {
  const {treatment: { title, subtitle, data }} = props;

  const [isOpen, setIsOpen] = useState(window.innerWidth >= 799 ? true : false);
  console.log('', window.innerWidth)

  return (
    <>
      <div className="treatment__title" onClick={() => setIsOpen(!isOpen)}>
        <ChevronIcon isOpen={isOpen} />
        <h2>{title}</h2>
        {subtitle && <p className="treatment__title--sub">{subtitle}</p>}
      </div>
      <Tween
        to={{ height: 0, opacity: 0 }}
        from={{ height: "auto", opacity: 1 }}
        duration={isOpen ? 0.45 : 0.3}
        ease="Power2.easeInOut"
        playState={isOpen ? "reverse" : "play"}
      >
        <ul className="treatment">
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
      </Tween>
      <div className="hr" />
    </>
  );
}

export default TreatmentTween;
