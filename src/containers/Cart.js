import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import CartItem from "./CartItem";

import { Col, Card, Row, Button, Image } from "react-bootstrap";
const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  console.log("cart : ", cart);
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <Row xs={12} className="g-12">
      <br></br>
      <Col xs={6} md={8}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Col>
      <Col xs={6} md={4}>
        <div>
          <h4>Cart Summary</h4>
          <div>
            <span>TOTAL: ({totalItems} items)</span>
            <span>$ {totalPrice}</span>
          </div>
          <br></br>
          <Button variant="primary">Proceed To Checkout</Button>
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.allProducts.cart,
  };
};

export default connect(mapStateToProps)(Cart);
