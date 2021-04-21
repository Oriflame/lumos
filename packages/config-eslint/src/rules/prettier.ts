import { ESLintConfig } from '@beemo/driver-eslint';

const config: ESLintConfig = {
  extends: ['eslint-config-prettier'],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    // eslint-plugin-prettier rules
    'prettier/prettier': 'error',
  },
};

export = config;
