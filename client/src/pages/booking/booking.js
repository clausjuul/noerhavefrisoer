import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

import Footer from "../../components/Footer/Footer";
import "./booking.scss";
import HeroIn from "../../components/Hero/Hero";
// import HeroIn from "../../components/Hero/HeroIn";


const Booking = () => {
//   const [frameHeight, setFrameHeight] = useState('1000px')
//   const frameRef = useRef(null)

// const handleResize = (iframe) => {
//   console.log('ii: ', iframe)
//   const { body, documentElement } = iframe.contentWindow.document;
//   const contentHeight = Math.max(
//     body.clientHeight,
//     body.offsetHeight,
//     body.scrollHeight,
//     documentElement.clientHeight,
//     documentElement.offsetHeight,
//     documentElement.scrollHeight
//   );
//   if (contentHeight !== frameHeight) {
//     setFrameHeight({ contentHeight });
//   }
//   };

//   const onLoad = (iframe) => {
//     // iframe.contentWindow.addEventListener("resize", handleResize);
//     handleResize(iframe);
//   };


  return (
    <>
      <section className="booking">
        <HeroIn height={"20vh"} />
        <h1 className="page-title">Booking</h1>
        <h3 className="page-content">
          Har du svært ved at finde en tid, skal du være velkommen
          <br></br>
          til at ringe, skrive eller kigge forbi salonen
        </h3>
        <Link to="om-mig">
          Kontaktoplysningerne finder du <u>her</u>
        </Link>
        <iframe
          title="booking"
          className="booking__iframe"
          src="https://noerhave.klikbook.dk"
          // scrolling="no"
          // onLoad={() => onLoad(frameRef.current)}
          // ref={frameRef}
          // style={{ width: "100%", height: `${frameHeight}px` }}
          // frameBorder="0"
          // height="100%"
          // width="100%"
        ></iframe>
        <Footer />
      </section>
    </>
  );
};
export default Booking;
