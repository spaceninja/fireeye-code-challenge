import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const Button = ({
  active,
  className,
  component,
  count,
  icon,
  iconOnly,
  onClick,
  showCount,
  text,
  type = "button"
}) => {
  let classes = `btn ${className} ${component}`;
  let textClasses = "btn__text";
  if (active) classes += " is-active";
  if (showCount) textClasses += " btn__count";
  if (iconOnly || (showCount && !count)) {
    classes += " btn--icon-only";
    textClasses += " sr-only";
  }
  return (
    <button className={classes} onClick={onClick} type={type} title={text}>
      {icon && <Icon className="btn__icon" type={icon} />}{" "}
      <span className={textClasses}>{showCount ? count : text}</span>
    </button>
  );
};

Button.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.string,
  count: PropTypes.number,
  icon: PropTypes.string,
  iconOnly: PropTypes.bool,
  onClick: PropTypes.func,
  showCount: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default Button;
