import { React, useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Alert } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const NavBar = () => {
  const [error, setError] = useState(null);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (

    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/home">Web Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">
            <Nav.Link as={Link} to="/groupImages">Group Images</Nav.Link>
          </Nav>
          <NavDropdown title={"Signed in as: " + user.email} id="navbarScrollingDropdown" className="ms-auto">
            <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
            {error && <Alert variant="danger">{error}</Alert>}
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;
