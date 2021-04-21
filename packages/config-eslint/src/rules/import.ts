import { Path } from '@beemo/core';
import { ESLintConfig } from '@beemo/driver-eslint';
import { ASSET_EXT_PATTERN, CSS_EXT_PATTERN, EXTS, GQL_EXT_PATTERN } from '@oriflame/lumos-common';

const config: ESLintConfig = {
  plugins: ['eslint-plugin-import'],
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.json$',
      ASSET_EXT_PATTERN.source,
      CSS_EXT_PATTERN.source,
      GQL_EXT_PATTERN.source,
    ],
    'import/extensions': EXTS,
    'import/resolver': {
      node: {
        extensions: EXTS,
      },
      [Path.resolve('../resolvers/graphql.js', __dirname).path()]: {
        extensions: ['.gql', '.graphql'],
      },
    },
  },
  rules: {
    // override ESLint rules
    'no-duplicate-imports': 'off', // disallow duplicate module imports
    'sort-imports': 'off', // enforce sorted import declarations within modules

    // eslint-plugin-import rules
    'import/extensions': ['error', 'always', { js: 'never', jsx: 'never', mjs: 'never' }], // ensure consistent use of file extension within the import path
    'import/first': 'error', // ensure all imports appear before other statements
    /* TODO: enable this when https://github.com/benmosher/eslint-plugin-import/issues/1998 is fixed - 'import/named': 'error', // ensure named imports correspond to a named export in the remote file. */
    'import/named': 'off', // ensure named imports correspond to a named export in the remote file.
    'import/newline-after-import': 'warn', // enforce a newline after import statements
    'import/no-named-as-default': 'off', // report use of exported name as identifier of default export
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }], // prevent unnecessary path segments in import and require statements
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ], // enforce a convention in module import order
    'import/prefer-default-export': 'off', // prefer a default export if module exports a single name
  },
};

export = config;
