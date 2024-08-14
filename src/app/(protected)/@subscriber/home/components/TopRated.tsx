import { getPopularMovie, getPopularTvShow } from "@/api";
import { makeImgUrl } from "@/utils";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SetSelectedContentTypes } from "../page";

const TopRated = ({
  active,
  setSelected,
}: {
  active: string;
  setSelected: SetSelectedContentTypes;
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index for swiping

  useEffect(() => {
    if (active === "movie") {
      setLoading(true);
      getPopularMovie()
        .then((data) => {
          setData(data?.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    } else {
      getPopularTvShow()
        .then((data) => {
          setData(data?.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    }
  }, [active]);

  // Function to handle the next arrow click
  const handleNext = () => {
    if (currentIndex + 3 < data.length) {
      setCurrentIndex(currentIndex + 3); // Move to the next set of items
    }
  };

  // Function to handle the previous arrow click
  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3); // Move back to the previous set of items
    }
  };

  // Skeleton Loader component with animations and transitions
  const SkeletonLoader = () => (
    <div
      className="position-relative d-flex justify-content-center align-items-center bg-light rounded"
      style={{
        width: "300px",
        height: "150px",
        backgroundColor: "#e0e0e0",
        animation: "pulse 2s infinite",
        transition: "transform 0.5s ease-in-out", // Smooth transition
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
      <div className="skeleton-button">
        <Button
          variant="light"
          className="position-absolute rounded-circle"
          style={{
            top: 10,
            right: 10,
            width: "40px",
            height: "40px",
            border: "none",
            backgroundColor: "#e0e0e0",
          }}
          disabled
        ></Button>
      </div>
    </div>
  );

  return (
    <Row className="mt-3">
      <Col md={12}>
        <div className="d-flex justify-content-between align-content-center">
          <p className="my-2">
            Top Rated {active === "movie" ? "Movies" : "TV Shows"}
          </p>
          <div className="d-flex justify-content-center gap-1">
            <Button
              variant="light"
              onClick={handlePrev}
              disabled={currentIndex === 0 || loading}
            >
              <IoIosArrowBack />
            </Button>
            <Button
              variant="light"
              onClick={handleNext}
              disabled={currentIndex + 3 >= data.length || loading}
            >
              <IoIosArrowForward />
            </Button>
          </div>
        </div>

        {/* Display skeletons when loading */}
        <div className="d-flex gap-3 overflow-hidden">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            : data?.slice(currentIndex, currentIndex + 3)?.map(
                (
                  item: {
                    title: string;
                    name: string;
                    poster_path: string;
                  },
                  index
                ) => {
                  return (
                    <div
                      onClick={() => setSelected(item)}
                      key={index}
                      className="position-relative d-flex justify-content-center align-items-center"
                      style={{
                        width: "300px",
                        height: "150px",
                        backgroundColor: "gray",
                        backgroundImage: `url(${makeImgUrl(
                          item?.poster_path,
                          "original"
                        )})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s ease-in-out", // Smooth transition for swiper effect
                      }}
                    >
                      <div
                        className="position-absolute   d-flex flex-column gap-2"
                        style={{
                          bottom: 0,
                          left: "10px",
                        }}
                      >
                        <p className="text-white">
                          {item?.title || item?.name}{" "}
                          <span className="text-secondary">(2018)</span>{" "}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
        </div>
      </Col>
    </Row>
  );
};

export default TopRated;
