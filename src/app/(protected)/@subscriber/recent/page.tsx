import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "Recent Page",
  description: "",
};

interface RecentProps {}

const RecentPage = ({}: Readonly<RecentProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="Recent Page" />
    </Fragment>
  );
};

RecentPage.displayName = "RecentPage";

export default RecentPage;
