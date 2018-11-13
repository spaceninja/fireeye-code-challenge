import React from "react";
import TweetComposer from "./TweetComposer";

const Profile = ({ composerExpanded, handleNewTweet }) => {
  return (
    <div className="profile card">
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
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
        <div className="profile__avatar">
          <a className="profile__avatar-link" href="#">
            <img
              alt="User Name"
              className="profile__avatar-media"
              sizes="100px"
              src="https://source.unsplash.com/rDEOVtE7vOs/100x100"
              srcSet="https://source.unsplash.com/rDEOVtE7vOs/100x100 100w,
                  https://source.unsplash.com/rDEOVtE7vOs/200x200 200w"
            />
          </a>
        </div>
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

export default Profile;
