import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';
import './index.css';
import faker from 'faker';

const testTweet = {
  message: 'Something about cats',
  gravatar: `${faker.image.avatar()}`,
  author: {
    handle: 'catdude',
    name: 'Jude',
  },
  likes: 2,
  retweets: 56,
  timestamp: '2016-07-30 21:24:37',
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));
