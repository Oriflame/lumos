import type eslint from 'eslint';

import nextjsRules from '../rules/nextjs';

const config: eslint.Linter.Config = {
  extends: ['plugin:@next/next/recommended'],
  plugins: ['@next/next'],
  rules: {
    ...nextjsRules,
  },
};

export default config;
