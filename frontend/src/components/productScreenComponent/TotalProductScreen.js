import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import ProductDetails from "./ProductDetails";
import ProductAvailableDetails from "./ProductAvailableDetails";

const TotalProductScreen = ({ product }) => {
  return (
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>

      <ProductDetails product={product} />
      <ProductAvailableDetails product={product} />
    </Row>
  );
};

export default TotalProductScreen;
