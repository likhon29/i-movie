import React from "react";

// Skeleton Loader component with animations
const PopularSkeletonLoader = () => (
  <div
    className="d-flex gap-3 my-3"
    style={{
      height: "100px",
      backgroundColor: "#e0e0e0",
      animation: "pulse 2s infinite",
      transition: "transform 0.5s ease-in-out",
      borderRadius: "8px",
    }}
  >
    <div
      style={{
        width: "60px",
        backgroundColor: "#ccc",
        borderRadius: "8px",
      }}
    />
    <div className="d-flex flex-column justify-content-center">
      <div
        style={{
          width: "150px",
          height: "20px",
          backgroundColor: "#ddd",
          marginBottom: "8px",
          borderRadius: "4px",
        }}
      />
      <div
        style={{
          width: "100px",
          height: "15px",
          backgroundColor: "#ddd",
          borderRadius: "4px",
        }}
      />
    </div>
  </div>
);

export default PopularSkeletonLoader;
