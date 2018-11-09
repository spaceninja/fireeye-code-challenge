import React from "react";
import TweetComposer from "./TweetComposer";

class Profile extends React.Component {
  render() {
    return (
      <div className="card">
        <p>Profile</p>
        <TweetComposer />
      </div>
    );
  }
}

export default Profile;
