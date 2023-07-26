import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-light shadow py-3 fixed-top">
        <Container className='justify-content-evenly'>
          <div>
            <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about-section">About</Nav.Link>
                <Nav.Link href="#projects-section">Projects</Nav.Link>
                <Nav.Link href="#skills-section">Skills</Nav.Link>
                <Nav.Link href="#contacts-section">Contacts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          
          
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar