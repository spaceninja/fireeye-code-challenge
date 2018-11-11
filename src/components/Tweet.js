import React from "react";

// avatar: https://pbs.twimg.com/profile_images/188302352/nasalogo_twitter_normal.jpg
// avatar@2x: https://pbs.twimg.com/profile_images/188302352/nasalogo_twitter_x96.jpg

class Tweet extends React.Component {
  render() {
    const tweet = this.props.details;
    return (
      <li>
        <p dangerouslySetInnerHTML={{ __html: tweet.text }} />
      </li>
    );
  }
}

export default Tweet;
