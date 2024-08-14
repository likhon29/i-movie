import { getNowPlayingMovie, getNowPlayingTvShow } from "@/api";
import { makeImgUrl } from "@/utils";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SetSelectedContentTypes } from "../page";

const NowPlaying = ({
  active,
  setSelected,
}: {
  active: string;

  setSelected: SetSelectedContentTypes;
}) => {
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
                  onClick={() => setSelected(item)}
                  key={index}
                  className="position-relative d-flex justify-content-center align-items-center"
                  style={{
                    width: "220px",
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
                  <Button
                    variant="secondary"
                    className="position-absolute w-20 "
                    style={{
                      top: 0,
                      right: 0,
                      margin: "10px  10px",
                    }}
                  >
                    +
                  </Button>
                  <div
                    className="position-absolute  "
                    style={{
                      bottom: 0,
                      //   right: 0,
                      margin: "10px  0",
                    }}
                  >
                    <Button variant="danger" className="  text-white w-100 ">
                      WATCH NOW
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
