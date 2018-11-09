import React from "react";
import Header from "./Header";
import TweetList from "./TweetList";
import SearchResults from "./SearchResults";
import Profile from "./Profile";
import TrendList from "./TrendList";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    searchString: "",
    showSearchResults: false
  };

  handleSearch = searchString => {
    this.setState({ searchString, showSearchResults: true });
  };

  closeSearchResults = () => {
    this.setState({ showSearchResults: false });
  };

  openTweetModal = () => {
    console.log("OPEN NEW TWEET MODAL");
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Header
            openTweetModal={this.openTweetModal}
            handleSearch={this.handleSearch}
          />
        </header>
        <aside className="app__sidebar">
          <Profile />
          <TrendList />
          <Footer />
        </aside>
        <main className="app__main">
          {this.state.showSearchResults ? (
            <SearchResults
              searchString={this.state.searchString}
              closeSearchResults={this.closeSearchResults}
            />
          ) : (
            <TweetList />
          )}
        </main>
      </div>
    );
  }
}

export default App;
