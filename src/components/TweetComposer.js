import React from "react";
import Button from "./Button";

class TweetComposer extends React.Component {
  state = {
    tweet: ""
  };

  handleChange = e => {
    this.setState({ tweet: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ tweet: "" });
    this.props.onSubmit(this.state.tweet);
  };

  render() {
    return (
      <form
        className={`new-tweet ${this.props.className}`}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="new-tweet" className="new-tweet__label sr-only">
          Compose new Tweet
        </label>
        <textarea
          className="new-tweet__input"
          id="new-tweet"
          placeholder="Compose new Tweet"
          value={this.state.tweet}
          onChange={this.handleChange}
        />
        <Button className="new-tweet__submit" text="Submit" type="submit" />
      </form>
    );
  }
}

export default TweetComposer;
