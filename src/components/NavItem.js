import React from "react";
import Button from "./Button";

const NavItem = ({ active, icon, iconOnly, onClick, text, className }) => {
  return (
    <li
      className={`app-header__nav-list-item ${className} ${
        active ? "is-active" : ""
      }`}
    >
      <Button
        component="app-header__nav-item"
        onClick={onClick}
        text={text}
        icon={icon}
        iconOnly={iconOnly}
      />
    </li>
  );
};

export default NavItem;
