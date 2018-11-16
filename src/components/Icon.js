import React from "react";
import PropTypes from "prop-types";
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

Icon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Icon;
