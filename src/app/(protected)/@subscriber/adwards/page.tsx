import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "Awards Page",
  description: "",
};

interface AwardsProps {}

const AwardsPage = ({}: Readonly<AwardsProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="Awards Page" />
    </Fragment>
  );
};

AwardsPage.displayName = "AwardsPage";

export default AwardsPage;
