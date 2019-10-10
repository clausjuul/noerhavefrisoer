import React from "react";

import { FacebookIcon, InstagramIcon } from '../Icons/Icons';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <ul className="footer__opening-hours">
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
            <div className="small bold">Ulige uger</div>
          </li>
          <li>08:00 - 13:00</li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/noerhave_frisoer-104218320987789/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social--icon"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/noerhave_frisoer/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social--icon"
          >
            <InstagramIcon />
          </a>
        </div>
        <ul className="footer__contacts">
          <li className="bold">Maria Louise Nørhave</li>
          <li>Gl. Hobrovej 59</li>
          <li>8920 Randers NV</li>
          <li>Cvr. 40697156</li>
          <br></br>
          <li className="bold">+45 4265 5687</li>
          <li className="bold">Maria@noerhavefrisoer.dk</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
