import React from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SwiperNavigator = ({
  setCurrentIndex,
  currentIndex,
  data,
  loading,
}: {
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
  data: any[];
  loading: boolean;
}) => {
  // Function to handle the next arrow click
  const handleNext = () => {
    if (currentIndex + 4 < data.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  // Function to handle the previous arrow click
  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };
  return (
    <div className="d-flex gap-2">
      <Button
        variant="light"
        onClick={handlePrev}
        disabled={currentIndex === 0 || loading}
        style={{
          padding: "0.5rem 0.75rem",
          borderRadius: "50%",
          border: "1px solid #e0e0e0",
        }}
      >
        <IoIosArrowBack />
      </Button>
      <Button
        variant="light"
        onClick={handleNext}
        disabled={currentIndex + 4 >= data.length || loading}
        style={{
          padding: "0.5rem 0.75rem",
          borderRadius: "50%",
          border: "1px solid #e0e0e0",
        }}
      >
        <IoIosArrowForward />
      </Button>
    </div>
  );
};

export default SwiperNavigator;
