import React from "react";
import { useState } from "react";

import { Col, Row, ListGroupItem, FormControl } from "react-bootstrap";

// use like gloabal variable to export it to CartButton
const selectedQuantity = { qty: 1 };

const Quantity = ({ product }) => {
  const [qty, setQty] = useState(1);
  const quantity = product.countInStock;

  const updateQty = (e) => {
    selectedQuantity.qty = e.target.value;
    setQty(e.target.value);
  };

  return (
    <ListGroupItem>
      <Row>
        <Col>Qty</Col>
        <Col>
          <FormControl as="select" value={qty} onChange={updateQty}>
            {[...Array(quantity).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </FormControl>
        </Col>
      </Row>
    </ListGroupItem>
  );
};
export { selectedQuantity };
export default Quantity;
