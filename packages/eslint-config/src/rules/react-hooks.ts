import type eslint from 'eslint';

const config: eslint.Linter.Config['rules'] = {
  // eslint-plugin-react-hooks rules
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/rules-of-hooks': 'error',
};

export default config;
