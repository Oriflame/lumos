import { Path } from '@beemo/core';
import { ESLintConfig } from '@beemo/driver-eslint';
import {
  ASSET_EXT_PATTERN,
  CSS_EXT_PATTERN,
  EXTS,
  GQL_EXT_PATTERN,
  TJSX_EXTS_GROUP,
} from '@oriflame/lumos-common';

import a11yRules from '../rules/a11y';
import eslintRules from '../rules/eslint';
import commentsRules from '../rules/eslint-comments';
import importRules from '../rules/import';
import jestRules from '../rules/jest';
import promiseRules from '../rules/promise';
import reactRules from '../rules/react';
import reactHooksRules from '../rules/react-hooks';
import testingLibraryRules from '../rules/testing-library';

const config: ESLintConfig = {
  root: true,

  parser: '@babel/eslint-parser',

  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // Extends list for base plugins
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-plugin-promise/recommended',
  ],
  // Required plugins; doesn't matter if they are used or not.
  plugins: ['import', 'react', 'react-hooks', 'jsx-a11y', 'node', 'eslint-comments', 'promise'],

  env: {
    browser: true,
    es2020: true,
    worker: true,
    serviceworker: true,
  },

  globals: {
    __DEV__: 'readonly',

    // metrics and analytics providers
    ga: 'readonly',
    newrelic: 'readonly',

    // mostly for easier compatibility between browsers, workers, etc
    global: 'readonly',

    // mostly references to `process.env.NODE_ENV`
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

  reportUnusedDisableDirectives: true,

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
    react: {
      version: 'detect',
    },
    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
  },

  rules: {
    ...eslintRules,
    ...commentsRules,
    ...promiseRules,
    ...importRules,
    ...reactRules,
    ...reactHooksRules,
    ...a11yRules,
  },
  overrides: [
    {
      files: [`*.test.${TJSX_EXTS_GROUP}`],

      plugins: ['jest', 'testing-library'],

      extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],

      settings: {
        'testing-library/custom-queries': 'off',
        'testing-library/custom-renders': 'off',
        'testing-library/utils-module': 'off',
      },

      globals: {
        jsdom: 'readonly',
      },

      env: {
        jest: true,
        node: true,
      },
      rules: {
        ...jestRules,
        ...testingLibraryRules,
      },
    },
  ],
};

export = config;
