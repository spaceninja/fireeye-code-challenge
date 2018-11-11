import React from "react";
import Header from "./Header";
import TweetList from "./TweetList";
import SearchResults from "./SearchResults";
import Profile from "./Profile";
import TrendList from "./TrendList";
import Footer from "./Footer";
import trends from "../data/trends";
import jsonTweets from "../data/tweets.json";

class App extends React.Component {
  state = {
    searchString: "",
    showSearchResults: false,
    trends: trends,
    tweets: []
  };

  handleTweet = tweetString => {
    console.log(tweetString);
    this.setState({ tweetString });
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

  componentDidMount() {
    // emulate an API call for the tweet json data
    const tweets = JSON.parse(JSON.stringify(jsonTweets));
    this.setState({ tweets });
  }

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
          <Profile handleTweet={this.handleTweet} />
          <TrendList trends={this.state.trends} />
          <Footer />
        </aside>
        <main className="app__main">
          {this.state.showSearchResults ? (
            <SearchResults
              searchString={this.state.searchString}
              closeSearchResults={this.closeSearchResults}
            />
          ) : (
            <TweetList tweets={this.state.tweets} />
          )}
        </main>
      </div>
    );
  }
}

export default App;
