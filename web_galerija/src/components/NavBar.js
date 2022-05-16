import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LogIn } from './LogIn';
//import {Link} from "react-router-dom";

//<Link to="/LogIn"> LogIn </Link>


function NavBar() {
  return (
    
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Web Gallery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-5">
              <Nav.Link href="/">Group Images</Nav.Link>
              <Nav.Link href="/myimages">My Images</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/login" to="/login">Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
}

export default NavBar;
