import { ESLintConfig } from '@beemo/driver-eslint';
import { JSX_EXTS_GROUP } from '@oriflame/lumos-common';

const config: ESLintConfig['rules'] = {
  // override ESLint rules
  'no-duplicate-imports': 'off', // disallow duplicate module imports
  'sort-imports': 'off', // enforce sorted import declarations within modules

  // eslint-plugin-import rules
  'import/extensions': ['error', 'always', { js: 'never', jsx: 'never', mjs: 'never' }], // ensure consistent use of file extension within the import path
  'import/first': 'error', // ensure all imports appear before other statements
  /* TODO [enable this when https://github.com/benmosher/eslint-plugin-import/issues/1998 is fixed]: 'import/named': 'error', // ensure named imports correspond to a named export in the remote file. */
  'import/named': 'off', // ensure named imports correspond to a named export in the remote file.
  'import/newline-after-import': 'warn', // enforce a newline after import statements
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        `test/**/*.${JSX_EXTS_GROUP}`,
        `tests/**/*.${JSX_EXTS_GROUP}`,
        `**/*.test.${JSX_EXTS_GROUP}`,
        `__tests__/**/*.${JSX_EXTS_GROUP}`,
        `**/__tests__/**/*.${JSX_EXTS_GROUP}`,
        `**/jest.config.${JSX_EXTS_GROUP}`,
        `**/webpack.config.${JSX_EXTS_GROUP}`,
        `**/webpack.config.*.${JSX_EXTS_GROUP}`,
        `tools/**/*.${JSX_EXTS_GROUP}`,
      ],
      optionalDependencies: false,
    },
  ], // forbid the use of extraneous packages
  'import/no-named-as-default': 'off', // report use of exported name as identifier of default export
  /* TODO [enable this when https://github.com/benmosher/eslint-plugin-import/issues/2081 is fixed]: 'import/no-relative-packages': 'error', // prevent importing packages through relative paths */
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
};

export = config;
