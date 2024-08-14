"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Poster from "./components/Poster";
import SearchBar from "./components/SearchBar";
import NowPlaying from "./components/NowPlaying";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import WatchList from "./components/WatchList";
import { SelectedContentTypes } from "@/types";
import { CiMenuFries } from "react-icons/ci";

const HomePage = () => {
  const [isMovie, setIsMovie] = useState(true);
  const [isTvShow, setIsTvShow] = useState(false);
  const [selected, setSelected] = useState<SelectedContentTypes>({});
  const handleMovie = () => {
    setIsMovie(true);
    setIsTvShow(false);
  };

  const handleTvShow = () => {
    setIsMovie(false);
    setIsTvShow(true);
  };

  return (
    <div className="py-3 px-md-5">
      <Container fluid>
        <Row>
          <Col md={12}>
            <Row>
              <Col
                md={9}
                className="px-4"
                style={{ paddingLeft: 0, paddingRight: 0 }}
              >
                <div className="d-flex justify-content-between align-content-center">
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

                  <div className="d-md-none">
                    <CiMenuFries />
                  </div>
                </div>

                <Poster
                  active={isMovie ? "movie" : "tv-show"}
                  selected={selected}
                  setSelected={setSelected}
                />
                <NowPlaying
                  active={isMovie ? "movie" : "tv-show"}
                  setSelected={setSelected}
                />
                <TopRated
                  active={isMovie ? "movie" : "tv-show"}
                  setSelected={setSelected}
                />
              </Col>
              <Col
                md={3}
                className="border-start ps-md-4 px-4 px-md-0"
                style={{ paddingLeft: 0, paddingRight: 0 }}
              >
                <SearchBar />
                <Popular active={isMovie ? "movie" : "tv-show"} />
                <WatchList />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
