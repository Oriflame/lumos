import { TJSX_EXTS_GROUP } from '@oriflame/lumos-common';
import type eslint from 'eslint';

import a11yRules from '../rules/a11y';
import eslintRules from '../rules/eslint';
import commentsRules from '../rules/eslint-comments';
import importRules from '../rules/import';
import jestRules from '../rules/jest';
import promiseRules from '../rules/promise';
import reactRules from '../rules/react';
import reactHooksRules from '../rules/react-hooks';
import testingLibraryRules from '../rules/testing-library';

const config: eslint.Linter.Config = {
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

export default config;
