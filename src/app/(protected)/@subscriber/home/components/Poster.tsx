import { getLatestMovie, getLatestTVShow } from "@/api";
import { makeImgUrl } from "@/utils";
import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";

const Poster = ({ active }: { active: string }) => {
  const [latest, setLatest] = React.useState<{
    title: string | null;
    poster_path: string;
    name: string | null;
  } | null>(null);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    if (active === "movie") {
      setLoading(true);
      getLatestMovie()
        .then((data) => {
          setLatest(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    } else {
      getLatestTVShow()
        .then((data) => {
          setLatest(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
      setLoading(false);
    }
  }, [active]);

  const url = makeImgUrl(latest?.poster_path ?? "", "original");

  return (
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
            <h4>{latest?.title || latest?.name}</h4>
            <p className="text-muted">Action, Horor, Melody </p>
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
