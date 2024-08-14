import React from "react";
import { Button } from "react-bootstrap";

const AddButton = () => {
  return (
    <Button
      variant="secondary"
      style={{
        backgroundColor: "rgba(128, 128, 128, 0.7)",
        border: "none",
      }}
    >
      +
    </Button>
  );
};

export default AddButton;
