import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from "react-bootstrap";
import { BsCart3, BsSun, BsMoon } from "react-icons/bs";
import "./Navigation.css"; // You can optionally create this for custom styles

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
  };

  return (
    <Navbar expand="lg" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} className="shadow-sm" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold fs-4">☕ Ideal Café</Navbar.Brand>
        <Navbar.Toggle aria-controls="cafe-navbar" />
        <Navbar.Collapse id="cafe-navbar">
          <Nav className="me-auto d-flex gap-3">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Menu</Nav.Link>
            <Nav.Link href="#">Offers</Nav.Link>
            <Nav.Link href="#">Locations</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
            <Nav.Link href="#">Sign In</Nav.Link>
          </Nav>

          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search 🍨"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Button variant={darkMode ? "outline-light" : "outline-dark"} className="me-2">
            <BsCart3 size={20} />
          </Button>

          <Button variant={darkMode ? "outline-light" : "outline-dark"} onClick={toggleTheme}>
            {darkMode ? <BsSun /> : <BsMoon />}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
