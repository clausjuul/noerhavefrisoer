import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const Navigation = () => {

  return (
    // <header className="container">
      <Navbar className="container-fluid" bg="light" expand="lg">
        <Navbar.Brand href="/">HØRHAVE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/"> */}
            <NavLink to="/" className="nav-link">
              Forside
            </NavLink>
            {/* </Nav.Link> */}

            <NavLink to="/kontakt" className="nav-link">
              Kontakt
            </NavLink>
            <NavLink to="/behandlinger" className="nav-link">
              Behandlinger
            </NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    // </header>
  );
};
export default Navigation