import React from "react";

const PrimaryLoader = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full loader"></div>
      </div>
    </div>
  );
};

export default PrimaryLoader;
