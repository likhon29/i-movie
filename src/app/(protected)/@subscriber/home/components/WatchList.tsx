import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { getPopularMovie, getPopularTvShow } from "@/api";
import PopularCard from "./PopularCard";

const WatchList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-content-center mt-4 mb-2 ">
        <h6 className=" ">Watchlists</h6>

        <HiOutlineDotsHorizontal />
      </div>
      {data?.slice(0, 3)?.map((item, index) => (
        <PopularCard key={index} item={item} />
      ))}
    </div>
  );
};

export default WatchList;
