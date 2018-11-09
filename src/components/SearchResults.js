import React from "react";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="card">
        <header className="card__title">
          <h2>Search Results for “{this.props.searchString}”</h2>
        </header>
        <div className="card__body">
          <p>No results found.</p>
          <button
            type="button"
            className="btn"
            onClick={this.props.closeSearchResults}
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  }
}

export default SearchResults;
