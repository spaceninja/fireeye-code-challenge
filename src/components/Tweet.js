import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import moment from "moment-twitter";

class Tweet extends React.Component {
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
          <time
            className="tweet__timestamp"
            dateTime={tweet.created_at}
            title={date}
          >
            {timeAgo}
          </time>
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
            component="tweet__reply"
            className="btn--muted"
            text="Reply"
            icon="icon-reply"
            iconOnly={true}
          />
          <Button
            component="tweet__retweet"
            className="btn--retweet"
            count={tweet.retweets}
            text="Retweet"
            icon="icon-retweet"
            showCount={true}
            active={tweet.retweeted}
          />
          <Button
            component="tweet__fave"
            className="btn--fave"
            count={tweet.favorites}
            text="Favorite"
            icon="icon-star"
            showCount={true}
            active={tweet.favorited}
          />
          <Button
            component="tweet__more"
            className="btn--muted"
            text="More"
            icon="icon-ellipsis-h"
            iconOnly={true}
          />
        </div>
      </article>
    );
  }
}

export default Tweet;
