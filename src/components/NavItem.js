import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const NavItem = ({ active, className, icon, iconOnly, onClick, text }) => {
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

NavItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconOnly: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
};

export default NavItem;
