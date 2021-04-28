import { ESLintConfig } from '@beemo/driver-eslint';

const config: ESLintConfig['rules'] = {
  // override ESLint rules which are deprecated (because they were moved to eslint-plugin-node), but turned on in AirBnB config
  'global-require': 'off',
  'no-buffer-constructor': 'off',
  'no-new-require': 'off',
  'no-path-concat': 'off',

  // eslint-plugin-node rules
  'node/callback-return': 'warn', // require return statements after callbacks
  'node/exports-style': 'off', // enforce either module.exports or exports
  'node/file-extension-in-import': ['error', 'always', { '.js': 'never', '.jsx': 'never' }], // enforce the style of file extensions in import declarations
  'node/global-require': 'warn', // require require() calls to be placed at top-level module scope
  'node/handle-callback-err': 'warn', // require error handling in callbacks
  'node/no-callback-literal': 'off', // ensure Node.js-style error-first callback pattern is followed
  'node/no-deprecated-api': 'error', // disallow deprecated APIs
  'node/no-exports-assign': 'error', // disallow the assignment to exports
  'node/no-extraneous-import': 'off', // disallow import declarations which import extraneous modules
  'node/no-extraneous-require': 'off', // disallow require() expressions which import extraneous modules
  'node/no-missing-import': 'error', // disallow import declarations which import non-existence modules
  'node/no-missing-require': 'error', // disallow require() expressions which import non-existence modules
  'node/no-mixed-requires': 'warn', // disallow require calls to be mixed with regular variable declarations
  'node/no-new-require': 'warn', // disallow new operators with calls to require
  'node/no-path-concat': 'warn', // disallow string concatenation with __dirname and __filename
  'node/no-process-env': 'off', // disallow the use of process.env
  'node/no-process-exit': 'warn', // disallow the use of process.exit()
  'node/no-restricted-import': 'off', // disallow specified modules when loaded by import declarations
  'node/no-restricted-require': 'off', // disallow specified modules when loaded by require
  'node/no-sync': 'warn', // disallow synchronous methods
  'node/no-unpublished-bin': 'off', // disallow bin files that npm ignores
  'node/no-unpublished-import': 'off', // disallow import declarations which import private modules
  'node/no-unpublished-require': 'off', // disallow require() expressions which import private modules
  'node/no-unsupported-features/es-builtins': ['error', { ignores: [], version: '>=14.0.0' }], // disallow unsupported ECMAScript built-ins on the specified version
  'node/no-unsupported-features/es-syntax': [
    'error',
    { ignores: ['modules', 'dynamicImport'], version: '>=14.0.0' },
  ], // disallow unsupported ECMAScript syntax on the specified version
  'node/no-unsupported-features/node-builtins': ['error', { ignores: [], version: '>=14.0.0' }], // disallow unsupported Node.js built-in APIs on the specified version
  'node/prefer-global/buffer': 'warn', // enforce either Buffer or require("buffer").Buffer
  'node/prefer-global/console': 'warn', // enforce either console or require("console")
  'node/prefer-global/process': 'warn', // enforce either process or require("process")
  'node/prefer-global/text-decoder': 'warn', // enforce either TextDecoder or require("util").TextDecoder
  'node/prefer-global/text-encoder': 'warn', // enforce either TextEncoder or require("util").TextEncoder
  'node/prefer-global/url': 'warn', // enforce either URL or require("url").URL
  'node/prefer-global/url-search-params': 'warn', // enforce either URLSearchParams or require("url").URLSearchParams
  'node/prefer-promises/dns': 'error', // enforce require("dns").promises
  'node/prefer-promises/fs': 'error', // enforce require("fs").promises
  'node/process-exit-as-throw': 'off', // make process.exit() expressions the same code path as throw
  'node/shebang': 'warn', // suggest correct usage of shebang
};

export = config;
