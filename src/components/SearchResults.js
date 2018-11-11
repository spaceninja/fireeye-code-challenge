import React from "react";
import Button from "./Button";

const SearchResults = ({ searchString, closeSearchResults }) => {
  return (
    <div className="card">
      <header className="card__title">
        <h2>Search Results for “{searchString}”</h2>
      </header>
      <div className="card__body">
        <p>No results found.</p>
        <Button className="btn" text="Dismiss" onClick={closeSearchResults} />
      </div>
    </div>
  );
};

export default SearchResults;
