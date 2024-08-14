import { makeImgUrl } from "@/utils";
import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { SelectedContentTypes } from "../page";
import { getMovieDetails, getTvShowDetails } from "@/api";

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
  }, [item]);

  const title = content?.title || content?.name;
  const ratingOutOf5 = content?.vote_average && content?.vote_average / 2;

  

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
            <div className="rating d-flex">
              {/* Dynamic Rating stars */}
              {[4, 3, 2, 1].map((star) => (
                <React.Fragment key={star}>
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    id={`star-${star}`}
                    checked={star === Math.ceil(ratingOutOf5 || 0)} // Mark the correct star
                    readOnly
                  />
                  <label
                    htmlFor={`star-${star}`}
                    style={{
                      color: star <= Math.ceil(ratingOutOf5 || 0) ? "" : "gray", // Highlight filled stars
                    }}
                  >
                    ☆
                  </label>
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
