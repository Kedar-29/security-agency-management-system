import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="header-navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <img 
            src="/images/logo1.png"
            alt="Tactical Panthers Logo"
            className="logo"
          />
        </div>
        
        <Nav className="nav-links">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/career">Career</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/contactus">Contact us</Nav.Link>
          <Nav.Link as={Link} to="/login">Admin</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
