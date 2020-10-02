import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';

const Message = ({ text }) => <div className="message">{text}</div>;

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
