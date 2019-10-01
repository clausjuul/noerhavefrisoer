import React, { useState } from "react";
import { Tween } from "react-gsap";

import treatmentData from './treatmentData';
import './treatments.scss';

// TODO
// make cards open on desktop, not on mobile
// Herre / damer / børn


const Treatment = (props) => {
  const {treatment: { title, data }} = props;

  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <h3 onClick={() => setIsOpen(!isOpen)}>{title}</h3>
      <Tween
        to={{ height: 0, autoAlpha: 0 }}
        from={{ height: "auto", autoAlpha: 1 }}
        duration={isOpen ? 0.35 : 0.2}
        ease="Power2.easeInOut"
        playState={isOpen ? "reverse" : "play"}
      >
        <ul className="treatment">
          {data.map((treatment, i) => (
            <li key={`${title}-${i}`}>
              <span>{treatment.navn}</span>
              <span>{treatment.pris}</span>
              {treatment.tekst && <div>{treatment.tekst}</div>}
            </li>
          ))}
        </ul>
      </Tween>
    </>
  );
}

const Treatments = () => {
  return (
    <section className="treatments">
      {Object.values(treatmentData).map((value, i) => (
        <Treatment treatment={value} key={`treatment-${i}`} />
      ))}
    </section>
  );
};
export default Treatments;
