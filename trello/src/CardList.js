import React from 'react';
import shortid from 'shortid';
import CardListItem from './CardListItem';

const CardList = ({ card }) => {
  console.log(card.features);
  return (
    <div className="card-list">
      {card.features.map((onecard) => (
        <CardListItem key={shortid.generate()} onecard={onecard} />
      ))}
    </div>
  );
};

export default CardList;
