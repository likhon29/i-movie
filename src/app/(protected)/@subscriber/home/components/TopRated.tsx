import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopRated = () => {
  return (
    <Row className="mt-3">
      <Col md={12}>
        <div className="d-flex justify-content-between align-content-center">
          <p className="my-2">Top Rated Movie</p>
          <div className="d-flex justify-content-center gap-1">
            <Button variant="light">
              <IoIosArrowBack />
            </Button>
            <Button variant="light">
              <IoIosArrowForward />
            </Button>
          </div>
        </div>

        <div className="d-flex gap-3">
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "gray",
            }}
          ></div>
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "gray",
            }}
          ></div>
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "gray",
            }}
          ></div>
        </div>
      </Col>
    </Row>
  );
};

export default TopRated;
