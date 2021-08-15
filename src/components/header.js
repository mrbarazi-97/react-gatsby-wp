import React from "react"
//import * as headerStyles from "./header.module.css"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">React-Gatsby-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/projects">
            Ouer Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
