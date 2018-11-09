import React from "react";
import TweetComposer from "./TweetComposer";

class Profile extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card__body">
          <p>Profile</p>
        </div>
        <footer className="card__footer">
          <TweetComposer />
        </footer>
      </div>
    );
  }
}

export default Profile;
