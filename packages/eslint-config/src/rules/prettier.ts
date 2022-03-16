import type eslint from 'eslint';

const config: eslint.Linter.Config['rules'] = {
  // eslint-plugin-prettier rules
  'prettier/prettier': 'error',

  // re-enable ESLint rules
  curly: ['error', 'all'], // enforce consistent brace style for all control statements
};

export default config;
