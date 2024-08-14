import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "Downloaded Page",
  description: "",
};

interface DownloadedProps {}

const DownloadedPage = ({}: Readonly<DownloadedProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="Downloaded Page" />
    </Fragment>
  );
};

DownloadedPage.displayName = "DownloadedPage";

export default DownloadedPage;
