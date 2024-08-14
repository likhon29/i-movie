import React from "react";

const PrimaryLoader = () => {
  return (
    <div className="">
      {/* professional primary loader */}
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default PrimaryLoader;
