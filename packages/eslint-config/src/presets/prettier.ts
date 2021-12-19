import type eslint from 'eslint';

import prettierRules from '../rules/prettier';

const config: eslint.Linter.Config = {
  extends: ['eslint-config-prettier'],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    ...prettierRules,
  },
};

export default config;
