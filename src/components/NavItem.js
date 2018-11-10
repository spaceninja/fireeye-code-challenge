import React from "react";
import Icon from "./Icon";

const NavItem = ({ active, icon, iconOnly, onClick, text, className }) => {
  return (
    <li
      className={`app-header__nav-list-item ${className} ${
        active ? "is-active" : ""
      }`}
    >
      <button
        className="app-header__nav-item"
        onClick={onClick}
        type="button"
        title={text}
      >
        <Icon className="app-header__nav-item-icon" type={icon} />
        <span
          className={`app-header__nav-item-text ${iconOnly ? "sr-only" : ""}`}
        >
          {text}
        </span>
      </button>
    </li>
  );
};

export default NavItem;
