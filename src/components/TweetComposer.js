import React from "react";
import Button from "./Button";

const maxLength = 140;

class Composer extends React.Component {
  state = {
    expanded: this.props.expanded,
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

  handleFocus = () => {
    this.setState({ expanded: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ tweet: "" });
    this.props.onSubmit(this.state.tweet);
  };

  render() {
    return (
      <form
        className={`new-tweet ${this.props.className} ${
          this.state.expanded ? "is-expanded" : ""
        }`}
        onSubmit={this.handleSubmit}
        onFocus={this.handleFocus}
      >
        {this.state.expanded && (
          <label htmlFor="new-tweet" className="new-tweet__label">
            What's Happening?
          </label>
        )}
        <textarea
          className="new-tweet__input"
          id="new-tweet"
          maxLength={maxLength}
          onChange={this.handleChange}
          placeholder="Compose new Tweet"
          rows={this.state.expanded ? "3" : "1"}
          value={this.state.tweet}
        />
        {this.state.expanded && (
          <div className="new-tweet__actions">
            <p className="new-tweet__remaining">
              {this.state.remaining} characters remaining
            </p>
            <Button component="new-tweet__submit" text="Tweet" type="submit" />
          </div>
        )}
      </form>
    );
  }
}

export default Composer;
