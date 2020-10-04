import React from 'react';

const AddCard = ({ children }) => (
  <div className="add-card">
    <a href="#">
      <input type="submit" value={children} />
    </a>
  </div>
);

export default AddCard;
