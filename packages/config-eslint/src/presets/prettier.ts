import { ESLintConfig } from '@beemo/driver-eslint';

const config: ESLintConfig = {
  extends: ['prettier'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error',
  },
};

export = config;
