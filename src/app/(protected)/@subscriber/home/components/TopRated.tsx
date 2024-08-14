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

  if (loading) {
    return <div>Loading...</div>;
  }

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
              disabled={currentIndex === 0}
            >
              <IoIosArrowBack />
            </Button>
            <Button
              variant="light"
              onClick={handleNext}
              disabled={currentIndex + 3 >= data.length}
            >
              <IoIosArrowForward />
            </Button>
          </div>
        </div>

        <div className="d-flex gap-3 overflow-hidden">
          {data?.slice(currentIndex, currentIndex + 3)?.map(
            (
              item: {
                title: any;
                name: any;
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
