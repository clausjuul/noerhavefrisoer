import React from "react";
import { NavLink, Link } from "react-router-dom";
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

import { MenuIcon } from '../Icons/Icons';
import './Navigation.scss';

// TODO topbar med nr email mere?

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
    to: "/om-mig",
    label: "Om salonen",
    exact: false
  },
]

const NavLinkItem = ({ to, label, exact }) => {
  return (
    <li className="navbar__item">
      <NavLink to={to} exact={exact ? true : false} >
        { label }
      </NavLink>
    </li>
  )
}

const Navigation = () => {

  return (
    <div className="nav-wrapper">
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
          {NavData.map(({ to, label, exact }) => (
            <NavLinkItem
              key={`link-${label}`}
              to={to}
              label={label}
              exact={exact}
            />
          ))}
        </ul>
        <ul className="mobile-menu">
          <li>
            <MenuIcon />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation