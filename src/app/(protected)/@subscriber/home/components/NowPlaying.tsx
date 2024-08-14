import {
  getMovieDetails,
  getNowPlayingMovie,
  getNowPlayingTvShow,
  getTvShowDetails,
} from "@/api";
import { handleLoadDetails, makeImgUrl } from "@/utils";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AddButton from "@/components/ui/add-button";
import WatchButton from "@/components/ui/watch-button";
import { SetSelectedContentTypes } from "@/types";
import NowPlayingSkeletonLoader from "@/components/shared/skeleton/NowPlayingCardSkeleton";
import NowPlayingCard from "./NowPlayingCard";
import SwiperNavigator from "@/components/shared/swiper-navigator";

const NowPlaying = ({
  active,
  setSelected,
}: {
  active: string;
  setSelected: SetSelectedContentTypes;
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index of the swiper

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

  return (
    <Row className="mt-3">
      <Col md={12}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="my-2">Now Playing</p>
          <SwiperNavigator
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            data={data}
            loading={loading}
          />
        </div>

        {/* Display skeletons when loading */}
        <Row className="g-3">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Col key={index} xs={12} sm={6} lg={3}>
                  <NowPlayingSkeletonLoader />
                </Col>
              ))
            : data?.slice(currentIndex, currentIndex + 4)?.map(
                (
                  item: {
                    poster_path: string;
                  },
                  index
                ) => {
                  return (
                    <NowPlayingCard
                      key={index}
                      item={item}
                      active={active}
                      setSelected={setSelected}
                    />
                  );
                }
              )}
        </Row>
      </Col>
    </Row>
  );
};

export default NowPlaying;
