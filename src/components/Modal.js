import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import TweetComposer from "./TweetComposer";

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal_contents card">
        <div className="card__body">
          <Button
            className="btn--muted"
            component="modal__close"
            icon="icon-close"
            iconOnly={true}
            onClick={props.toggleModal}
            text="Cancel"
          />
          <TweetComposer
            expanded={true}
            onSubmit={props.handleNewTweet}
            tweetString={props.tweetString}
          />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  handleNewTweet: PropTypes.func.isRequired,
  tweetString: PropTypes.string.isRequired
};

export default Modal;
