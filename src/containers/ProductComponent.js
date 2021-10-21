import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/actions/productsActions";
import { connect } from "react-redux";
import { Col, Card, Button } from "react-bootstrap";

const ProductComponent = ({ addToCart }) => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("product: ", products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Col sm={3}>
        <br></br>
        <Card style={{ width: "18rem" }} key={id}>
          <Card.Img variant="top" src={image} style={{ height: "300px" }} />
          <Card.Body>
            <Card.Title style={{ height: "70px" }}>{title}</Card.Title>
            <Card.Text>
              Price: $ {price}
              <br></br>
              Category: {category}
              <br></br>
            </Card.Text>
            <Button variant="primary" onClick={() => addToCart(product.id)}>
              Add to Cart
            </Button>
            <Link to={`/product/${id}`}>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="visible content">View Item</div>
              </div>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return <>{renderList}</>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProductComponent);
