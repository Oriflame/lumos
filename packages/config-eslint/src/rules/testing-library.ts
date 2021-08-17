import { ESLintConfig } from '@beemo/driver-eslint';

const config: ESLintConfig['rules'] = {
  // eslint-plugin-testing-library
  'testing-library/await-async-query': 'error', // enforce async queries to have proper await
  'testing-library/await-async-utils': 'error', // enforce async utils to be awaited properly
  'testing-library/await-fire-event': 'off', // enforce async fire event methods to be awaited
  'testing-library/consistent-data-testid': 'off', // ensure data-testid values match a provided regex
  'testing-library/no-await-sync-events': 'error', // disallow unnecessary await for sync events
  'testing-library/no-await-sync-query': 'error', // disallow unnecessary await for sync queries
  'testing-library/no-container': 'warn', // disallow the use of container methods
  'testing-library/no-debug': 'warn', // disallow the use of debug
  'testing-library/no-dom-import': ['error', 'react'], // disallow importing from DOM Testing Library
  'testing-library/no-manual-cleanup': 'off', // disallow the use of cleanup
  'testing-library/no-node-access': 'error', // disallow direct Node access
  'testing-library/no-promise-in-fire-event': 'error', // disallow the use of promises passed to a fireEvent method
  'testing-library/no-render-in-setup': 'off', // disallow the use of render in setup functions
  'testing-library/no-unnecessary-act': 'error', // disallow wrapping Testing Library utils or empty callbacks in act
  'testing-library/no-wait-for-empty-callback': 'off', // disallow empty callbacks for waitFor and waitForElementToBeRemoved
  'testing-library/no-wait-for-multiple-assertions': 'warn', // disallow the use of multiple expect inside waitFor
  'testing-library/no-wait-for-side-effects': 'warn', // disallow the use of side effects inside waitFor
  'testing-library/no-wait-for-snapshot': 'warn', // ensures no snapshot is generated inside of a waitFor call
  'testing-library/prefer-explicit-assert': 'warn', // suggest using explicit assertions rather than just getBy* queries
  'testing-library/prefer-find-by': 'warn', // suggest using findBy* methods instead of the waitFor + getBy queries
  'testing-library/prefer-presence-queries': 'off', // enforce specific queries when checking element is present or not
  'testing-library/prefer-query-by-disappearance': 'warn', // suggest using queryBy* queries when waiting for disappearance
  'testing-library/prefer-user-event': 'warn', // suggest using userEvent library instead of fireEvent for simulating user interaction
  'testing-library/prefer-screen-queries': 'off', // suggest using screen while using queries
  'testing-library/prefer-wait-for': 'error', // use waitFor instead of deprecated wait methods
  'testing-library/render-result-naming-convention': 'warn', // enforce a valid naming for return value from render
};

export = config;
