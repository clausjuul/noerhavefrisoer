import React from "react";

import { FacebookIcon, InstagramIcon } from '../Icons/Icons';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__opening-hours">
        <ul>
          {/* <li className="footer__title">
            <h3>Åbningstider</h3>
          </li> */}
          <li>Mandag</li>
          <li>lukket</li>
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
            <div className="footer__small">(ulige uger)</div>
          </li>
          <li>08:00 - 13:00 eller efter aftale</li>
          <li>
            Lørdag
            <div className="footer__small">(lige uger)</div>
          </li>
          <li>lukket</li>
          <li>Søndag</li>
          <li>lukket</li>
        </ul>
      </section>

      <div className="footer__social">
        <span className="footer__social--icon">
          <FacebookIcon />
        </span>
        <span className="footer__social--icon">
          <InstagramIcon />
        </span>
      </div>

      <section className="footer__contacts">
        <ul>
          {/* <li className="footer__title">
            <h3>Kontakt</h3>
          </li> */}
          <li>Maria Louise Nørhave</li>
          <li>Gl. hobrovej 59</li>
          <li>8920 Randers NV</li>
          <li>Cvr. 40697156</li>
          <br></br>
          <li>+45 4265 5687</li>
          <li>Maria@noerhavefrisoer.dk</li>
        </ul>
      </section>
    </footer>
  );
};
export default Footer;
