import React, { Fragment } from "react";
import { Metadata } from "next";

interface DashboardPageLayoutProps {
  children: React.ReactNode;
}

const DashboardPageLayout = ({
  children,
}: Readonly<DashboardPageLayoutProps>) => {
  return (
    <Fragment>
      <div className="mt-6">{children}</div>
    </Fragment>
  );
};

DashboardPageLayout.displayName = "DashboardPageLayout";

export default DashboardPageLayout;
