import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "Discover Page",
  description: "",
};

interface DiscoverProps {}

const DiscoverPage = ({}: Readonly<DiscoverProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="Discover Page" />
    </Fragment>
  );
};

DiscoverPage.displayName = "DiscoverPage";

export default DiscoverPage;
