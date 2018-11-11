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
        <div>
          <strong>{user.name}</strong> <span>@{user.screen_name}</span>{" "}
          <time dateTime={tweet.created_at} title={date}>
            {timeAgo}
          </time>
        </div>
        <p dangerouslySetInnerHTML={{ __html: tweet.text }} />
        {tweet.photo && (
          <figure>
            <img src={tweet.photo} alt="" />
          </figure>
        )}
        <div>
          <Button className="" text="Reply" icon="icon-reply" iconOnly={true} />
          <Button
            className=""
            text="Retweet"
            icon="icon-retweet"
            iconOnly={true}
          />
          <Button
            className=""
            text="Favorite"
            icon="icon-star"
            iconOnly={true}
          />
          <Button
            className=""
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
