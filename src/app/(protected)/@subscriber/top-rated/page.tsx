import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "TopRated Page",
  description: "",
};

interface TopRatedProps {}

const TopRatedPage = ({}: Readonly<TopRatedProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="TopRated Page" />
    </Fragment>
  );
};

TopRatedPage.displayName = "TopRatedPage";

export default TopRatedPage;
