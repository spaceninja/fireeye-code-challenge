import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="app-header">
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <h1 className="app-header__logo">Twitter</h1>
        <nav className="app-header__nav">
          <ul className="app-header__nav-list">
            <li className="app-header__nav-list-item">
              <a className="app-header__nav-item" href="#">
                Home
              </a>
            </li>
            <li className="app-header__nav-list-item">
              <a className="app-header__nav-item" href="#">
                Connect
              </a>
            </li>
            <li className="app-header__nav-list-item">
              <a className="app-header__nav-item" href="#">
                Discover
              </a>
            </li>
            <li className="app-header__nav-list-item">
              <a className="app-header__nav-item" href="#">
                Me
              </a>
            </li>
          </ul>
        </nav>
        <div className="app-header__util">
          <form className="app-header__nav-item app-header__search search">
            <label>Search</label>
            <input type="search" placeholder="Search" />
            <button>Submit</button>
          </form>
          <ul className="app-header__nav-list">
            <li className="app-header__nav-list-item">
              <a className="app-header__nav-item" href="#">
                Messages
              </a>
            </li>
            <li className="app-header__nav-list-item">
              <a className="app-header__nav-item" href="#">
                Settings
              </a>
            </li>
            <li className="app-header__nav-list-item">
              <button className="app-header__nav-item" type="button">
                New Tweet
              </button>
            </li>
          </ul>
        </div>
        {/* eslint-enable jsx-a11y/anchor-is-valid */}
      </div>
    );
  }
}

export default Header;
