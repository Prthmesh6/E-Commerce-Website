import React from "react";
import Star from "./Star";

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <Star value={value} req={0}></Star>
      <Star value={value} req={1}></Star>
      <Star value={value} req={2}></Star>
      <Star value={value} req={3}></Star>
      <Star value={value} req={4}></Star>

      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
