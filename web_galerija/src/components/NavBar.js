import { React, useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Alert, Offcanvas } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import CreateJoinGroupForm from "./CreateJoinGroupForm";

const NavBar = ({collection, docID}) => {
  const [error, setError] = useState(null);
  const [showCanvas, setShowCanvas] = useState(false);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);

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
            <Nav.Link onClick={handleShow}>Groups</Nav.Link>
          </Nav>
          {user && <NavDropdown title={"Signed in as: " + user.email} id="navbarScrollingDropdown" className="ms-auto">
            <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
            {error && <Alert variant="danger">{error}</Alert>}
          </NavDropdown>}
        </Navbar.Collapse>
      </Container>

      <Offcanvas show={showCanvas} onHide={handleClose} scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Groups</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CreateJoinGroupForm collection={collection} docID={docID}/>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>

  );
}

export default NavBar;
