import { ESLintConfig } from '@beemo/driver-eslint';
import { TSX_EXTS_GROUP } from '@oriflame/lumos-common';

const config: ESLintConfig = {
  rules: {
    'node/no-sync': 'off',
    'node/global-require': 'off',
    'import/no-dynamic-require': 'off',
    'no-underscore-dangle': 'off',
    'eslint-comments/disable-enable-pair': 'off',
    'eslint-comments/no-aggregating-enable': 'off',
    'eslint-comments/no-duplicate-disable': 'off',
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'eslint-comments/no-unused-disable': 'off',
    'eslint-comments/no-unused-enable': 'off',
    'eslint-comments/no-use': 'off',
    'eslint-comments/require-description': 'off',
  },
  overrides: [
    {
      files: [`*.${TSX_EXTS_GROUP}`],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
      },
    },
  ],
};

export = config;
