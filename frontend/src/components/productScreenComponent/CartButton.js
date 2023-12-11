import React from "react";
import { ListGroupItem, Button, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { selectedQuantity } from "./Quantity";

const CartButton = (prop) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${selectedQuantity.qty}`);
  };

  return (
    <ListGroupItem>
      <Row>
        <Button
          onClick={addToCartHandler}
          className="btn-block"
          type="button"
          disabled={prop.countInStock === 0}
        >
          ADD TO CART
        </Button>
      </Row>
    </ListGroupItem>
  );
};

export default CartButton;
