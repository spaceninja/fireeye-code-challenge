import React from "react";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="card">
        <h2>Search Results for "{this.props.searchString}"</h2>
        <p>No results found.</p>
        <button
          type="button"
          className="btn"
          onClick={this.props.closeSearchResults}
        >
          Dismiss
        </button>
      </div>
    );
  }
}

export default SearchResults;
