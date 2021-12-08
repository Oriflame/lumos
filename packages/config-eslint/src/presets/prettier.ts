import { ESLintConfig } from '@beemo/driver-eslint';

import prettierRules from '../rules/prettier';

const config: ESLintConfig = {
  extends: ['eslint-config-prettier'],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    ...prettierRules,
  },
};

export default config;
