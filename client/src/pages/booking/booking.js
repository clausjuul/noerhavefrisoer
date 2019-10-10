import React
// , { useState, useEffect, useRef }
 from "react";
import { Link } from 'react-router-dom';

import Footer from "../../components/Footer/Footer";
import "./booking.scss";
import Hero from "../../components/Hero/Hero";
import Banner3 from '../../images/banner3.jpg';
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
        <Hero
          // image={Banner3}
          title={"Svært ved at finde en tid?"}
          subTitle={"Ring, skriv eller kig forbi salonen"}
          link={"Kontakt info"}
          to={"/om-salonen"}
        />
        <h1 className="page-title">Booking</h1>
        <iframe
          title="booking"
          className="booking__iframe"
          src="https://noerhave.klikbook.dk"
          // minheight="1100px"
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
