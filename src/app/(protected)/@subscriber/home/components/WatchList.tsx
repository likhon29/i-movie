import React, { useEffect, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { getPopularTvShow } from "@/api";
import PopularCard from "./PopularCard";
import { Button } from "react-bootstrap";

const WatchList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false); // Track "See More" state

  useEffect(() => {
    getPopularTvShow()
      .then((data) => {
        setData(data?.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

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
          width: "90px",
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
      <div className="d-flex justify-content-between align-content-center mt-4 mb-2 ">
        <h6 className=" ">Watchlists</h6>
        <HiOutlineDotsHorizontal />
      </div>

      {/* Display skeletons when loading */}
      {loading ? (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      ) : (
        <>
          {data?.slice(0, showMore ? data.length : 3)?.map(
            (
              item: {
                title: any;
                poster_path: string;
              },
              index: number
            ) => {
              return <PopularCard key={index} item={item} />;
            }
          )}

          {/* Show "See More" button if there are more than 3 items */}
          {data.length > 3 && !showMore && (
            <Button
              className="w-100 text-uppercase text-danger "
              onClick={() => setShowMore(true)}
              style={{
                height: "50px",
                backgroundColor: "#FFD0D0",
                border: "none",
                // text bold
                fontWeight: "bold",
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

export default WatchList;
