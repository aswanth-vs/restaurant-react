import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <i className="fa-solid fa-utensils fa-fade"></i> Le Food
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
