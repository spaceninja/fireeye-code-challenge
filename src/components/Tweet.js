import React from "react";
import Button from "./Button";

// avatar: https://pbs.twimg.com/profile_images/188302352/nasalogo_twitter_normal.jpg
// avatar@2x: https://pbs.twimg.com/profile_images/188302352/nasalogo_twitter_x96.jpg

class Tweet extends React.Component {
  render() {
    const avatarURL = "https://pbs.twimg.com/profile_images";
    const { user, thread, ...tweet } = this.props.details;
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
          <strong>{user.name}</strong> <span>@{user.screen_name}</span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: tweet.text }} />
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
