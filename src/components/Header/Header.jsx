import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const Header = ({ handleShow }) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Contact Book</Navbar.Brand>
        <Button variant="outline-dark" onClick={handleShow}>
          Add
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
