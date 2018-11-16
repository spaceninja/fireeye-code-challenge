import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import TweetComposer from "./TweetComposer";

const Profile = ({ composerExpanded, handleNewTweet }) => {
  const user = {
    name: "Example User",
    screen_name: "exampleuser",
    avatar: "rDEOVtE7vOs",
    avatar_format: "unsplash"
  };

  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <div className="profile card">
      <div className="card__image">
        <img
          alt=""
          className="card__image-media"
          sizes="290px"
          src="https://source.unsplash.com/W7_tcn9KuA4/290x145"
          srcSet="https://source.unsplash.com/W7_tcn9KuA4/290x145 290w,
                  https://source.unsplash.com/W7_tcn9KuA4/580x290 580w"
        />
      </div>
      <div className="card__body--no-padding">
        <Avatar size="large" component="profile" user={user} />
        <ul className="profile__stat-list">
          <li className="profile__stat">
            <a href="#">
              <strong className="profile__stat-label">Tweets</strong>{" "}
              <span className="profile__stat-number">19.3K</span>
            </a>
          </li>
          <li className="profile__stat">
            <a href="#">
              <strong className="profile__stat-label">Following</strong>{" "}
              <span className="profile__stat-number">178</span>
            </a>
          </li>
          <li className="profile__stat">
            <a href="#">
              <strong className="profile__stat-label">Followers</strong>{" "}
              <span className="profile__stat-number">31.1K</span>
            </a>
          </li>
        </ul>
      </div>
      <footer className="card__footer">
        <TweetComposer expanded={composerExpanded} onSubmit={handleNewTweet} />
      </footer>
    </div>
  );
};

Profile.propTypes = {
  composerExpanded: PropTypes.bool.isRequired,
  handleNewTweet: PropTypes.func.isRequired
};

export default Profile;
