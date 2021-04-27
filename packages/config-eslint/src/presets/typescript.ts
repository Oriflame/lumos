import { ESLintConfig } from '@beemo/driver-eslint';
import { EXTS, TSX_EXTS_GROUP, fromRoot } from '@oriflame/lumos-common';

import typescriptRules from '../rules/typescript';

const project = fromRoot('tsconfig.eslint.json', true) || fromRoot('tsconfig.json');

const config: ESLintConfig = {
  overrides: [
    {
      files: [`*.${TSX_EXTS_GROUP}`],

      plugins: ['@typescript-eslint'],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        project,
      },

      settings: {
        node: {
          tryExtensions: EXTS,
        },
        'import/resolver': {
          typescript: {},
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
      rules: {
        ...typescriptRules,
      },
    },
  ],
};

export = config;
