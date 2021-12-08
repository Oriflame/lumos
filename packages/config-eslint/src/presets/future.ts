import { ESLintConfig } from '@beemo/driver-eslint';

import unicornRules from '../rules/unicorn';

const config: ESLintConfig = {
  extends: ['plugin:unicorn/recommended'],
  plugins: ['unicorn'],
  rules: {
    ...unicornRules,
  },
};

export default config;
