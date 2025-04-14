import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { BsCart3, BsSun, BsMoon } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom"; 
import "./Navigation.css"; 

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search query
    console.log(searchQuery);
  };

  return (
    <Navbar expand="lg" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} className="shadow-sm" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">☕ Ideal Café</Navbar.Brand>
        <Navbar.Toggle aria-controls="cafe-navbar" />
        <Navbar.Collapse id="cafe-navbar">
          <Nav className="me-auto d-flex gap-3">
            <Nav.Link as={NavLink} to="/" activeClassName="active">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/menu" activeClassName="active">Menu</Nav.Link>
            <Nav.Link as={NavLink} to="/Cart" activeClassName="active">Cart</Nav.Link>
            <Nav.Link as={NavLink} to="/Offers" activeClassName="active">Offers</Nav.Link>
            <Nav.Link as={NavLink} to="/Contactus" activeClassName="active">Contact Us</Nav.Link>
            <Nav.Link href="#">Sign In</Nav.Link>
          </Nav>

          <Form className="d-flex me-3" onSubmit={handleSearchSubmit}>
            <FormControl
              type="search"
              placeholder="Search 🍨"
              className="me-2"
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">Search</Button>
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
