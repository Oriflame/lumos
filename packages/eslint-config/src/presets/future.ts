import type eslint from 'eslint';

import unicornRules from '../rules/unicorn';

const config: eslint.Linter.Config = {
  plugins: ['unicorn'],
  rules: {
    ...unicornRules,
  },
};

export default config;
