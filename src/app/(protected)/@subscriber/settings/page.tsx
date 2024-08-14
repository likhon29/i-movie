import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "Settings Page",
  description: "",
};

interface SettingsProps {}

const SettingsPage = ({}: Readonly<SettingsProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="Settings Page" />
    </Fragment>
  );
};

SettingsPage.displayName = "SettingsPage";

export default SettingsPage;
