import type eslint from 'eslint';

import nodeRules from '../rules/node';

const config: eslint.Linter.Config = {
  env: {
    browser: false,
    node: true,
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.jsx', '.json', '.mjs', '.cjs'],
    },
    convertPath: {
      'src/**/*.ts': ['^src/(.+?)\\.ts$', 'lib/$1.js'],
      'src/**/*.tsx': ['^src/(.+?)\\.tsx$', 'lib/$1.js'],
      'src/**/*.mts': ['^src/(.+?)\\.ts$', 'esm/$1.js'],
      'src/**/*.cts': ['^src/(.+?)\\.tsx$', 'lib/$1.js'],
    },
  },
  rules: {
    ...nodeRules,
  },
};

export default config;
