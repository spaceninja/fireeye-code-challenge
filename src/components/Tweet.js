import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import moment from "moment-twitter";

class Tweet extends React.Component {
  handleExpand = () => {
    this.props.handleExpand(this.props.details.id);
  };

  handleFavorite = () => {
    this.props.handleFavorite(this.props.details.id);
  };

  handleReply = () => {
    this.props.handleReply(this.props.details.user.screen_name);
  };

  handleRetweet = () => {
    this.props.handleRetweet(this.props.details.id);
  };

  render() {
    const { user, thread, ...tweet } = this.props.details;
    const avatarURL = "https://pbs.twimg.com/profile_images";
    const timestamp = moment(tweet.created_at);
    const now = moment("2014-01-17T03:21:00.000Z"); // hack to make old tweets seem current
    const diff = now.diff(timestamp);
    const timeAgo = moment(moment() - diff).twitterShort();
    const date = timestamp.format("h:mm A - D MMM YYYY");
    let classes = "tweet";
    if (tweet.retweeted_by) classes += " tweet--retweet";
    if (thread) {
      classes += " tweet--thread";
      if (thread.start) classes += " tweet--thread-start";
      if (thread.end) classes += " tweet--thread-end";
      if (thread.collapsed) classes += " is-collapsed";
    }
    if (thread && thread.collapsed) {
      return (
        <article className={classes}>
          <div className="tweet__collapsed-text">
            <Button
              component="tweet__show-more"
              className="btn--link"
              onClick={this.handleExpand}
              text="1 more reply"
            />
          </div>
        </article>
      );
    }
    return (
      <article className={classes}>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <div className="tweet__avatar">
          <a href="#">
            <img
              alt={user.name}
              className="tweet__avatar-media"
              sizes="48px"
              src={`${avatarURL}/${user.avatar}_normal.${user.avatar_format}`}
              srcSet={`
                ${avatarURL}/${user.avatar}_normal.${user.avatar_format} 48w,
                ${avatarURL}/${user.avatar}_x96.${user.avatar_format} 96w
              `}
            />
          </a>
        </div>
        {tweet.retweeted_by && (
          <div className="tweet__retweet-info">
            <Icon className="tweet__retweet-icon" type="icon-retweet" />
            <span className="tweet__retweet-by">
              Retweeted by {tweet.retweeted_by.name}
            </span>
          </div>
        )}
        <div className="tweet__header">
          <span className="tweet__user">
            <a className="tweet__user-link" href="#">
              <strong className="tweet__user-name">{user.name}</strong>{" "}
              <span className="tweet__user-screen-name">
                @{user.screen_name}
              </span>
            </a>
          </span>
          <a className="tweet__timestamp-link" href="#">
            <time
              className="tweet__timestamp"
              dateTime={tweet.created_at}
              title={date}
            >
              {timeAgo}
            </time>
          </a>
        </div>
        <div className="tweet__body">
          <p
            className="tweet__text"
            dangerouslySetInnerHTML={{ __html: tweet.text }}
          />
          {tweet.photo && (
            <figure className="tweet__photo">
              <img className="tweet__photo-media" src={tweet.photo} alt="" />
            </figure>
          )}
        </div>
        <div className="tweet__actions">
          <Button
            className="btn--muted"
            component="tweet__btn-reply"
            icon="icon-reply"
            iconOnly={true}
            onClick={this.handleReply}
            text="Reply"
          />
          <Button
            active={tweet.retweeted}
            className="btn--retweet"
            component="tweet__btn-retweet"
            count={tweet.retweets}
            icon="icon-retweet"
            onClick={this.handleRetweet}
            showCount={true}
            text="Retweet"
          />
          <Button
            active={tweet.favorited}
            className="btn--fave"
            component="tweet__btn-fave"
            count={tweet.favorites}
            icon="icon-star"
            onClick={this.handleFavorite}
            showCount={true}
            text="Favorite"
          />
          <div class="tweet__more">
            <Button
              className="btn--muted"
              component="tweet__btn-more"
              icon="icon-ellipsis-h"
              iconOnly={true}
              text="More"
            />
            <ul className="tweet__more-dropdown">
              <li className="tweet__more-item">
                <a href="#">Copy link to Tweet</a>
              </li>
              <li className="tweet__more-item">
                <a href="#">Embed Tweet</a>
              </li>
              <li className="tweet__more-item">
                <a href="#">Mute @{user.screen_name}</a>
              </li>
              <li className="tweet__more-item">
                <a href="#">Block @{user.screen_name}</a>
              </li>
              <li className="tweet__more-item">
                <a href="#">Report Tweet</a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

export default Tweet;
