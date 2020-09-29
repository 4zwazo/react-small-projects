import React from 'react';
import AddressLabel from './AddressLabel';
import './Envelop.css';
import Stamp from './Stamp';

function Envelop({ toPerson, fromPerson }) {
  return (
    <div className="envelop">
      <div className="from-person">
        <span className="from-address">
          <AddressLabel person={fromPerson} />{' '}
        </span>
        <Stamp />
      </div>
      <div className="to-person">
        <AddressLabel person={toPerson} />
      </div>
    </div>
  );
}

export default Envelop;
