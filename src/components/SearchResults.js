import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const SearchResults = ({ searchString, closeSearchResults }) => {
  return (
    <div className="card">
      <header className="card__title">
        <h2>Search Results for “{searchString}”</h2>
      </header>
      <div className="card__body">
        <p>No results found.</p>
        <Button text="Dismiss" onClick={closeSearchResults} />
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  searchString: PropTypes.string.isRequired,
  closeSearchResults: PropTypes.func.isRequired
};

export default SearchResults;
