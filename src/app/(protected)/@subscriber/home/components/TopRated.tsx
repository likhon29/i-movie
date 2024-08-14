import { getPopularMovie, getPopularTvShow } from "@/api";
import { handleLoadDetails, makeImgUrl } from "@/utils";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SelectedContentTypes, SetSelectedContentTypes } from "../page";

const TopRated = ({
  active,
  setSelected,
}: {
  active: string;
  setSelected: SetSelectedContentTypes;
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    if (active === "movie") {
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

  const handleNext = () => {
    if (currentIndex + 3 < data.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const SkeletonLoader = () => (
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

  return (
    <Row className="mt-3">
      <Col md={12}>
        <div className="d-flex justify-content-between align-items-center mb-3">
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

        <Row>
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            : data
                ?.slice(currentIndex, currentIndex + 3)
                ?.map((item: SelectedContentTypes, index) => (
                  <Col
                    key={index}
                    xs={12}
                    sm={6}
                    lg={4}
                    className="position-relative mb-3"
                    onClick={() => handleLoadDetails(item, active, setSelected)}
                  >
                    <div
                      className=" bg-dark rounded overflow-hidden"
                      style={{
                        height: "200px",
                        backgroundImage: `url(${makeImgUrl(
                          item?.poster_path,
                          "original"
                        )})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s ease-in-out",
                      }}
                    >
                      <div
                        className="position-absolute text-white d-flex flex-column"
                        style={{ bottom: "10px", left: "30px" }}
                      >
                        <p className="mb-0">{item?.title || item?.name}</p>
                        <span
                          className=""
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#b7b7a4",
                          }}
                        >
                          (2018)
                        </span>
                      </div>
                    </div>
                  </Col>
                ))}
        </Row>
      </Col>
    </Row>
  );
};

export default TopRated;
