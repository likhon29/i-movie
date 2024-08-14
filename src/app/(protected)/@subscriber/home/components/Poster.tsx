import { getLatestMovie, getLatestTVShow } from "@/api";
import { makeImgUrl } from "@/utils";
import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { SelectedContentTypes, SetSelectedContentTypes } from "../page";

const Poster = ({
  active,
  selected,
  setSelected,
}: {
  active: string;
  selected: SelectedContentTypes;
  setSelected: SetSelectedContentTypes;
}) => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (active === "movie") {
      setLoading(true);
      getLatestMovie()
        .then((data) => {
          setSelected(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    } else {
      setLoading(true);
      getLatestTVShow()
        .then((data) => {
          setSelected(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    }
  }, [active, setSelected]);

  const url = makeImgUrl(selected?.poster_path ?? "", "original");

  // Skeleton Loader component
  const SkeletonLoader = () => (
    <div
      style={{
        height: "300px",
        backgroundColor: "#e0e0e0",
        animation: "pulse 2s infinite",
        position: "relative",
      }}
    >
      <Row className="h-100">
        <Col
          md={12}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div className="d-flex flex-column justify-content-center h-100 p-3">
            <div
              style={{
                width: "150px",
                height: "20px",
                backgroundColor: "#ddd",
                marginBottom: "10px",
                borderRadius: "4px",
              }}
            />
            <div
              style={{
                width: "200px",
                height: "30px",
                backgroundColor: "#ddd",
                marginBottom: "15px",
                borderRadius: "4px",
              }}
            />
            <div
              style={{
                width: "100px",
                height: "15px",
                backgroundColor: "#ddd",
                borderRadius: "4px",
              }}
            />
            <div className="d-flex gap-2 mt-3">
              <div
                style={{
                  width: "100px",
                  height: "40px",
                  backgroundColor: "#ddd",
                  borderRadius: "4px",
                }}
              />
              <div
                style={{
                  width: "50px",
                  height: "40px",
                  backgroundColor: "#ddd",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );

  return loading ? (
    <SkeletonLoader />
  ) : (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        color: "white",
      }}
    >
      <Row className="h-100">
        <Col
          md={12}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="d-flex flex-column justify-content-center h-100 p-3">
            <p className="text-muted">Season 10</p>
            <h4>{selected?.title || selected?.name}</h4>
            <p className="text-muted">Action, Horror, Melody</p>
            <div className="d-flex gap-2">
              <Button variant="danger">Watch Now</Button>
              <Button variant="secondary">+</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Poster;
