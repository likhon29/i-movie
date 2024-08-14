import React from "react";
import SiteNavigation from "@/components/shared/site-navigation";
import { Col, Container, Row } from "react-bootstrap";

interface SubscriberPageLayoutProps {
  children: React.ReactNode;
}

const SubscriberPageLayout = ({
  children,
}: Readonly<SubscriberPageLayoutProps>) => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col
          md={2}
          className="p-0 vh-100 position-fixed"
          style={{ top: 0, left: 0, zIndex: 1, overflowY: "auto" }}
        >
          <SiteNavigation navigation="subscriber" />
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

SubscriberPageLayout.displayName = "SubscriberPageLayout";

export default SubscriberPageLayout;
