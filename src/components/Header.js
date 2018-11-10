import React from "react";
import Icon from "./Icon";
import NavItem from "./NavItem";
import SearchForm from "./SearchForm";

class Header extends React.Component {
  state = {
    searchActive: false
  };

  toggleSearch = () => {
    this.setState({ searchActive: !this.state.searchActive });
  };

  render() {
    return (
      <div className="app-header">
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <h1 className="app-header__logo">
          <a href="#">
            <Icon type="icon-twitter" />
            <span className="sr-only">Twitter</span>
          </a>
        </h1>
        <nav className="app-header__nav">
          <ul className="app-header__nav-list">
            <NavItem icon="icon-home" text="Home" active={true} />
            <NavItem icon="icon-at" text="Connect" />
            <NavItem icon="icon-hashtag" text="Discover" />
            <NavItem icon="icon-user" text="Me" />
          </ul>
        </nav>
        <div className="app-header__nav">
          <div
            className={`app-header__search ${
              this.state.searchActive ? "is-active" : ""
            }`}
          >
            <SearchForm onSubmit={this.props.handleSearch} />
          </div>
          <ul className="app-header__nav-list">
            <NavItem
              icon="icon-search"
              text="Search"
              iconOnly={true}
              className="hide-on-large"
              onClick={this.toggleSearch}
            />
            <NavItem icon="icon-envelope" text="Messages" iconOnly={true} />
            <NavItem icon="icon-cog" text="Settings" iconOnly={true} />
            <NavItem
              icon="icon-quill"
              text="New Tweet"
              iconOnly={true}
              onClick={this.props.openTweetModal}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
