import UpcomingPage from "@/components/shared/upcoming";
import React from "react";

interface DashboardPageProps {}

const DashboardPage = ({}: Readonly<DashboardPageProps>) => {
  return <UpcomingPage title="Dashboard" />;
};

DashboardPage.displayName = "DashboardPage";

export default DashboardPage;
