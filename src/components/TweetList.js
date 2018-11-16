import React from "react";
import PropTypes from "prop-types";
import Tweet from "./Tweet";

const TweetList = props => {
  return (
    <div className="card">
      <header className="card__title">
        <h2>Tweets</h2>
      </header>
      <div className="card__body--no-padding">
        {props.tweets.map(tweet => (
          <Tweet
            handleExpand={props.handleExpand}
            handleFavorite={props.handleFavorite}
            startNewTweet={props.startNewTweet}
            handleRetweet={props.handleRetweet}
            key={tweet.id}
            details={tweet}
          />
        ))}
      </div>
    </div>
  );
};

TweetList.propTypes = {
  handleExpand: PropTypes.func.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  startNewTweet: PropTypes.func.isRequired,
  handleRetweet: PropTypes.func.isRequired,
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default TweetList;
