import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Cart from "./Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/DAWProject/">Magazin Telefoane</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/DAWProject/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/DAWProject/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/DAWProject/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/DAWProject/cart">
              Coșul Meu
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/DAWProject/login">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/DAWProject/" element={<Home addToCart={addToCart} />} />
        <Route path="/DAWProject/about" element={<About />} />
        <Route path="/DAWProject/contact" element={<Contact />} />
        <Route path="/DAWProject/login" element={<Login />} />
        <Route
          path="/DAWProject/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
