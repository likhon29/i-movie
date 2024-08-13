"use client";
import { getLatestMovie } from "@/api";
import { getNowPlayingMovie } from "@/api/nowPlaying";
import assets from "@/assets";
import { makeImgUrl } from "@/utils";
import { CFormFloating } from "@coreui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomePage = () => {
  const [lasted, setLasted] = React.useState<{
    title: string | null;
    poster_path: string;
  } | null>(null);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setLoading(true);
    getLatestMovie()
      .then((data) => {
        setLasted(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getNowPlayingMovie()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  const url = makeImgUrl(lasted?.poster_path, "original");

  console.log(lasted);
  console.log(lasted?.poster_path, url);
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

                {isMovie ? (
                  <div>
                    <div
                      style={{
                        position: "relative",
                        backgroundImage: `url(${url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "300px",
                        color: "white",
                      }}
                    >
                      <Row className="h-100">
                        <Col
                          md={12}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          <div className="d-flex flex-column justify-content-center h-100 p-3">
                            <p className="text-muted">Season 10</p>
                            <h4>{lasted?.title}</h4>
                            <p className="text-muted">Action, Horor, Melody </p>
                            <div className="d-flex gap-2">
                              <Button variant="danger">Watch Now</Button>
                              <Button variant="secondary">+</Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
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
                          <div
                            style={{
                              width: "200px",
                              height: "300px",
                              backgroundColor: "gray",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "200px",
                              height: "300px",
                              backgroundColor: "gray",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "200px",
                              height: "300px",
                              backgroundColor: "gray",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "200px",
                              height: "300px",
                              backgroundColor: "gray",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "200px",
                              height: "300px",
                              backgroundColor: "gray",
                            }}
                          ></div>
                        </div>
                      </Col>
                    </Row>
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
                          <div
                            style={{
                              width: "300px",
                              height: "200px",
                              backgroundColor: "gray",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "300px",
                              height: "200px",
                              backgroundColor: "gray",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "300px",
                              height: "200px",
                              backgroundColor: "gray",
                            }}
                          ></div>
                        </div>
                      </Col>
                    </Row>{" "}
                  </div>
                ) : (
                  <div>
                    <h1>TV Show</h1>
                  </div>
                )}
              </Col>
              <Col
                md={3}
                className="border-start ps-4 "
                style={{ paddingLeft: 0, paddingRight: 0 }}
              >
                <Form className="d-flex">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Search" // &#xF002; is the Unicode for the search icon
                      aria-label="Search"
                      style={{
                        fontFamily: "Arial, FontAwesome",
                        paddingLeft: "",
                      }}
                    />
                    <InputGroup.Text className="bg-white border-0">
                      <FaSearch />
                    </InputGroup.Text>
                  </InputGroup>
                </Form>

                <div className="d-flex justify-content-between align-content-center mt-4 mb-2 ">
                  <h6 className=" ">Popular Movies</h6>

                  <HiOutlineDotsHorizontal />
                </div>

                <Row
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
                </Row>
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
