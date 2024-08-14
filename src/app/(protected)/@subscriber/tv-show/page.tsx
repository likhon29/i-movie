import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "TvShow Page",
  description: "",
};

interface TvShowProps {}

const TvShowPage = ({}: Readonly<TvShowProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="TvShow Page" />
    </Fragment>
  );
};

TvShowPage.displayName = "TvShowPage";

export default TvShowPage;
