import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "Community Page",
  description: "",
};

interface CommunityProps {}

const CommunityPage = ({}: Readonly<CommunityProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="Community Page" />
    </Fragment>
  );
};

CommunityPage.displayName = "CommunityPage";

export default CommunityPage;
