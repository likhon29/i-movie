"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Poster from "./components/Poster";
import SearchBar from "./components/SearchBar";
import NowPlaying from "./components/NowPlaying";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import WatchList from "./components/WatchList";

export type SelectedContentTypes = {
  title?: string;
  poster_path?: string;
  name?: string;
};

export type SetSelectedContentTypes = React.Dispatch<
  React.SetStateAction<SelectedContentTypes>
>;

const SubscriberHomePage = () => {
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
    <div className="py-3 px-5">
      <Container fluid>
        <Row>
          {/* Second Column */}
          <Col
            md={9}
            className="px-4"
            style={{ paddingLeft: 0, paddingRight: 0, position: "relative" }}
          >
            <div className="d-flex gap-4 mb-4">
              <p
                className={`cursor-pointer ${
                  isMovie ? "text-black fw-semibold" : "text-muted"
                }`}
                onClick={handleMovie}
                style={{ cursor: "pointer" }}
              >
                Movie
              </p>
              <p
                className={`cursor-pointer ${
                  isTvShow ? "text-black fw-semibold" : "text-muted"
                }`}
                onClick={handleTvShow}
                style={{ cursor: "pointer" }}
              >
                TV Show
              </p>
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
          {/* Third Column */}
          <Col
            md={3}
            className="border-start ps-4"
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <div className="d-flex flex-column h-100">
              <div className="overflow-auto" style={{ flex: "1 1 auto" }}>
                <SearchBar />
                <Popular active={isMovie ? "movie" : "tv-show"} />
                <WatchList />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubscriberHomePage;
