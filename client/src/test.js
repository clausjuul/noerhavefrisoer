import React, { useEffect, useRef } from "react";
import { TweenMax, Linear } from "gsap";

const Test = () => {
  let elementRef = useRef(null);

  useEffect(() => {
    TweenMax.from(elementRef, 0.3, {
      // repeat: -1,
      delay: 1,
      opacity: 0,
      y: 5,
      // rotation: 360,
      ease: Linear.easeNone
    });
  }, []);

  function scaleUp() {
    TweenMax.to(elementRef, 1, {
      scale: 1.25,
      ease: Linear.ease
    });
  }

  function scaleDown() {
    TweenMax.to(elementRef, 1, {
      scale: 0.75
    });
  }

  return (
    <div className="App">
        <h1
          onMouseEnter={scaleUp}
          onMouseLeave={scaleDown}
          ref={element => {
            elementRef = element;
          }}
          className="page-title"
          alt="logo"
        >
          Test test
        </h1>
    </div>
  );
};

export default Test;
