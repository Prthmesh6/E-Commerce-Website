import { ListGroup, Col, ListGroupItem } from "react-bootstrap";
import Rating from "../Rating";

import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <Col md={3}>
      <ListGroup variant="flush">
        <ListGroupItem style={{ borderBottomWidth: 0 }}>
          <h3>{product.name}</h3>
        </ListGroupItem>

        <ListGroupItem style={{ borderBottomWidth: 0 }}>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </ListGroupItem>

        <ListGroupItem style={{ borderBottomWidth: 0 }}>
          Price: ${product.price}
        </ListGroupItem>
        <ListGroupItem style={{ borderBottomWidth: 0 }}>
          Description: {product.description}
        </ListGroupItem>
      </ListGroup>
    </Col>
  );
};

export default ProductDetails;
