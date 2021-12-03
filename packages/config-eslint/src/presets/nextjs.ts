import { ESLintConfig } from '@beemo/driver-eslint';

import nextjsRules from '../rules/nextjs';

const config: ESLintConfig = {
  extends: ['plugin:@next/next/recommended'],
  plugins: ['@next/next'],
  rules: {
    ...nextjsRules,
  },
};

export default config;
