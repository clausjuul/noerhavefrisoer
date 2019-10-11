import React, { useRef, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
import { TweenMax } from "gsap";

// import "./home.scss";
// insta som slide sideværs galleri på mobil
// desktop exspand nedad, 3 pr row?

const Highlights = props => {
  const { inView } = props;

  let p1Ref = useRef(null);
  let p2Ref = useRef(null);
  let p3Ref = useRef(null);
  let p4Ref = useRef(null);

  useEffect(() => {
    if (inView) {
      TweenMax.staggerFromTo(
        [p1Ref, p2Ref, p3Ref, p4Ref],
        0.8,
        { opacity: 0, y: 7 },
        { opacity: 1, y: 0, delay: 0.3, clearProps: "transform, opacity" },
        0.15
      );
    }
  }, [inView]);

  return (
    <article className="highlights__content">
      <h2 className={inView ? "section-title under" : "section-title"}>
        Hos mig får du
      </h2>
      <p style={{ opacity: 0 }} ref={element => (p1Ref = element)}>
        - Afslappet og hyggelig atmosfære
      </p>
      <p style={{ opacity: 0 }} ref={element => (p2Ref = element)}>
        - Professionel og personlig rådgivning
      </p>
      <p style={{ opacity: 0 }} ref={element => (p3Ref = element)}>
        - En behandling som passer til dig og dine ønsker
      </p>
      <p style={{ opacity: 0 }} ref={element => (p4Ref = element)}>
        - Nærvær, grundighed og gratis parkering lige ved døren
      </p>
    </article>
  );
};
export default Highlights;
