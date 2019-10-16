import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavDesktopLinkItem = ({ to, label, exact }) => (
  <li className="navbar__item">
    <NavLink to={to} exact={exact ? true : false}>
      {label}
    </NavLink>
  </li>
);

const NavbarDesktop = ({navData}) => (
  <header className="nav-wrapper">
    <div className="topbar" />
    <nav className="nav">
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
        {navData.map(({ to, label, exact }) => (
          <NavDesktopLinkItem
            key={`link-${label}`}
            to={to}
            label={label}
            exact={exact}
          />
        ))}
      </ul>
    </nav>
  </header>
);
export default NavbarDesktop;