import React from "react";
import Icon from "./Icon";

const Button = ({
  className,
  onClick,
  text,
  icon,
  iconOnly,
  type = "button"
}) => {
  return (
    <button className={className} onClick={onClick} type={type} title={text}>
      {icon && <Icon className={`${className}-icon`} type={icon} />}{" "}
      <span className={`${className}-text ${iconOnly ? "sr-only" : ""}`}>
        {text}
      </span>
    </button>
  );
};

export default Button;
