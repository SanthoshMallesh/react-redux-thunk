import React, { useState } from "react";
import { connect } from "react-redux";

import {
  adjustItemQty,
  removeFromCart,
} from "../redux/actions/productsActions";

import { Col, Card, Row, Button, Image } from "react-bootstrap";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <>
      <Row xs={12} className="g-12">
        <Col xs={6} md={6}>
          <Image src={item.image} thumbnail style={{ height: "250px" }} />
        </Col>
        <Col xs={6} md={6}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              Price: $ {item.price}
              <br></br>
              Category: {item.category}
              <br></br>
            </Card.Text>
            <div>
              <label htmlFor="qty">Qty : </label>
              <input
                min="1"
                type="number"
                id="qty"
                name="qty"
                value={input}
                onChange={onChangeHandler}
              />
            </div>
            <br></br>
            <Button variant="danger" onClick={() => removeFromCart(item.id)}>
              Delete
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
