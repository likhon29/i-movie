import { getPopularMovie, getPopularTvShow } from "@/api";
import { makeImgUrl } from "@/utils";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopRated = ({ active }: { active: string }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Row className="mt-3">
      <Col md={12}>
        <div className="d-flex justify-content-between align-content-center">
          <p className="my-2">Top Rated Movie</p>
          <div className="d-flex justify-content-center gap-1">
            <Button variant="light">
              <IoIosArrowBack />
            </Button>
            <Button variant="light">
              <IoIosArrowForward />
            </Button>
          </div>
        </div>

        <div className="d-flex gap-3">
          {data?.slice(0, 3)?.map(
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
                  key={index}
                  className="position-relative d-flex justify-content-center align-items-center"
                  style={{
                    width: "300px",
                    height: "150px",
                    backgroundColor: "gray",
                    // backgroundImage: `url(${imageUrl})`,
                    backgroundImage: `url(${makeImgUrl(
                      item?.poster_path,
                      "original"
                    )})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
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
