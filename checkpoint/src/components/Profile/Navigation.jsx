import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav} from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar  bg="secondary" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#name">Name</Nav.Link>
            <Nav.Link href="#address">Address</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation