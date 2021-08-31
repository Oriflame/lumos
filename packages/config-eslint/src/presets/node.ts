import { ESLintConfig } from '@beemo/driver-eslint';

import nodeRules from '../rules/node';

const config: ESLintConfig = {
  // TODO: this also sets up globals and `parserOptions.sourceType`, so we should decide in later versions of this config if we want to use this `extends`
  // extends: ['plugin:node/recommended'],

  env: {
    browser: false,
    node: true,
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.jsx', '.json'],
    },
    convertPath: {
      'src/**/*.ts': ['^src/(.+?)\\.ts$', 'lib/$1.js'],
      'src/**/*.tsx': ['^src/(.+?)\\.tsx$', 'lib/$1.js'],
    },
  },
  rules: {
    ...nodeRules,
  },
};

export = config;
