import React from "react";
import Button from "./Button";

const maxLength = 140;

class Composer extends React.Component {
  state = {
    tweet: this.props.tweetString,
    remaining: this.props.tweetString
      ? maxLength - this.props.tweetString.length
      : maxLength
  };

  handleChange = e => {
    this.setState({
      tweet: e.target.value,
      remaining: maxLength - e.target.value.length
    });
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
        <p>{this.props.expanded ? "EXPANDED" : "COLLAPSED"}</p>
        <textarea
          className="new-tweet__input"
          id="new-tweet"
          maxLength={maxLength}
          onChange={this.handleChange}
          placeholder="Compose new Tweet"
          value={this.state.tweet}
        />
        <p>{this.state.remaining} characters remaining</p>
        <Button component="new-tweet__submit" text="Submit" type="submit" />
      </form>
    );
  }
}

export default Composer;
