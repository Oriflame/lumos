/* eslint-disable no-console -- we need it here */
/* eslint-disable react/jsx-filename-extension -- we need it here */
/* eslint-disable import/no-extraneous-dependencies -- we need it here */
import React from 'react';
import './test.css';

import aliasModule from './mdl';
import mod from './test.module.css';

console.log(React.version);

console.log(mod);

console.log('Webpack build test!');

import('./module').then((module) => module.default());

// eslint-disable-next-line no-undef -- it will be actually defined
document.getElementById('test').classList.add(mod.another);

const test = {
  test: '1234',
  asfg: 1234,
};

aliasModule();

const c = { ...test, sup: 'mate' };

console.log(c);
