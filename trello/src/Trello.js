import React from 'react';
import Card from './Card';

const Trello = ({ cards }) => {
  const { card1, card2 } = cards;

  return (
    <div className="trello">
      <Card card={card1} />
      {/* <Card card={cards.car2} /> */}
    </div>
  );
};

export default Trello;
