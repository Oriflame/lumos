import { ESLintConfig } from '@beemo/driver-eslint';

import nodeRules from '../rules/node';

const config: ESLintConfig = {
  env: {
    browser: false,
    node: true,
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.jsx', '.json'],
    },
  },
  rules: {
    ...nodeRules,
  },
};

export = config;
