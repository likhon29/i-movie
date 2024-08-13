import React from "react";
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
        {/* Sidebar */}
        <Col
          md={2}
          className="p-0 vh-100 position-fixed"
          style={{ top: 0, left: 0, zIndex: 1, overflowY: "auto" }}
        >
          <SiteNavigation navigation="participant" />
        </Col>

        {/* Main Content */}
        <Col
          md={{ span: 10, offset: 2 }}
          className="p-0"
          style={{ height: "100vh", overflowY: "auto" }}
        >
          {children}
        </Col>
      </Row>
    </Container>
  );
};

ParticipantPageLayout.displayName = "ParticipantPageLayout";

export default ParticipantPageLayout;


