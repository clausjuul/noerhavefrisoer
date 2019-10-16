import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { TweenMax, Power2 } from "gsap";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

import BurgerIcon from './BurgerIcon/BurgerIcon';

const MobileNavLinkItem = props => {
  const { to, label, exact, isOpen, setIsOpen, i } = props;

  let linkRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      TweenMax.fromTo(
        linkRef,
        0.6,
        {
          opacity: 0,
          y: 8,
        },
        {
          delay: 0.25 + 0.1 * i,
          opacity: 1,
          y: 0,
          ease: Power2.easeOut,
          clearProps: "opacity, transform"
        }
      );
    }
    // eslint-disable-next-line
  }, [isOpen]);

  return (
    <li
      ref={el => (linkRef = el)}
      className="mobile-navbar__item"
      // style={{ opacity: 0 }}
    >
      <NavLink
        onClick={() => setIsOpen(false)}
        to={to}
        exact={exact ? true : false}
      >
        {label}
      </NavLink>
    </li>
  );
};

const NavbarMobile = ({navData}) => {

  const [isOpen, setIsOpen] = useState(false);
  let navbarRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      TweenMax.to(navbarRef, 0.35, {
        autoAlpha: 1,
        ease: Power2.easeInOut,
        clearProps: "opacity, visibility"
      });
      disableBodyScroll(document.body);
    } else {
      TweenMax.to(navbarRef, 0.2, {
        autoAlpha: 0,
        ease: Power2.easeInOut
      });
      enableBodyScroll(document.body);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen, navbarRef]);

  return (
    <header className="mobile-nav-wrapper">
      <div className="topbar" />
      <nav className="mobile-nav">
        <ul className="mobile-nav__logo">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <h1>
                NØRHAVE
                <span>frisør</span>
              </h1>
            </Link>
          </li>
        </ul>
        <ul
          className="mobile-navbar"
          ref={el => (navbarRef = el)}
          style={{ opacity: 0 }}
        >
          {navData.map(({ to, label, exact }, i) => (
            <MobileNavLinkItem
              key={`link-${label}`}
              to={to}
              label={label}
              exact={exact}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              i={i}
            />
          ))}
        </ul>
        <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
}
export default NavbarMobile;