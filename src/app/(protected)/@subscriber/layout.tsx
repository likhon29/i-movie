import React, { Fragment } from "react";

import SiteNavigation from "@/components/shared/site-navigation";

interface ParticipantPageLayoutProps {
  children: React.ReactNode;
}

const ParticipantPageLayout = ({
  children,
}: Readonly<ParticipantPageLayoutProps>) => {
  return (
    <Fragment>
      <SiteNavigation navigation="participant" />
      <div className="py-7 lg:pl-60">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </div>
    </Fragment>
  );
};

ParticipantPageLayout.displayName = "ParticipantPageLayout";

export default ParticipantPageLayout;
