import React, { useRef, useEffect } from "react";

import { revealStaggerAnimation } from "animations";

const Highlights = React.memo(props => {
  const { inView } = props;

  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);
  const p4Ref = useRef(null);

  useEffect(() => {
    if (inView) {
      revealStaggerAnimation(
        [p1Ref.current, p2Ref.current, p3Ref.current, p4Ref.current],
        0.5
      );
    }
  }, [inView]);

  return (
    <article className="highlights__content">
      <h2 className={inView ? "section-title underline" : "section-title"}>
        Hos mig får du
      </h2>
      <p ref={p1Ref} style={{ opacity: 0 }}>
        - Afslappet og hyggelig atmosfære
      </p>
      <p ref={p2Ref} style={{ opacity: 0 }}>
        - Professionel og personlig rådgivning
      </p>
      <p ref={p3Ref} style={{ opacity: 0 }}>
        - En behandling som passer til dig og dine ønsker
      </p>
      <p ref={p4Ref} style={{ opacity: 0 }}>
        - Nærvær, grundighed og gratis parkering lige ved døren
      </p>
    </article>
  );
})
export default Highlights;
