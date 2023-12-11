import React from "react";
import { Row, Col, ListGroupItem } from "react-bootstrap";

const ProductAvailable = (prop) => {
  return (
    <ListGroupItem>
      <Row>
        <Col>{prop.heading} : </Col>
        <Col>
          <strong>{prop.value}</strong>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default ProductAvailable;
