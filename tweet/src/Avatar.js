import React from 'react';
import './Avatar.css';
import PropTypes from 'prop-types';

const Avatar = ({ hash }) => {
  // const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={hash} className="avatar" alt="avatar" />;
};

Avatar.propTypes = {
  hash: PropTypes.string.isRequired,
};

export default Avatar;
