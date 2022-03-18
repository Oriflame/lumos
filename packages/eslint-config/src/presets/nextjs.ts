import type eslint from 'eslint';

import nextjsRules from '../rules/nextjs';

const config: eslint.Linter.Config = {
  plugins: ['@next/next'],
  rules: {
    ...nextjsRules,
  },
};

export default config;
