import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "Anime Page",
  description: "",
};

interface AnimeProps {}

const AnimePage = ({}: Readonly<AnimeProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="Anime Page" />
    </Fragment>
  );
};

AnimePage.displayName = "AnimePage";

export default AnimePage;
