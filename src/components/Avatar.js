import React from "react";

const Avatar = ({ size = "small", component, user }) => {
  let avatarURLx48 = "";
  let avatarURLx96 = "";
  let avatarURLx100 = "";
  let avatarURLx200 = "";

  if (user.avatar_format === "unsplash") {
    avatarURLx48 = `https://source.unsplash.com/${user.avatar}/48x48`;
    avatarURLx96 = `https://source.unsplash.com/${user.avatar}/96x96`;
    avatarURLx100 = `https://source.unsplash.com/${user.avatar}/100x100`;
    avatarURLx200 = `https://source.unsplash.com/${user.avatar}/200x200`;
  } else {
    const avatarURL = "https://pbs.twimg.com/profile_images";
    avatarURLx48 = `${avatarURL}/${user.avatar}_normal.${user.avatar_format}`;
    avatarURLx96 = `${avatarURL}/${user.avatar}_x96.${user.avatar_format}`;
    avatarURLx100 = `${avatarURL}/${user.avatar}_x96.${user.avatar_format}`; // no 100px :(
    avatarURLx200 = `${avatarURL}/${user.avatar}_200x200.${user.avatar_format}`;
  }

  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <div className={`${component}__avatar`}>
      <a className={`${component}__avatar-link`} href="#">
        {size === "small" ? (
          <img
            alt={user.name}
            className={`${component}__avatar-media`}
            sizes="48px"
            src={avatarURLx48}
            srcSet={`
              ${avatarURLx48} 48w,
              ${avatarURLx96} 96w
            `}
          />
        ) : (
          <img
            alt={user.name}
            className={`${component}__avatar-media`}
            sizes="100px"
            src={avatarURLx100}
            srcSet={`
              ${avatarURLx100} 100w,
              ${avatarURLx200} 200w
            `}
          />
        )}
      </a>
    </div>
  );
};

export default Avatar;
