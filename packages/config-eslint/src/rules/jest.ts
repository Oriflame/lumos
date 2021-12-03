import { ESLintConfig } from '@beemo/driver-eslint';

const config: ESLintConfig['rules'] = {
  // override ESLint rules
  'max-classes-per-file': 'off',

  // override eslint-plugin-node rules
  'node/no-sync': 'off', // disallow synchronous methods

  // override @typescript-eslint/eslint-plugin rules
  '@typescript-eslint/ban-ts-comment': 'off', // bans // @ts-<directive> comments from being used
  '@typescript-eslint/no-floating-promises': 'off', // requires Promise-like values to be handled appropriately
  '@typescript-eslint/unbound-method': 'off', // enforces unbound methods are called with their expected scope

  // eslint-plugin-jest
  'jest/consistent-test-it': 'off', // have control over test and it usages
  'jest/expect-expect': 'warn', // enforce assertion to be made in a test body
  'jest/lowercase-name': 'off', // enforce lowercase test names
  'jest/max-nested-describe': [
    'error',
    {
      max: 3,
    },
  ], // enforces a maximum depth to nested describe calls
  'jest/no-alias-methods': 'warn', // disallow alias methods
  'jest/no-commented-out-tests': 'warn', // disallow commented out tests
  'jest/no-conditional-expect': 'error', // prevent calling expect conditionally
  'jest/no-deprecated-functions': 'error', // disallow use of deprecated functions
  'jest/no-disabled-tests': 'warn', // disallow disabled tests
  'jest/no-done-callback': 'warn', // avoid using a callback in asynchronous tests and hooks
  'jest/no-duplicate-hooks': 'error', // disallow duplicate setup and teardown hooks
  'jest/no-export': 'error', // disallow using exports in files containing tests
  'jest/no-focused-tests': 'error', // disallow focused tests
  'jest/no-hooks': 'off', // disallow setup and teardown hooks
  'jest/no-identical-title': 'error', // disallow identical titles
  'jest/no-if': 'error', // disallow conditional logic
  'jest/no-interpolation-in-snapshots': 'error', // disallow string interpolation inside snapshots
  'jest/no-jasmine-globals': 'error', // disallow Jasmine globals
  'jest/no-jest-import': 'error', // disallow importing Jest
  'jest/no-large-snapshots': 'off', // disallow large snapshots
  'jest/no-mocks-import': 'error', // disallow manually importing from __mocks__
  'jest/no-restricted-matchers': 'off', // disallow specific matchers & modifiers
  'jest/no-standalone-expect': 'error', // disallow using expect outside of it or test blocks
  'jest/no-test-prefixes': 'error', // use .only and .skip over f and x
  'jest/no-test-return-statement': 'error', // disallow explicitly returning from tests
  'jest/prefer-called-with': 'warn', // suggest using toBeCalledWith() or toHaveBeenCalledWith()
  'jest/prefer-expect-assertions': 'off', // suggest using expect.assertions() OR expect.hasAssertions()
  'jest/prefer-hooks-on-top': 'warn', // suggest having hooks before any test cases
  'jest/prefer-spy-on': 'error', // suggest using jest.spyOn()
  'jest/prefer-strict-equal': 'off', // suggest using toStrictEqual()
  'jest/prefer-to-contain': 'warn', // suggest using toContain()
  'jest/prefer-to-have-length': 'warn', // suggest using toHaveLength()
  'jest/prefer-todo': 'warn', // suggest using test.todo
  'jest/require-to-throw-message': 'error', // require a message for toThrow()
  'jest/require-top-level-describe': 'error', // require test cases and hooks to be inside a describe block
  'jest/unbound-method': 'error', // enforces unbound methods are called with their expected scope
  'jest/valid-describe-callback': 'error', // enforce valid describe() callback
  'jest/prefer-lowercase-title': ['warn', { allowedPrefixes: [], ignoreTopLevelDescribe: true }], // enforce valid describe() callback
  'jest/valid-expect': ['error', { alwaysAwait: true }], // enforce valid expect() usage
  'jest/valid-expect-in-promise': 'error', // enforce having return statement when testing with promises
  'jest/valid-title': 'warn', // enforce valid titles
};

export default config;
