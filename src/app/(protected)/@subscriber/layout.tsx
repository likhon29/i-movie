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
      <div className="container-fluid">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-2 position-fixed h-100 border">
            <SiteNavigation navigation="participant" />
          </div>

          {/* Middle Section */}
          <div
            className="col-7 offset-2"
            style={{ overflowY: "auto", height: "100vh" }}
          >
            <div className="py-7">
              <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div
            className="col-3 border"
            style={{ overflowY: "auto", height: "100vh" }}
          >
            <div className="py-7">right side</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ParticipantPageLayout.displayName = "ParticipantPageLayout";

export default ParticipantPageLayout;
