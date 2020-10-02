import React from 'react';
import Author from './Author';
import Avatar from './Avatar';
import LikeButton from './LikeButton';
import Message from './Message';
import MoreOptionsButton from './MoreOptionsButton';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import Time from './Time';
import PropTypes from 'prop-types';

const Tweet = ({ tweet }) => (
  <div className="tweet">
    <Avatar hash={tweet.gravatar} />
    <div className="content">
      <Author author={tweet.author} />
      <Time time={tweet.timestamp} />
      <Message text={tweet.message} />
      <div className="buttons">
        <ReplyButton />
        <RetweetButton count={tweet.retweets} />
        <LikeButton count={tweet.likes} />
        <MoreOptionsButton />
      </div>
    </div>
  </div>
);

// Tweet.propTypes = {
//   tweet: PropTypes.shape({
//     message: PropTypes.string.isRequired,
//     gravatar: PropTypes.string.isRequired,
//     author: PropTypes.shape({
//       handle: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     }),
//     likes: PropTypes.number.isRequired,
//     retweets: PropTypes.number.isRequired,
//     timestamp: PropTypes.string.isRequired,
//   }).isRequired,
// };

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};

export default Tweet;
