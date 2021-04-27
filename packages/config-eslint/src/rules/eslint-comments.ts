import { ESLintConfig } from '@beemo/driver-eslint';

const config: ESLintConfig['rules'] = {
  // eslint-plugin-eslint-comments rules
  'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }], // require a eslint-enable comment for every eslint-disable comment
  'eslint-comments/no-aggregating-enable': 'error', // disallow a eslint-enable comment for multiple eslint-disable comments
  'eslint-comments/no-duplicate-disable': 'error', // disallow duplicate eslint-disable comments
  'eslint-comments/no-restricted-disable': 'off', // disallow eslint-disable comments about specific rules
  'eslint-comments/no-unlimited-disable': 'error', // disallow eslint-disable comments without rule names
  'eslint-comments/no-unused-disable': 'off', // disallow unused eslint-disable comments
  'eslint-comments/no-unused-enable': 'error', // disallow unused eslint-enable comments
  'eslint-comments/no-use': 'off', // disallow ESLint directive-comments
  'eslint-comments/require-description': ['error', { ignore: ['eslint-enable'] }], // require include descriptions in ESLint directive-comments
};

export = config;
