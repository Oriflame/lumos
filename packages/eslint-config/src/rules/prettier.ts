import type eslint from 'eslint';

const config: eslint.Linter.Config['rules'] = {
  // eslint-plugin-prettier rules
  'prettier/prettier': 'error',
};

export default config;
