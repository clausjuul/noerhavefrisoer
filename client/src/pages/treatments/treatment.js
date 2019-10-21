import React, { useState, useEffect, useRef } from "react";

import { slideOpenTimeline } from 'animations';
import { ChevronIcon } from "components/Icons/Icons";
import './treatments.scss';

const Treatment = (props) => {
  const {isDesktop, treatment: { title, subtitle, data }} = props;

  let delay = 1250;
  const treatmentRef = useRef(null);
  const onMount = useRef(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (onMount.current) {
      setTimeout(() => {
        isDesktop && setIsOpen(true);
        onMount.current = false;
      }, delay);
    } else {
      slideOpenTimeline(
        treatmentRef.current,
        isOpen ? true : false,
        isDesktop
      );
    }
    // eslint-disable-next-line
  }, [isOpen]);

  return (
    <>
      <div className="treatment__title" onClick={() => setIsOpen(!isOpen)}>
        <h2>
          <ChevronIcon isOpen={isOpen} isDesktop={isDesktop} delay={delay} />
          {title}
        </h2>
        {subtitle && <p className="treatment__title--sub">{subtitle}</p>}
      </div>

      <ul className="treatment" ref={treatmentRef}>
        {data.map((treatment, i) => {
          const { navn, pris, tekst } = treatment;
          return (
            <li key={`item-${i}`}>
              <span className="treatment__name">{navn}</span>
              <span className="treatment__price">{pris}</span>
              {tekst && tekst.length === 1 && (
                <span className="treatment__content">{tekst[0]}</span>
              )}
              {tekst && tekst.length > 1 &&
                tekst.map((_, i) => (
                  <span key={`tekst-${i}`} className="treatment__content">
                    {tekst[i]}
                  </span>
                )
              )}
            </li>
          )
        })}
      </ul>
      <div className="hr" />
    </>
  );
}
export default Treatment;
