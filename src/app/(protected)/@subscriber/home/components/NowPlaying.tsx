import { getNowPlayingMovie, getNowPlayingTvShow } from "@/api";
import { makeImgUrl } from "@/utils";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NowPlaying = ({ active }: { active: string }) => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Row className="mt-3">
      <Col md={12}>
        <div className="d-flex justify-content-between align-content-center">
          <p className="my-2">Now Playing</p>
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
          {data?.slice(0, 4)?.map(
            (
              item: {
                poster_path: string;
              },
              index
            ) => {
              return (
                <div
                  key={index}
                  className="position-relative d-flex justify-content-center align-items-center"
                  style={{
                    width: "200px",
                    height: "300px",
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
                  <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column gap-2">
                    <Button variant="primary" className="w-100">
                      Button 1
                    </Button>
                    <Button variant="secondary" className="w-100">
                      Button 2
                    </Button>
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

export default NowPlaying;
