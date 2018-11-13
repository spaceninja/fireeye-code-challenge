import React from "react";

const Avatar = ({ user }) => {
  const avatarURL = "https://pbs.twimg.com/profile_images";

  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
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
  );
};

export default Avatar;
