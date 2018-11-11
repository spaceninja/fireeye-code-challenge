import React from "react";
import Tweet from "./Tweet";

class TweetList extends React.Component {
  render() {
    return (
      <div className="card">
        <header className="card__title">
          <h2>Tweets</h2>
        </header>
        <div className="card__body--no-padding">
          {this.props.tweets.map(tweet => (
            <Tweet key={tweet.id} details={tweet} />
          ))}
        </div>
      </div>
    );
  }
}

export default TweetList;
