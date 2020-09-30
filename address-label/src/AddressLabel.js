import React from 'react';
import './AddressLabel.css';

function AddressLabel({ person }) {
  const fullName = person.fullName;
  const { street, city, state, zipcode } = person.address;

  return (
    <>
      <p>{fullName}</p>
      <p>{street}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{zipcode}</p>
    </>
  );
}

export default AddressLabel;
