import React from "react";

const Footer = props => {
  return (
    <footer className="app-footer card">
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <div className="card__body">
        <ul className="app-footer__list">
          <li className="app-footer__item">© 2014 Twitter</li>
          <li className="app-footer__item">
            <a href="#">About</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Help</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Terms</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Privacy</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Cookies</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Ads info</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Brand</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Blog</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Status</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Apps</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Jobs</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Advertise</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Media</a>
          </li>
          <li className="app-footer__item">
            <a href="#">Developers</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
