import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <Navbar className="container-fluid sticky-top" 
              collapseOnSelect 
              expand="lg" 
              bg="dark" 
              variant="dark" 
              fixed-top="true">
        <Navbar.Brand className="mr-auto" >
          <Link 
              to ="/home"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              duration={500}
              offset = {-100}>

              <img src="./img/Logo.png" 
                  width="160px" 
                  className="d-inline-block align-top" 
                  alt="logo of the TechSup"/>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ml-auto" fluid="true">
          <Link 
            to ="TechSup"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            duration={500}
            offset = {-90}
            >
            About
          </Link>
          <Link 
            to ="portfolio"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            duration={500}
            offset = {-90}
            >
            Portfolio
          </Link>
          <Link 
            to ="services"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            duration={500}
            offset = {-90}
            >
            Services
          </Link>
          <Link 
            to ="contact"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            duration={500}
            offset = {-90}
            >
            Contact Us
          </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
 }

export default Header;
