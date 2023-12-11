import React from "react";

const FormTemplet = ({ value }) => {
  return (
    <FormGroup controlId={value}>
      <FormLaSbel>Email Address</FormLaSbel>
      <FormControl
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></FormControl>
    </FormGroup>
  );
};

export default FormTemplet;
