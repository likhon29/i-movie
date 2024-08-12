import React from "react";

import DashboardPage from "./dashboard/page";

interface AdminPageProps {}

const AdminPage = ({}: Readonly<AdminPageProps>) => {
  return <DashboardPage />;
};

AdminPage.displayName = "AdminPage";

export default AdminPage;
