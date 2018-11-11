import React from "react";
import Icon from "./Icon";

const Button = ({
  active,
  className,
  component,
  count,
  onClick,
  text,
  icon,
  iconOnly,
  showCount,
  type = "button"
}) => {
  let classes = `${component} btn ${className}`;
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

export default Button;
