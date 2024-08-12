"use client";
import { getLatestMovie } from "@/api";
import React, { useEffect } from "react";

const HomePage = () => {
  const [lasted, setLasted] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setLoading(true);
    getLatestMovie()
      .then((data) => {
        setLasted(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container p-3">
      <div className="row justify-content-center gap-2">
        <div className="col col-lg-8 border">1 of 3</div>
        <div className="col col-lg-3 border">3 of 3</div>
      </div>
    </div>
  );
};

export default HomePage;
