import React from "react";
import { NavLink, Link } from "react-router-dom";
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

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
    label: "Om mig",
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
    <nav className="nav">
      <ul className="nav__logo">
        <li>
          <Link to="/">NØRHAVE</Link>
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
    </nav>
  );
};
export default Navigation