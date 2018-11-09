import React from "react";
import sprite from "../assets/sprite.svg";

const Icon = ({ type, className }) => (
  <svg className={`icon ${className}`}>
    <use xlinkHref={`${sprite}#${type}`} />
  </svg>
);

export default Icon;
