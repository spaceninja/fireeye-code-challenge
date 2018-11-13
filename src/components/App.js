import React from "react";
import Header from "./Header";
import TweetList from "./TweetList";
import SearchResults from "./SearchResults";
import Profile from "./Profile";
import TrendList from "./TrendList";
import Footer from "./Footer";
import Modal from "./Modal";
import trends from "../data/trends";
import jsonTweets from "../data/tweets.json";

class App extends React.Component {
  state = {
    profileComposerExpanded: false,
    searchString: "",
    showModal: false,
    showSearchResults: false,
    trends: trends,
    tweets: [],
    tweetString: ""
  };

  saveTweet = tweet => {
    const tweets = [...this.state.tweets];
    const index = tweets.findIndex(t => t.id === tweet.id);
    if (index >= 0) {
      tweets.splice(index, 1, tweet);
    } else {
      tweets.unshift(tweet);
    }
    this.setState({ tweets });
  };

  closeSearchResults = () => {
    this.setState({ showSearchResults: false });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleSearch = searchString => {
    this.setState({ searchString, showSearchResults: true });
  };

  handleNewTweet = tweetString => {
    const then = new Date("2014-01-17T03:21:00.000Z");
    const now = new Date(Date.now);
    const newTweet = {
      created_at: then.toISOString(),
      id: now.valueOf(),
      text: tweetString,
      user: {
        name: "Patrick Ewing",
        screen_name: "hoverbird",
        avatar: "453590893774118912/E00Ns3Dq",
        avatar_format: "png"
      },
      thread: null,
      retweeted_by: null,
      retweets: 0,
      favorites: 0,
      favorited: false,
      retweeted: false
    };
    this.saveTweet(newTweet);
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

  startNewTweet = username => {
    const seed = username ? `@${username}: ` : "";
    this.setState({ tweetString: seed });
    this.toggleModal();
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
            startNewTweet={this.startNewTweet}
            handleSearch={this.handleSearch}
          />
        </header>
        <aside className="app__sidebar">
          <Profile
            handleNewTweet={this.handleNewTweet}
            composerExpanded={this.state.profileComposerExpanded}
          />
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
              startNewTweet={this.startNewTweet}
              handleRetweet={this.handleRetweet}
              tweets={this.state.tweets}
            />
          )}
        </main>
        {this.state.showModal && (
          <Modal
            handleNewTweet={this.handleNewTweet}
            toggleModal={this.toggleModal}
            tweetString={this.state.tweetString}
          />
        )}
      </div>
    );
  }
}

export default App;
