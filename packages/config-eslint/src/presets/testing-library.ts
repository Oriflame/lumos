import { ESLintConfig } from '@beemo/driver-eslint';
import { EXTS_GROUP } from '@ori-open/lumos-common';

const config: ESLintConfig = {
  extends: ['plugin:testing-library/react'],
  plugins: ['testing-library'],
  overrides: [
    {
      files: [`*.test.${EXTS_GROUP}`],
      rules: {
        'jest/expect-expect': 'warn',
      },
    },
  ],
};

export = config;
