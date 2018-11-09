import React from "react";
import Icon from "./Icon";

const Footer = ({ active, icon, iconOnly, onClick, text, className }) => {
  return (
    <li
      className={`app-header__nav-list-item ${className} ${
        active ? "is-active" : ""
      }`}
    >
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <button
        className="app-header__nav-item"
        href="#"
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
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </li>
  );
};

export default Footer;
