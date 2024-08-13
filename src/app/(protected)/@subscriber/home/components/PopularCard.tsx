import { makeImgUrl } from "@/utils";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";

const PopularCard = ({
  item,
}: {
  item: {
    title: string;
    poster_path: string;
    name: string;
  };
}) => {
  const title = item?.title || item?.name;
  return (
    <Row
      className=""
      style={{
        padding: 0,
      }}
    >
      <Col md={12} className="mb-3">
        <div
          className="d-flex gap-3"
          style={{
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <Image
            src={makeImgUrl(item?.poster_path, "original")}
            width={80}
            height={100}
            alt="item"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          />
          <div className="py-1">
            <div
              className="d-flex justify-content-between align-content-center gap-4 w-100 "
              style={{
                fontSize: ".8rem",
              }}
            >
              <p className="fw-semibold">
                {title?.length ?? 0 > 14
                  ? title?.slice(0, 14)
                  : title?.padEnd(15, "...")}
              </p>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  marginBottom: 0,
                }}
              >
                PG-13
              </p>
            </div>
            <p
              className="text-muted"
              style={{
                fontSize: ".8rem",
              }}
            >
              Action, Horor
            </p>
            <div
              className="rating"
              style={{
                padding: 0,
              }}
            >
              <input type="radio" name="rating" value="5" id="5" />
              <label htmlFor="5">☆</label>{" "}
              <input type="radio" name="rating" value="4" id="4" />
              <label htmlFor="4">☆</label>{" "}
              <input type="radio" name="rating" value="3" id="3" />
              <label htmlFor="3">☆</label>{" "}
              <input type="radio" name="rating" value="2" id="2" />
              <label htmlFor="2">☆</label>{" "}
              <input type="radio" name="rating" value="1" id="1" />
              <label htmlFor="1">☆</label>{" "}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PopularCard;
