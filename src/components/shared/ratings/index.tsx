import { SelectedContentTypes } from "@/types";
import React from "react";

const Rating = ({ content }: { content: SelectedContentTypes | undefined }) => {
  const ratingOutOf5 = content?.vote_average && content?.vote_average / 2;
  return (
    <div className="rating d-flex">
      {/* Dynamic Rating stars */}
      {[5, 4, 3, 2, 1].map((star) => (
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
  );
};

export default Rating;
