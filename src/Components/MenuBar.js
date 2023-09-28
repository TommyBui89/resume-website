import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function MenuBar() {
  return (
    <Navbar expand="lg" className="bg-transparent" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0' }}>
      <Container fluid className="justify-content-center">
        <LinkContainer to="/home">
          <Navbar.Brand style={{ color: 'white', marginRight: 'auto', fontSize: '50px', fontWeight: 'bold' }}>Tommy Bui</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="ms-auto" style={{ marginRight: 'auto' }}>
            <LinkContainer to="/">
              <Nav.Link style={{ color: 'white', fontSize: '40px', padding: '5px 20px', fontWeight: 'bold' }}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/education">
              <Nav.Link style={{ color: 'white', fontSize: '40px', padding: '5px 20px', fontWeight: 'bold' }}>Education</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/skills">
              <Nav.Link style={{ color: 'white', fontSize: '40px', padding: '5px 20px', fontWeight: 'bold' }}>Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/experience">
              <Nav.Link style={{ color: 'white', fontSize: '40px', padding: '5px 20px', fontWeight: 'bold' }}>Experience</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link style={{ color: 'white', fontSize: '40px', padding: '5px 20px', fontWeight: 'bold' }}>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link style={{ color: 'white', fontSize: '40px', padding: '5px 20px', fontWeight: 'bold' }}>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;
