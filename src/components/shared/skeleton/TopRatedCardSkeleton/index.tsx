import React from "react";
import { Col } from "react-bootstrap";

const TopRatedCardSkeleton = () => {
  return (
    <Col xs={12} sm={6} lg={4} className="mb-3">
      <div
        className="bg-light rounded"
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "#e0e0e0",
          animation: "pulse 1.5s infinite",
          position: "relative",
        }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{
            background:
              "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "loading 1.5s infinite",
          }}
        ></div>
      </div>
    </Col>
  );
};

export default TopRatedCardSkeleton;
