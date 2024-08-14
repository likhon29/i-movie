import { makeImgUrl } from "@/utils";
import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { getMovieDetails, getTvShowDetails } from "@/api";
import { SelectedContentTypes } from "@/types";
import Rating from "@/components/shared/ratings";

const PopularCard = ({
  setLoading,
  item,
  active,
}: {
  setLoading: (loading: boolean) => void;
  item: SelectedContentTypes;
  active: String;
}) => {
  const [content, setContent] = React.useState<SelectedContentTypes>();
  useEffect(() => {
    setLoading(true);
    if (item?.id) {
      const info =
        active === "movie"
          ? getMovieDetails(item?.id).then((data) => setContent(data))
          : getTvShowDetails(item?.id).then((data) => setContent(data));
    }
    setLoading(false);
  }, [item, active, setLoading]);

  const title = content?.title || content?.name;

  return (
    <Row className="g-0" style={{ margin: 0 }}>
      <Col md={12} className="mb-3">
        <div className="d-flex align-items-start" style={{ width: "100%" }}>
          {/* Make the image responsive with max width */}
          <div style={{ flex: "0 0 80px", maxWidth: "60px" }}>
            <Image
              src={makeImgUrl(content?.poster_path, "original")}
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
              <p className="mb-0">{item?.adult ? "NC-17" : "PG-13"}</p>
            </div>
            <p className="text-muted mt-2 mb-2" style={{ fontSize: ".8rem" }}>
              {content?.genres?.map((genre) => genre.name).join(", ")}
            </p>
            <Rating content={content} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PopularCard;
