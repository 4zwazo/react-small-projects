import React from 'react';
import './Time.css';
import moment from 'moment';
import PropTypes from 'prop-types';

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

Time.propTypes = {
  time: PropTypes.string.isRequired,
};

export default Time;
