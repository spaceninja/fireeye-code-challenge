import React from "react";

const SearchResults = ({ searchString, closeSearchResults }) => {
  return (
    <div className="card">
      <header className="card__title">
        <h2>Search Results for “{searchString}”</h2>
      </header>
      <div className="card__body">
        <p>No results found.</p>
        <button type="button" className="btn" onClick={closeSearchResults}>
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
