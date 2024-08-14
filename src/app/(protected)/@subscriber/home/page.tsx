"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Poster from "./components/Poster";
import SearchBar from "./components/SearchBar";
import NowPlaying from "./components/NowPlaying";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import WatchList from "./components/WatchList";

export type SelectedContentTypes = {
  session?: string;
  title?: string;
  poster_path?: string;
  name?: string;
  last_episode_to_air?: {
    episode_number: number;
    name: string;
    season_number: number;
  } | null;
  genres?: { id: number; name: string }[];
};

export type SetSelectedContentTypes = React.Dispatch<
  React.SetStateAction<SelectedContentTypes>
>;

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
                className="border-start ps-4 "
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
