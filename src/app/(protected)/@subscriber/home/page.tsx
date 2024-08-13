"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Poster from "./components/Poster";
import SearchBar from "./components/SearchBar";
import NowPlaying from "./components/NowPlaying";
import TopRated from "./components/TopRated";

const HomePage = () => {
  const [isMovie, setIsMovie] = useState(true);
  const [isTvShow, setIsTvShow] = useState(false);

  const handleMovie = () => {
    setIsMovie(true);
    setIsTvShow(false);
  };

  const handleTvShow = () => {
    setIsMovie(false);
    setIsTvShow(true);
  };

  return (
    <div className="py-3 px-5">
      <Container fluid>
        <Row>
          <Col md={12}>
            <Row>
              <Col
                md={9}
                className="px-4"
                style={{ paddingLeft: 0, paddingRight: 0 }}
              >
                <div className="d-flex gap-4 ">
                  <p
                    className={`cursor-pointer${
                      isMovie
                        ? "text-black fw-semibold cursor-pointer "
                        : "text-muted"
                    } `}
                    onClick={handleMovie}
                    style={{ cursor: "pointer" }}
                  >
                    Movie
                  </p>
                  <p
                    className={`${
                      isTvShow ? "text-black fw-semibold  " : "text-muted"
                    } `}
                    onClick={handleTvShow}
                    style={{ cursor: "pointer" }}
                  >
                    TV Show
                  </p>
                </div>

                <Poster active={isMovie ? "movie" : "tv-show"} />
                <NowPlaying active={isMovie ? "movie" : "tv-show"} />
                <TopRated active={isMovie ? "movie" : "tv-show"} />
              </Col>
              <Col
                md={3}
                className="border-start ps-4 "
                style={{ paddingLeft: 0, paddingRight: 0 }}
              >
                <SearchBar />
                <div className="d-flex justify-content-between align-content-center mt-4 mb-2 ">
                  <h6 className=" ">Popular Movies</h6>

                  <HiOutlineDotsHorizontal />
                </div>

                {/* <Row
                  className="mt-3"
                  style={{
                    padding: 0,
                  }}
                >
                  <Col md={12} className="mb-3">
                    <div
                      className="d-flex gap-3"
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                      }}
                    >
                      <Image
                        src={makeImgUrl(lasted?.poster_path, "original")}
                        width={80}
                        height={100}
                        alt="lasted"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          paddingLeft: 0,
                          paddingRight: 0,
                        }}
                      />
                      <div className="py-1">
                        <div
                          className="d-flex justify-content-between align-content-center gap-4 w-full "
                          style={{
                            fontSize: ".8rem",
                          }}
                        >
                          <p className="fw-semibold">
                            {lasted?.title?.length ?? 0 > 15
                              ? lasted?.title?.slice(0, 15) + ""
                              : lasted?.title}
                          </p>
                          <p>PG-13</p>
                        </div>
                        <p
                          className="text-muted"
                          style={{
                            fontSize: ".8rem",
                          }}
                        >
                          Action, Horor
                        </p>
                        <div
                          className="rating"
                          style={{
                            padding: 0,
                          }}
                        >
                          <input type="radio" name="rating" value="5" id="5" />
                          <label htmlFor="5">☆</label>{" "}
                          <input type="radio" name="rating" value="4" id="4" />
                          <label htmlFor="4">☆</label>{" "}
                          <input type="radio" name="rating" value="3" id="3" />
                          <label htmlFor="3">☆</label>{" "}
                          <input type="radio" name="rating" value="2" id="2" />
                          <label htmlFor="2">☆</label>{" "}
                          <input type="radio" name="rating" value="1" id="1" />
                          <label htmlFor="1">☆</label>{" "}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} className="">
                    <div
                      className="d-flex gap-3"
                      style={{
                        overflow: "hidden",
                        paddingLeft: 0,
                        paddingRight: 0,
                      }}
                    >
                      <Image
                        src={makeImgUrl(lasted?.poster_path, "original")}
                        width={80}
                        height={100}
                        alt="lasted"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          paddingLeft: 0,
                          paddingRight: 0,
                        }}
                      />
                      <div className="py-1">
                        <div
                          className="d-flex justify-content-between align-content-center gap-4 w-full "
                          style={{
                            fontSize: ".8rem",
                          }}
                        >
                          <p className="fw-semibold">
                            {lasted?.title?.length ?? 0 > 15
                              ? lasted?.title?.slice(0, 15) + ""
                              : lasted?.title}
                          </p>
                          <p>PG-13</p>
                        </div>
                        <p
                          className="text-muted"
                          style={{
                            fontSize: ".8rem",
                          }}
                        >
                          Action, Horor
                        </p>
                        <div
                          className="rating"
                          style={{
                            padding: 0,
                          }}
                        >
                          <input type="radio" name="rating" value="5" id="5" />
                          <label htmlFor="5">☆</label>{" "}
                          <input type="radio" name="rating" value="4" id="4" />
                          <label htmlFor="4">☆</label>{" "}
                          <input type="radio" name="rating" value="3" id="3" />
                          <label htmlFor="3">☆</label>{" "}
                          <input type="radio" name="rating" value="2" id="2" />
                          <label htmlFor="2">☆</label>{" "}
                          <input type="radio" name="rating" value="1" id="1" />
                          <label htmlFor="1">☆</label>{" "}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row> */}
                <Row className=""></Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
