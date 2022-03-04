import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import "./style.scss";

const NavbarC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-wrapper">
      <Navbar className="container py-4" dark expand="md">
        <Link to="/" className="text-white" style={{fontSize:"22px"}}>
          LUXURYHOTEL
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse
          className="justify-content-end text-white"
          isOpen={isOpen}
          navbar
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                activeClassName="active"
                to="/"
                exact
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="active"
                to="/rooms"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Room
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/blogs"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="active"
                to="/about"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="active"
                to="/contact"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/booking"
                className="btn-outline nav-link"
                style={{ textDecoration: "none" }}
              >
                Book Now
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default NavbarC;
