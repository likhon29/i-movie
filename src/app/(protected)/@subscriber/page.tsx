import React from "react";
import DashboardPage from "./dashboard/page";

interface ParticipentPageProps {}

const ParticipentPage = ({}: Readonly<ParticipentPageProps>) => {
  // Redirects or renders the ParticipantEventPage component as default dashboard page
  return <DashboardPage />;
};

ParticipentPage.displayName = "ParticipentPage";

export default ParticipentPage;
