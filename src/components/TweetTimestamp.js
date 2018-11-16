import React from "react";
import PropTypes from "prop-types";
import moment from "moment-twitter";

const Timestamp = props => {
  const timestamp = moment(props.created_at);
  const now = moment("2014-01-17T03:21:00.000Z"); // hack to make old tweets seem current
  const diff = now.diff(timestamp);
  const timeAgo = moment(moment() - diff).twitterShort();
  const date = timestamp.format("h:mm A - D MMM YYYY");

  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <a className="tweet__timestamp-link" href="#">
      <time
        className="tweet__timestamp"
        dateTime={props.created_at}
        title={date}
      >
        {timeAgo}
      </time>
    </a>
  );
};

Timestamp.propTypes = {
  created_at: PropTypes.string.isRequired
};

export default Timestamp;
