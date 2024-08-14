import {
  getMovieDetails,
  getNowPlayingMovie,
  getNowPlayingTvShow,
  getTvShowDetails,
} from "@/api";
import { handleLoadDetails, makeImgUrl } from "@/utils";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SetSelectedContentTypes } from "../page";
import AddButton from "@/components/ui/add-button";
import WatchButton from "@/components/ui/watch-button";

const NowPlaying = ({
  active,
  setSelected,
}: {
  active: string;
  setSelected: SetSelectedContentTypes;
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index of the swiper

  useEffect(() => {
    if (active === "movie") {
      setLoading(true);
      getNowPlayingMovie()
        .then((data) => {
          setData(data?.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    } else {
      getNowPlayingTvShow()
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

  // Skeleton Loader component with professional styling
  const SkeletonLoader = () => (
    <div
      className="position-relative bg-light rounded overflow-hidden"
      style={{
        width: "100%",
        height: "300px",
        backgroundColor: "#e0e0e0",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "1rem",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite",
        }}
      ></div>
      {/* Placeholder elements */}
      <div className="position-relative d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <div
          className="bg-secondary rounded"
          style={{
            width: "60%",
            height: "50%",
            marginBottom: "0.5rem",
          }}
        ></div>
        <div
          className="bg-secondary rounded"
          style={{
            width: "80%",
            height: "30%",
            marginBottom: "0.5rem",
          }}
        ></div>
        <div
          className="bg-secondary rounded"
          style={{
            width: "50%",
            height: "20%",
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <Row className="mt-3">
      <Col md={12}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="my-2">Now Playing</p>
          <div className="d-flex gap-2">
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
              disabled={currentIndex + 4 >= data.length || loading}
            >
              <IoIosArrowForward />
            </Button>
          </div>
        </div>

        {/* Display skeletons when loading */}
        <Row className="g-3">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Col key={index} xs={12} sm={6} lg={3}>
                  <SkeletonLoader />
                </Col>
              ))
            : data?.slice(currentIndex, currentIndex + 4)?.map(
                (
                  item: {
                    poster_path: string;
                  },
                  index
                ) => {
                  return (
                    <Col key={index} xs={12} sm={6} lg={3}>
                      <div
                        onClick={() =>
                          handleLoadDetails(item, active, setSelected)
                        }
                        className="position-relative bg-dark rounded overflow-hidden"
                        style={{
                          height: "300px",
                          backgroundImage: `url(${makeImgUrl(
                            item?.poster_path,
                            "original"
                          )})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.5s ease-in-out",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          className="position-absolute"
                          style={{
                            top: 10,
                            right: 10,
                          }}
                        >
                          <AddButton />
                        </div>

                        <div
                          className="position-absolute  w-100"
                          style={{
                            bottom: 10,
                            padding: "0 ",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <WatchButton />
                        </div>
                      </div>
                    </Col>
                  );
                }
              )}
        </Row>
      </Col>
    </Row>
  );
};

export default NowPlaying;
