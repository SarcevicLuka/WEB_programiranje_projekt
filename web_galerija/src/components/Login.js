import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container, Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

function LogIn() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user])
    return (
      <>
      <Container style={{maxWidth: "400px"}}>
        <div className="p-4 box">
          <h2 className="mb-3 text-center">Log In</h2>
          {error && <Alert variant="danger" className="text-center">Wrong e-mail or password</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
            </div>
          </Form>
          <hr />
        </div>
        <div className="p-4 box text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </Container>
    </>
    )
}
export default LogIn;
  
