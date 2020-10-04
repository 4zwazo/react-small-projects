import React from 'react';
import AddCard from './AddCard';
import CardList from './CardList';
import CardTitle from './CardTitle';

const Card = ({ card }) => {
  return (
    <div className="card">
      <CardTitle card={card} />
      <CardList card={card} />
      <AddCard>Add a Card...</AddCard>
    </div>
  );
};

export default Card;
