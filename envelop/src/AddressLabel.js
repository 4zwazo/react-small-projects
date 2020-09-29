import React from 'react';
import './AddressLabel.css';

function AddressLabel({ person }) {
  const fullName = person.fullName;
  const { street, city, state, zipcode } = person.address;

  return (
    <div className="address-label">
      <p>{fullName}</p>
      <p>{street}</p>
      <span className="city">{city}</span>
      <span className="state">{state}</span>
      <span className="zipcode">{zipcode}</span>
    </div>
  );
}

export default AddressLabel;
