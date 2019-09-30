import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // <header className="container">
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/">NØRHAVE</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Forside</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/behandlinger">Behandlinger</NavLink>
          </NavItem>
          </Nav>
      </Collapse>
    </Navbar>
    // </header>
  );
};
export default Navigation