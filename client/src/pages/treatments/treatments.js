import React, { useState } from "react";
import { Tween } from "react-gsap";

import Footer from "../../components/Footer/Footer";
import treatmentData from './treatmentData';
import './treatments.scss';
import { ChevronIcon } from "../../components/Icons/Icons";
import HeroIn from "../../components/Hero/Hero";
// import HeroIn from "../../components/Hero/HeroIn";

// TODO
// make cards open on desktop, not on mobile
// Herre / damer / børn


const Treatment = (props) => {
  const {treatment: { title, subtitle, data }} = props;

  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <div className="treatment__title" onClick={() => setIsOpen(!isOpen)}>
        <ChevronIcon isOpen={isOpen} />
        <h2>{title}</h2>
        {subtitle && <p className="treatment__title--sub">{subtitle}</p>}
      </div>
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
              <span className="treatment__name">{treatment.navn}</span>
              <span className="treatment__price">{treatment.pris}</span>
              {treatment.tekst && treatment.tekst.length === 1 && (
                <span className="treatment__content">
                {treatment.tekst[0]}
                </span>
              )}
              {treatment.tekst &&
                treatment.tekst.length > 1 &&
                treatment.tekst.map((t, i) => ( 
                  <span key={`tekst-${i}`} className="treatment__content">
                    {treatment.tekst[i]}
                  </span>
                ))
              }
            </li>
          ))}
        </ul>
      </Tween>
      <div className="hr" />
    </>
  );
}

const Treatments = () => {
  return (
    <>
      <section className="treatments">
        <HeroIn height={'40vh'} />
        <h1 className="page-title">Behandlinger</h1>
        {Object.values(treatmentData).map((value, i) => (
          <Treatment treatment={value} key={`treatment-${i}`} />
        ))}
      <Footer />
      </section>
    </>
  );
};
export default Treatments;
