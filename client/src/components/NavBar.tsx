import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const NavBar: React.FC = (props) => {
  return (
    <div>
        <Navbar collapseOnSelect bg='light' expand="lg">
          <Navbar.Brand href="#">TERAKI</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='http://localhost:8000/admin'>Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavBar;