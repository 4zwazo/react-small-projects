import React from 'react';
import ReactDOM from 'react-dom';
import Envelop from './Envelop';

const toPersonTest = {
  fullName: 'Jude Pierre',
  address: {
    street: '123 Fake St',
    city: 'Boston',
    state: 'MA',
    zipcode: '02118',
  },
};

const fromPersonTest = {
  fullName: 'Mamie Jean',
  address: {
    street: '1234  Another Fake St',
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '07118',
  },
};

ReactDOM.render(
  <Envelop toPerson={toPersonTest} fromPerson={fromPersonTest} />,
  document.querySelector('#root'),
);
