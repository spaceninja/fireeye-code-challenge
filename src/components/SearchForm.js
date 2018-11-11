import React from "react";
import Button from "./Button";

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
        <Button
          component="search__submit"
          text="Submit"
          icon="icon-search"
          iconOnly={true}
          type="submit"
        />
      </form>
    );
  }
}

export default SearchForm;
