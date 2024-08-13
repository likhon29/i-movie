"use client";
import { getLatestMovie } from "@/api";
import assets from "@/assets";
import Image from "next/image";
import React, { useEffect } from "react";

const HomePage = () => {
  const [lasted, setLasted] = React.useState<{ title: string } | null>(null);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-danger">
      <h1>{lasted?.title}</h1>
    </div>
  );
};

export default HomePage;
