import React from "react";
import Button from "./Button";
import moment from "moment-twitter";

class Tweet extends React.Component {
  render() {
    const { user, thread, ...tweet } = this.props.details;
    const avatarURL = "https://pbs.twimg.com/profile_images";
    const timestamp = moment(tweet.created_at);
    const now = moment("2014-01-17T03:21:00.000Z");
    const diff = now.diff(timestamp);
    const timeAgo = moment(moment() - diff).twitterShort();
    const date = timestamp.format("h:mm A - D MMM YYYY");
    return (
      <article className="tweet">
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
        <div className="tweet__header">
          <span className="tweet__user">
            <strong className="tweet__user-name">{user.name}</strong>{" "}
            <span className="tweet__user-screen-name">@{user.screen_name}</span>{" "}
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
