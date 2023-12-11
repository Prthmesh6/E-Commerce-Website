import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Row>
        <Col className="p-0">
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Products..."
            style={{ padding: "14px" }}
          ></Form.Control>
        </Col>
        <Col className="p-0">
          <Button type="submit" variant="outline-success">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
