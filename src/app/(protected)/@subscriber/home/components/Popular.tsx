import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { getPopularMovie, getPopularTvShow } from "@/api";
import PopularCard from "./PopularCard";

const Popular = ({ active }: { active: string }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchBar />
      <div className="d-flex justify-content-between align-content-center mt-4 mb-2 ">
        <h6 className=" ">Popular Movies</h6>

        <HiOutlineDotsHorizontal />
      </div>
      {data?.slice(0, 2)?.map(
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
    </div>
  );
};

export default Popular;
