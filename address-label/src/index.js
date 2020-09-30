import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Address from './Address';

const person = {
  fullName: 'Jude Pierre',
  address: {
    street: '123 Fake St',
    city: 'Boston',
    state: 'MA',
    zipcode: '02118',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Address person={person} />
  </React.StrictMode>,
  document.getElementById('root'),
);
