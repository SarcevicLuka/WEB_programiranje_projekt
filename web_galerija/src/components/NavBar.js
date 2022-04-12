import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Web Gallery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-5">
              <Nav.Link href="#home">Group Images</Nav.Link>
              <Nav.Link href="#link">My Images</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#sign-out">Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
}

export default NavBar;
