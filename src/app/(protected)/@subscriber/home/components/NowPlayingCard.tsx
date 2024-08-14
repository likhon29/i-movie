import AddButton from "@/components/ui/add-button";
import WatchButton from "@/components/ui/watch-button";
import { SelectedContentTypes, SetSelectedContentTypes } from "@/types";
import { handleLoadDetails, makeImgUrl } from "@/utils";
import React from "react";
import { Col } from "react-bootstrap";

const NowPlayingCard = ({
  item,
  active,
  setSelected,
}: {
  item: SelectedContentTypes;
  active: string;
  setSelected: SetSelectedContentTypes;
}) => {
  return (
    <Col xs={12} sm={6} lg={3}>
      <div
        onClick={() => handleLoadDetails(item, active, setSelected)}
        className="position-relative bg-dark rounded overflow-hidden"
        style={{
          height: "300px",
          backgroundImage: `url(${makeImgUrl(item?.poster_path, "original")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease-in-out",
          cursor: "pointer",
        }}
      >
        <div
          className="position-absolute"
          style={{
            top: 10,
            right: 10,
          }}
        >
          <AddButton />
        </div>

        <div
          className="position-absolute  w-100"
          style={{
            bottom: 10,
            padding: "0 ",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <WatchButton />
        </div>
      </div>
    </Col>
  );
};

export default NowPlayingCard;
