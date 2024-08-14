"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { getPopularMovie, getPopularTvShow } from "@/api";
import PopularCard from "./PopularCard";
import SeeMore from "@/components/ui/see-more-button";
import { SelectedContentTypes } from "@/types";
import PopularSkeletonLoader from "@/components/shared/skeleton/PopularSkeletonLoader";

const Popular = ({ active }: { active: string }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false); // Track the state of "See More"

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

  return (
    <div>
      <div className="d-flex justify-content-between align-content-center mt-4 mb-2">
        <h6 className="">
          {active === "movie" ? "Popular Movies" : "Popular TV Shows"}
        </h6>
        <HiOutlineDotsHorizontal />
      </div>

      {/* Display skeletons when loading */}
      {loading ? (
        <>
          <PopularSkeletonLoader />
          <PopularSkeletonLoader />
        </>
      ) : (
        <>
          {data
            ?.slice(0, showMore ? data.length : 2)
            ?.map((item: SelectedContentTypes, index: number) => {
              return (
                <PopularCard
                  setLoading={setLoading}
                  key={index}
                  item={item}
                  active={active}
                />
              );
            })}

          {/* Show "See More" button if there are more than 2 items */}
          {data.length > 2 && !showMore && (
            <SeeMore setShowMore={setShowMore} />
          )}
        </>
      )}
    </div>
  );
};

export default Popular;
