import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  console.log("cart : ", cart);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">Shopify</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/cart">Cart</Link>
            </Nav.Link>
            -
            <Nav.Link>
              <Link to="/cart">{cartCount}</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.allProducts.cart,
  };
};

export default connect(mapStateToProps)(Header);
