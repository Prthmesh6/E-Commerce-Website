import React from "react";

const Star = ({ value, req }) => {
  const color = "#f8e825";
  return (
    <span>
      <i
        style={{ color }}
        className={
          value >= 1 + req
            ? "fa-solid fa-star"
            : value >= 0.5 + req
            ? "fa-regular fa-star-half-stroke"
            : "fa-regular fa-star"
        }
      ></i>
    </span>
  );
};

export default Star;
