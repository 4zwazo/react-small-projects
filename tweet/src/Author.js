import React from 'react';
import './Author.css';
import PropTypes from 'prop-types';

const Author = ({ author }) => {
  const { name, handle } = author;
  return (
    <div className="author">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </div>
  );
};

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

export default Author;
