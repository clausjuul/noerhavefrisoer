import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { TweenMax, Power2 } from "gsap";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

import { MenuIcon } from '../Icons/Icons';
import './Navigation.scss';

const NavData = [
  {
    to: "/",
    label: "Velkommen",
    exact: true
  },
  {
    to: "/booking",
    label: "Booking",
    exact: false
  },
  {
    to: "/behandlinger",
    label: "Behandlinger",
    exact: false
  },
  {
    to: "/om-salonen",
    label: "Om salonen",
    exact: false
  },
  {
    to: "/test",
    label: "test",
    exact: false
  },
]

const NavLinkItem = (props) => {
  const { to, label, exact } = props;
  return (
    <li className="navbar__item">
      <NavLink to={to} exact={exact ? true : false} >
        {label}
      </NavLink>
    </li>
  )
}

const Navbar = () => {
  return (
    <>
      <ul className="nav__logo">
        <li>
          <Link to="/">
            <h1>
              NØRHAVE
              <span>frisør</span>
            </h1>
          </Link>
        </li>
      </ul>
      <ul className="navbar">
        {NavData.map(({ to, label, exact }) => (
          <NavLinkItem
            key={`link-${label}`}
            to={to}
            label={label}
            exact={exact}
            isMobile={false}
          />
        ))}
      </ul>
    </>
  );
}

const MobileNavLinkItem = (props) => {
  const { to, label, exact, isOpen, setIsOpen, i } = props;

  let linkRef = useRef(null)

  useEffect(() => {
    if(linkRef) {
      if(isOpen) {
        TweenMax.to(linkRef, 0.6, {
          delay: (0.3 + 0.15 * i),
          autoAlpha: 1,
          y: 0,
          ease: Power2.easeInOut
        });
      } else {
        TweenMax.to(linkRef, 0.3, {
          // delay: 0.3 + 0.15 * i,
          autoAlpha: 0,
          y: 5,
          ease: Power2.easeInOut
        });
      }
    }
  }, [isOpen, linkRef]);

  return (
    <li
      ref={element => (linkRef = element)}
      className="mobile-navbar__item"
      style={{ opacity: 0 }}
    >
      <NavLink onClick={() => setIsOpen(false)} to={to} exact={exact ? true : false}>
        {label}
      </NavLink>
    </li>
  );
}

const NavbarMobile = () => {

  const [isOpen, setIsOpen] = useState(false);
  let navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef) {
      if (isOpen) {
        TweenMax.to(navbarRef, 0.6, {
          autoAlpha: 1,
          ease: Power2.easeInOut
        });
        disableBodyScroll(document.body);
      } else {
        TweenMax.to(navbarRef, 0.3, {
          autoAlpha: 0,
          ease: Power2.easeInOut
        });
        enableBodyScroll(document.body);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen, navbarRef]);

  return (
    <>
      <ul className="mobile-nav__logo">
        <li>
          <Link onClick={() => setIsOpen(false)} to="/">
            <h1>
              NØRHAVE
              <span>frisør</span>
            </h1>
          </Link>
        </li>
      </ul>
      <ul
        className="mobile-navbar"
        ref={element => (navbarRef = element)}
        style={{ opacity: 0, visibility: "collapse" }}
      >
        {NavData.map(({ to, label, exact }, i) => (
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

      <ul
        className="mobile-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <li className="burger-menu">
          <MenuIcon isOpen={isOpen} />
        </li>
      </ul>
    </>
  );
}

const Navigation = (props) => {
  const { isMobile } = props;

  return (
    <header className={isMobile ? "nav-wrapper" : "mobile-nav-wrapper"}>
      <div className="topbar" />
      <nav className={isMobile ? "nav" : "mobile-nav"}>
        {isMobile && <Navbar />}
        {!isMobile && <NavbarMobile />}
      </nav>
    </header>
  );
};
export default Navigation