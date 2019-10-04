import React
// , { useEffect, useState, useRef } 
from "react";
// import { Transition } from "react-transition-group";
// import { TimelineMax as Timeline, TweenMax, Power1 } from "gsap";

import { FacebookIcon, InstagramIcon } from '../Icons/Icons';
import './Footer.scss';
// import { Tween } from "react-gsap";


// const animation = (node, reverse) => {
//   const timeline = new Timeline({ paused: true });

//   timeline.fromTo(node, 0.4, {
//     // display: "none",
//     opacity: 0,
//     scaleX: 0.97,
//     y: '-2rem',
//     ease: Power1.easeInOut,
//     clearProps: "opacity, visibility, display"
//   });

//   reverse ? timeline.reverse() : timeline.play();

//   // return timeline;
// };

const Footer = () => {
  // const { location, show } = props;
  // const footerRef = useRef(null)
  // const [show, setShow] = useState(true);

  // const timeline = new Timeline({ paused: true });


  // useEffect(() => {
  //   if(footerRef && footerRef.current) {
  //     setShow(false)

  //     setInterval(() => {
  //       setShow(true);
  //     }, 800);
  //   }
  //   // return () => {
  //   //   cleanup
  //   // };
  // }, [location, footerRef]);

  // useEffect(() => {
  //   if(footerRef && footerRef.current) {
  //     timeline.fromTo(
  //       footerRef.current,
  //       0.4,
  //       {
  //         opacity: 0
  //       },
  //       {
  //         opacity: 1
  //       }
  //     );
  //   }
  // }, [footerRef])

  // useEffect(() => {
  //   show ? timeline.play() : timeline.reverse()
  // }, [show])

  // useEffect(() => {
  //   setShow(false)
  //   // timeline.reverse();
  //   setTimeout(() => {
  //     setShow(true)
  //     // timeline.play();
  //   }, 900);
  // }, [location])

  return (
    // <Transition
    //   // key={key}
    //   appear={true}
    //   in={show}
    //   onEnter={node => {TweenMax.to(node, 0.4, {opacity: 1})}}
    //   onExit={node => {TweenMax.to(node, 0.4, { opacity: 0 })}}
    //   // onEnter={node => animation(node, false)}
    //   // onExit={node => animation(node, true)}
    //   timeout={{ enter: 1000, exit: 1000 }}
    // >
    // <Tween
    //   to={{ opacity: 1 }}
    //   from={{ opacity: 0 }}
    //   duration={show ? 0.4 : 0.8}
    //   ease="Power2.easeInOut"
    //   playState={show ? "play" : "reverse"}
    // >
      <div className="footer-wrapper" id="footer">
        <footer className="footer">
          <ul className="footer__opening-hours">
            {/* <section className="footer__opening-hours">
          <ul> */}
            {/* <li className="footer__title">
            <h3>Åbningstider</h3>
          </li> */}
            {/* <li>Mandag</li>
            <li>lukket</li> */}
            <li>Tirsdag</li>
            <li>08:00 - 17:00</li>
            <li>Onsdag</li>
            <li>08:00 - 17:00</li>
            <li>Torsdag</li>
            <li>12:00 - 20:00</li>
            <li>Fredag</li>
            <li>08:00 - 17:00</li>
            <li>
              Lørdag
              <div className="footer__small">i ulige uger</div>
            </li>
            <li>08:00 - 13:00</li>
            {/* <li className="full">eller efter aftale</li> */}
            {/* <li>08:00 - 13:00 eller efter aftale</li> */}
            {/* <li>
              Lørdag
              <div className="footer__small">(lige uger)</div>
            </li>
            <li>lukket</li>
            <li>Søndag</li>
            <li>lukket</li> */}
          </ul>

          <div className="footer__social">
            <span className="footer__social--icon">
              <FacebookIcon />
            </span>
            <span className="footer__social--icon">
            https://www.instagram.com/noerhave_frisoer/
              <InstagramIcon />
            </span>
          </div>

          <ul className="footer__contacts">
            {/* <section className="footer__contacts">
          <ul> */}

            {/* <li className="footer__title">
            <h3>Kontakt</h3>
          </li> */}
            <li className="bold">Maria Louise Nørhave</li>
            <li>Gl. hobrovej 59</li>
            <li>8920 Randers NV</li>
            <li>Cvr. 40697156</li>
            <br></br>
            <li className="bold">+45 4265 5687</li>
            <li className="bold">Maria@noerhavefrisoer.dk</li>
          </ul>
        </footer>
      </div>
    // </Tween>
    // </Transition>
  );
};

// const FooterPortal = () => (
//   ReactDom.createPortal(<Footer />, document.body)
// )
export default Footer;
