import React from "react";
import Tweet from "./Tweet";

class TweetList extends React.Component {
  render() {
    return (
      <div className="card">
        <header className="card__title">
          <h2>Tweets</h2>
        </header>
        <div className="card__body">
          <ul>
            {this.props.tweets.map(tweet => (
              <Tweet key={tweet.id} details={tweet} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TweetList;
