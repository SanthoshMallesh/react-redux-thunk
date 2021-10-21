import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import { Col, Card, Row, Button, Image } from "react-bootstrap";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    dispatch(fetchProduct(id));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>
          <br></br>...Loading
        </div>
      ) : (
        <Row xs={12} className="g-12">
          <br></br>
          <Col xs={6} md={4}>
            <Image src={image} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Price: $ {price}
                <br></br>
                Category: {category}
                <br></br>
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetails;
