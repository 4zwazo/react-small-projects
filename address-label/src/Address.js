import React from 'react';
import AddressLabel from './AddressLabel';

function Address({ person }) {
  return (
    <div>
      <AddressLabel person={person} />
    </div>
  );
}

export default Address;
