import React from "react";
import Icon from "./Icon";

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
        <button className="new-tweet__submit">
          <span>Submit</span>
        </button>
      </form>
    );
  }
}

export default TweetComposer;
