import React, { Fragment } from "react";

interface AdminPageLayoutProps {
  children: React.ReactNode;
}

const AdminPageLayout = ({ children }: Readonly<AdminPageLayoutProps>) => {
  return (
    <Fragment>
      <div className="px-4 sm:px-6 lg:px-8">{children}</div>
    </Fragment>
  );
};

AdminPageLayout.displayName = "AdminPageLayout";

export default AdminPageLayout;
