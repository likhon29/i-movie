import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "Movie Page",
  description: "",
};

interface MovieProps {}

const MoviePage = ({}: Readonly<MovieProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="Movie Page" />
    </Fragment>
  );
};

MoviePage.displayName = "MoviePage";

export default MoviePage;
