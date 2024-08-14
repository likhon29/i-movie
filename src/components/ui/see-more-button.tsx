import React from "react";
import { Button } from "react-bootstrap";

const SeeMore = ({
  setShowMore,
}: {
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Button
      className="w-100 text-uppercase  "
      onClick={() => setShowMore(true)}
      style={{
        height: "50px",
        backgroundColor: "#fde8ef",
        border: "none",
        fontWeight: "bold",
        color: "#e71d61",
      }}
    >
      See More
    </Button>
  );
};

export default SeeMore;
