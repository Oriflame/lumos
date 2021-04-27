import { ESLintConfig } from '@beemo/driver-eslint';

const config: ESLintConfig['rules'] = {
  // eslint-plugin-prettier rules
  'prettier/prettier': 'error',
};

export = config;
