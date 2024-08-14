import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { getPopularMovie, getPopularTvShow } from "@/api";
import PopularCard from "./PopularCard";
import { Button } from "react-bootstrap";

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

  // Skeleton Loader component with animations
  const SkeletonLoader = () => (
    <div
      className="d-flex gap-3 my-3"
      style={{
        height: "100px",
        backgroundColor: "#e0e0e0",
        animation: "pulse 2s infinite",
        transition: "transform 0.5s ease-in-out",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          width: "60px",
          backgroundColor: "#ccc",
          borderRadius: "8px",
        }}
      />
      <div className="d-flex flex-column justify-content-center">
        <div
          style={{
            width: "150px",
            height: "20px",
            backgroundColor: "#ddd",
            marginBottom: "8px",
            borderRadius: "4px",
          }}
        />
        <div
          style={{
            width: "100px",
            height: "15px",
            backgroundColor: "#ddd",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );

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
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      ) : (
        <>
          {data?.slice(0, showMore ? data.length : 2)?.map(
            (
              item: {
                title: string;
                poster_path: string;
              },
              index: number
            ) => {
              return <PopularCard key={index} item={item} />;
            }
          )}

          {/* Show "See More" button if there are more than 2 items */}
          {data.length > 2 && !showMore && (
            <Button
              className="w-100 text-uppercase  "
              onClick={() => setShowMore(true)}
              style={{
                height: "50px",
                backgroundColor: "#fde8ef",
                border: "none",
                fontWeight: "bold",
                color: "#e71d61",
              }}
            >
              See More
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default Popular;
