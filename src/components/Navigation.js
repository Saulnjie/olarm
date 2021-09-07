import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="nav__responsive me-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#features">FEATURES</Nav.Link>
          <Nav.Link href="#pricing">PLANS</Nav.Link>
          <Nav.Link href="#pricing">MEET OLARM</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
