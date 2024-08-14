import { getPopularMovie, getPopularTvShow } from "@/api";
import { SelectedContentTypes, SetSelectedContentTypes } from "@/types";
import React, { useEffect, useState } from "react";
import TopRatedCard from "./TopRatedCard";
import SwiperNavigator from "@/components/shared/swiper-navigator";
import TopRatedCardSkeleton from "@/components/shared/skeleton/TopRatedCardSkeleton";
import { Col, Row } from "react-bootstrap";

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

  return (
    <Row className="mt-3">
      <Col md={12}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="my-2">
            Top Rated {active === "movie" ? "Movies" : "TV Shows"}
          </p>
          <SwiperNavigator
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            data={data}
            loading={loading}
          />
        </div>

        <Row>
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <TopRatedCardSkeleton key={index} />
              ))
            : data
                ?.slice(currentIndex, currentIndex + 3)
                ?.map((item: SelectedContentTypes, index) => (
                  <TopRatedCard
                    key={index}
                    item={item}
                    active={active}
                    setSelected={setSelected}
                  />
                ))}
        </Row>
      </Col>
    </Row>
  );
};

export default TopRated;
