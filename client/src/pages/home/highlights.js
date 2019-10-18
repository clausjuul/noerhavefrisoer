import React, { useRef, useEffect } from "react";

import { revealStaggerAnimation } from "../../animations/revealStagger";

const Highlights = props => {
  const { inView } = props;

  let p1Ref = useRef(null);
  let p2Ref = useRef(null);
  let p3Ref = useRef(null);
  let p4Ref = useRef(null);

  useEffect(() => {
    if (inView) {
      revealStaggerAnimation([p1Ref, p2Ref, p3Ref, p4Ref], 0.5);
    }
  }, [inView]);

  return (
    <article className="highlights__content">
      <h2 className={inView ? "section-title underline" : "section-title"}>
        Hos mig får du
      </h2>
      <p style={{ opacity: 0 }} ref={el => (p1Ref = el)}>
        - Afslappet og hyggelig atmosfære
      </p>
      <p style={{ opacity: 0 }} ref={el => (p2Ref = el)}>
        - Professionel og personlig rådgivning
      </p>
      <p style={{ opacity: 0 }} ref={el => (p3Ref = el)}>
        - En behandling som passer til dig og dine ønsker
      </p>
      <p style={{ opacity: 0 }} ref={el => (p4Ref = el)}>
        - Nærvær, grundighed og gratis parkering lige ved døren
      </p>
    </article>
  );
};
export default Highlights;
