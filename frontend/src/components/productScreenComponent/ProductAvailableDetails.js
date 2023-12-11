import React from "react";
import { Col, Card, ListGroup } from "react-bootstrap";
import ProductAvailable from "./ProductAvailable";
import CartButton from "./CartButton";
import Quantity from "./Quantity";

const ProductAvailableDetails = ({ product }) => {
  return (
    <Col md={3}>
      <Card>
        <ListGroup variant="flush">
          <ProductAvailable heading={"Price"} value={product.price} />

          <ProductAvailable
            heading={"Status"}
            value={product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
          />
          {product.countInStock > 0 && <Quantity product={product} />}

          <CartButton countInStock={product.countInStock} />
        </ListGroup>
      </Card>
    </Col>
  );
};

export default ProductAvailableDetails;
