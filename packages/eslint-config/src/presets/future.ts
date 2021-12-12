import type eslint from 'eslint';

import unicornRules from '../rules/unicorn';

const config: eslint.Linter.Config = {
  extends: ['plugin:unicorn/recommended'],
  plugins: ['unicorn'],
  rules: {
    ...unicornRules,
  },
};

export default config;
