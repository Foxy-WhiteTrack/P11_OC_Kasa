import "./Banner.css";
import React from "react";

export default function Banner({ imageUrl, slogan }) {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" />
      <div className="slogan">{slogan}</div>
    </div>
  );
};