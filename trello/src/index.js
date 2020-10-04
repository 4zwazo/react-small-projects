import React from 'react';
import ReactDOM from 'react-dom';
import Trello from './Trello';
import './index.css';

const cards = {
  card1: {
    title: 'Phone Features',
    features: [
      'Subwoofer',
      'Non-porous, washable',
      'Wings',
      'Beveled Bezel',
      'Bezeled Bevel',
      'Seedless',
    ],
  },
  card2: {
    title: 'Making Eggs ',
    features: [
      'Eggs',
      'Flour',
      'Ice-cold water',
      'Salt',
      'Large Bowl',
      'Knife',
      'Wooden Roll',
    ],
  },
};
ReactDOM.render(<Trello cards={cards} />, document.querySelector('#root'));
