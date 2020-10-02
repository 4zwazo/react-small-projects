import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    <span className="like-count">{count ? count : null}</span>
    {/* {count > 0 && <span className="like-count">{count}</span>} */}
  </span>
);

LikeButton.propTypes = {
  count: PropTypes.number,
};

export default LikeButton;
