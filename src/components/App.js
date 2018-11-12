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
    console.log("NEW TWEET", tweetString);
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

  saveTweet = tweet => {
    const tweets = [...this.state.tweets];
    const index = tweets.findIndex(t => t.id === tweet.id);
    if (index >= 0) {
      tweets.splice(index, 1, tweet);
    } else {
      tweets.push(tweet);
    }
    this.setState({ tweets });
  };

  handleExpand = id => {
    const tweet = this.state.tweets.find(t => t.id === id);
    tweet.thread.collapsed = false;
    this.saveTweet(tweet);
  };

  handleFavorite = id => {
    const tweet = this.state.tweets.find(t => t.id === id);
    if (tweet.favorited) {
      tweet.favorited = false;
      tweet.favorites -= 1;
    } else {
      tweet.favorited = true;
      tweet.favorites += 1;
    }
    this.saveTweet(tweet);
  };

  handleRetweet = id => {
    const tweet = this.state.tweets.find(t => t.id === id);
    if (tweet.retweeted) {
      tweet.retweeted = false;
      tweet.retweets -= 1;
    } else {
      tweet.retweeted = true;
      tweet.retweets += 1;
    }
    this.saveTweet(tweet);
  };

  handleReply = username => {
    console.log("REPLY TO", username);
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
            <TweetList
              handleExpand={this.handleExpand}
              handleFavorite={this.handleFavorite}
              handleReply={this.handleReply}
              handleRetweet={this.handleRetweet}
              tweets={this.state.tweets}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
