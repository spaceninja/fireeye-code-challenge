import React from "react";
import sprite from "../assets/sprite.svg";

const Icon = ({ type, className, title }) => (
  <svg
    className={`icon ${className}`}
    width="1em"
    height="1em"
    aria-hidden={title ? "false" : "true"}
  >
    {title && `<title>${title}</title>`}
    <use xlinkHref={`${sprite}#${type}`} />
  </svg>
);

export default Icon;
