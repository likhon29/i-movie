import { makeImgUrl } from "@/utils";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { SelectedContentTypes } from "../page";

const PopularCard = ({ item }: { item: SelectedContentTypes }) => {
  console.log(item);
  const title = item?.title || item?.name;
  return (
    <Row className="g-0" style={{ margin: 0 }}>
      <Col md={12} className="mb-3">
        <div className="d-flex align-items-start" style={{ width: "100%" }}>
          {/* Make the image responsive with max width */}
          <div style={{ flex: "0 0 80px", maxWidth: "60px" }}>
            <Image
              src={makeImgUrl(item?.poster_path, "original")}
              width={80}
              height={80}
              alt="item"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          {/* Content section takes the remaining width */}
          <div className="ms-3 py-1" style={{ flex: 1 }}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                fontSize: ".8rem",
              }}
            >
              <p className="fw-semibold mb-0">
                {title?.length && title.length > 14
                  ? title.slice(0, 14)
                  : title}
              </p>
              <p className="mb-0">PG-13</p>
            </div>
            <p className="text-muted mt-2 mb-2" style={{ fontSize: ".8rem" }}>
              {item?.genres?.map((genre) => genre.name).join(", ")}
            </p>
            <div className="rating d-flex">
              {/* Rating stars */}
              {[5, 4, 3, 2, 1].map((star) => (
                <React.Fragment key={star}>
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    id={String(star)}
                  />
                  <label htmlFor={String(star)}>☆</label>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PopularCard;
