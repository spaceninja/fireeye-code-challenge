import React from "react";
import Icon from "./Icon";

class SearchForm extends React.Component {
  state = {
    searchString: ""
  };
  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ searchString: "" });
    this.props.onSubmit(this.state.searchString);
  };
  render() {
    return (
      <form
        className={`search ${this.props.className}`}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="app-search" className="search__label sr-only">
          Search
        </label>
        <input
          className="search__input"
          id="app-search"
          type="search"
          placeholder="Search"
          value={this.state.searchString}
          onChange={this.handleChange}
        />
        <button className="search__submit">
          <Icon type="icon-search" />
          <span className="sr-only">Submit</span>
        </button>
      </form>
    );
  }
}

export default SearchForm;
