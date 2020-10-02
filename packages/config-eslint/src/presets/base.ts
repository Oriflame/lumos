import { Path } from '@beemo/core';
import { ESLintConfig } from '@beemo/driver-eslint';
import {
  ASSET_EXT_PATTERN,
  CSS_EXT_PATTERN,
  EXTS,
  EXTS_GROUP,
  GQL_EXT_PATTERN,
} from '@ori-open/lumos-common';

const config: ESLintConfig = {
  root: true,

  parser: 'babel-eslint',

  parserOptions: {
    requireConfigFile: false,
  },

  extends: ['airbnb', 'plugin:jsx-a11y/recommended'],

  plugins: ['import', 'react', 'react-hooks'],

  globals: {
    __DEV__: 'readonly',
    // Metrics and analytics providers
    ga: 'readonly',
    newrelic: 'readonly',
    // Mostly for easier compatibility between browsers, workers, etc
    global: 'readonly',
    // Mostly references to `process.env.NODE_ENV`
    process: 'readonly',
    // references for globalThis
    globalThis: 'readonly',
    // Webpack variables
    __webpack_public_path__: 'writeable',
    __webpack_require__: 'readonly',
    __webpack_chunk_load__: 'readonly',
    __webpack_modules__: 'readonly',
    __webpack_hash__: 'readonly',
    __non_webpack_require__: 'readonly',
    __webpack_exports_info__: 'readonly',
    DEBUG: 'readonly',
  },

  env: {
    browser: true,
    node: false,
  },

  reportUnusedDisableDirectives: true,

  settings: {
    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
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
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },

  overrides: [
    {
      files: [`*.test.${EXTS_GROUP}`],
      plugins: ['jest'],
      globals: {
        jsdom: 'readonly',
      },
      env: {
        jest: true,
        node: true,
      },
      rules: {
        'max-classes-per-file': 'off',
        'no-magic-numbers': 'off',
        'sort-keys': 'off',

        // JEST
        'jest/expect-expect': 'error',
        'jest/no-alias-methods': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-expect-resolves': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-todo': 'error',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/valid-describe': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'error',
      },
    },
  ],
};

export = config;
