import React from "react";
import Icon from "./Icon";

class SearchForm extends React.Component {
  render() {
    return (
      <form className={`app-header__search search ${this.props.className}`}>
        <label htmlFor="app-search" className="sr-only">
          Search
        </label>
        <input id="app-search" type="search" placeholder="Search" />
        <button>
          <Icon type="icon-search" />
          <span className="sr-only">Submit</span>
        </button>
      </form>
    );
  }
}

export default SearchForm;
