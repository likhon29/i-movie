import React, { Fragment } from "react";

import SiteNavigation from "@/components/shared/site-navigation";
import { Col, Container, Row } from "react-bootstrap";

interface ParticipantPageLayoutProps {
  children: React.ReactNode;
}

const ParticipantPageLayout = ({
  children,
}: Readonly<ParticipantPageLayoutProps>) => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Row>
            <Col md={2} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <SiteNavigation navigation="participant" />
            </Col>
            <Col md={10} style={{ paddingLeft: 0, paddingRight: 0 }}>
              {children}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

ParticipantPageLayout.displayName = "ParticipantPageLayout";

export default ParticipantPageLayout;

// {/* <Fragment>
//   <div className="container-fluid">
//     <div className="row">
//       {/* Left Sidebar */}
//       <div className="col-2 position-fixed h-100 border">
//         {/* <SiteNavigation navigation="participant" /> */}
//       </div>

//       {/* Middle Section */}
//       <div className="col-10 offset-2">
//         <div className="py-7">
//           <div className="px-4 sm:px-6 lg:px-8">{children}</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </Fragment>; */}
