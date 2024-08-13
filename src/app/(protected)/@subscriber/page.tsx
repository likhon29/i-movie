import React from "react";
import HomePage from "./home/page";

interface SubscriberPageProps {}

const SubscriberPage = ({}: Readonly<SubscriberPageProps>) => {
  // Redirects or renders the ParticipantEventPage component as default dashboard page
  return <HomePage />;
};

SubscriberPage.displayName = "SubscriberHomePage";

export default SubscriberPage;
