import React from "react";
import sprite from "../assets/sprite.svg";

const Icon = ({ type, className, title }) => (
  <svg className={`icon ${className}`} aria-hidden={title ? "false" : "true"}>
    {title ? `<title>${title}</title>` : null}
    <use xlinkHref={`${sprite}#${type}`} />
  </svg>
);

export default Icon;
