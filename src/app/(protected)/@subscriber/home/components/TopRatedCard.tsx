import { SelectedContentTypes, SetSelectedContentTypes } from "@/types";
import { handleLoadDetails, makeImgUrl } from "@/utils";
import React from "react";
import { Col } from "react-bootstrap";

const TopRatedCard = ({
  item,
  active,
  setSelected,
}: {
  item: SelectedContentTypes;
  active: string;
  setSelected: SetSelectedContentTypes;
}) => {
  return (
    <Col
      xs={12}
      sm={6}
      lg={4}
      className="position-relative mb-3"
      onClick={() => handleLoadDetails(item, active, setSelected)}
    >
      <div
        className=" bg-dark rounded overflow-hidden"
        style={{
          height: "200px",
          backgroundImage: `url(${makeImgUrl(item?.poster_path, "original")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease-in-out",
          cursor: "pointer",
        }}
      >
        <div
          className="position-absolute text-white d-flex flex-column"
          style={{ bottom: "10px", left: "30px" }}
        >
          <p className="mb-0">{item?.title || item?.name}</p>
          <span
            className=""
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "#b7b7a4",
            }}
          >
            (
            {item?.release_date?.split("-")[0] ||
              item?.first_air_date?.split("-")[0]}
            )
          </span>
        </div>
      </div>
    </Col>
  );
};

export default TopRatedCard;
