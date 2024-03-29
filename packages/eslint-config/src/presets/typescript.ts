import {
  EXTS,
  TSX_EXTS_GROUP,
  ROOT,
  getRootProjectReferences,
  TSCONFIG_JSON_PATH,
} from '@oriflame/lumos-common';
import type eslint from 'eslint';
import fs from 'fs';
import path from 'path';

import typescriptRules from '../rules/typescript';

let project: string[] | string = '';

// Some very large projects will run out of memory when using project references,
// so we support a custom tsconfig to work around this issue.
const tsConfigEslintPath = path.join(ROOT, 'tsconfig.eslint.json');

if (fs.existsSync(tsConfigEslintPath)) {
  project = tsConfigEslintPath;
}

// Otherwise, if the consumer is using project references, we need to include a path
// to every tsconfig.json in the graph.
if (!project) {
  project =
    getRootProjectReferences()?.map((ref) => path.join(ROOT, ref.path, 'tsconfig.json')) ??
    TSCONFIG_JSON_PATH;
}

const config: eslint.Linter.Config = {
  overrides: [
    {
      files: [`*.${TSX_EXTS_GROUP}`],

      plugins: ['@typescript-eslint'],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        project,
        // Fixed issue with webstorm
        tsconfigRootDir: process.cwd(),
      },

      settings: {
        node: {
          tryExtensions: EXTS,
        },
        'import/resolver': {
          typescript: {},
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.cts'],
        },
      },
      rules: {
        ...typescriptRules,
      },
    },
    {
      files: [`*.test.${TSX_EXTS_GROUP}`],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/naming-convention': [
          'warn',
          // interfaces cannot start with "I"
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
          // variables and parameters must use camel case, pascal case or upper case with no leading and trailing underscores - exceptions are names that are only underscores (used e.g. for placeholder parameters)
          {
            selector: 'variableLike',
            format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
            filter: {
              regex: '^(_+|__webpack_public_path__)$',
              match: false,
            },
          },
          // functions must use camel case or pascal case with no leading and trailing underscores
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'memberLike',
            format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
            filter: {
              regex: '__typename|^&|^..+', // don't check: GraphQL specific property, properties used as CSS selectors
              match: false,
            },
          },
          // "type-like" (i.e. interface, enum, etc.) must use pascal case
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
      },
    },
  ],
};

export default config;
