import React from 'react';
import './Button.css';
import PropType from 'prop-types';

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);

RetweetButton.propTypes = {
  count: PropType.number,
};

export default RetweetButton;
