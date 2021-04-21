/* eslint-disable node/no-missing-import, import/no-unresolved, import/extensions -- we need it here */
/* eslint-disable no-console -- we need it here */
/* eslint-disable react/jsx-filename-extension -- we need it here */

import './test.css';

import mod from './test.module.css';
import aliasModule from '~/mdl';

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

const c = { ...test, ...{ sup: 'mate' } };

console.log(c);
