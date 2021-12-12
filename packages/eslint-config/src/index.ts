import { ASSET_EXT_PATTERN, CSS_EXT_PATTERN, EXTS, GQL_EXT_PATTERN } from '@oriflame/lumos-common';
import type eslint from 'eslint';
import path from 'path';

const config: eslint.Linter.Config = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-plugin-promise/recommended',
    // eslint-disable-next-line node/no-missing-require -- needed
    require.resolve('./presets/base.js'),
  ],
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
      [path.resolve('../resolvers/graphql.js', __dirname)]: {
        extensions: ['.gql', '.graphql'],
      },
    },
    react: {
      version: 'detect',
    },
    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
  },

  reportUnusedDisableDirectives: true,
  // We cant define rules here otherwise they override the ones
  // in the extending configs above. This is bad for actual `overrides`!
  rules: {},
};

export default config;