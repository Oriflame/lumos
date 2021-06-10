import { ESLintConfig } from '@beemo/driver-eslint';

const config: ESLintConfig['rules'] = {
  // ESLint rules
  'arrow-body-style': ['warn', 'as-needed'], // require braces around arrow function bodies
  camelcase: ['warn', { properties: 'always' }], // enforce camelcase naming convention
  'class-methods-use-this': 'warn', // enforce that class methods utilize this
  complexity: ['warn', 20], // enforce a maximum cyclomatic complexity allowed in a program
  curly: ['error', 'all'], // enforce consistent brace style for all control statements
  'default-case': 'warn', // require default cases in switch statements
  'default-case-last': 'warn', // enforce default clauses in switch statements to be last
  'default-param-last': 'warn', // enforce default parameters to be last
  eqeqeq: ['error', 'smart'], // require the use of === and !==
  'func-name-matching': ['error', 'always', { considerPropertyDescriptor: true }], // require function names to match the name of the variable or property to which they are assigned
  'func-style': ['warn', 'declaration', { allowArrowFunctions: true }], // enforce the consistent use of either function declarations or expressions
  'grouped-accessor-pairs': 'warn', // require grouped accessor pairs in object literals and classes
  'id-denylist': [
    'error',
    'any',
    'Number',
    'number',
    'String',
    'string',
    'Boolean',
    'boolean',
    'Undefined',
    'undefined',
  ], // disallow specified identifiers
  'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }], // require or disallow an empty line between class members
  'max-classes-per-file': ['warn', 1], // enforce a maximum number of classes per file
  'max-params': ['warn', 3], // enforce a maximum number of parameters in function definitions
  'new-cap': 'warn', // require constructor names to begin with a capital letter
  'no-alert': 'error', // disallow the use of alert, confirm, and prompt
  'no-array-constructor': 'warn', // disallow Array constructors
  'no-await-in-loop': 'warn', // disallow await inside of loops
  'no-constructor-return': 'warn', // disallow returning value from constructor
  'no-continue': 'off', // disallow continue statements
  'no-div-regex': 'warn', // disallow division operators explicitly at the beginning of regular expressions
  'no-dupe-else-if': 'error', // disallow duplicate conditions in if-else-if chains
  'no-duplicate-imports': 'error', // disallow duplicate module imports
  'no-else-return': 'error', // disallow `else` blocks after `return` statements in `if` statements
  'no-empty-function': 'error', // disallow empty functions
  'no-eq-null': 'off', // disallow null comparisons without type-checking operators
  'no-extra-boolean-cast': 'error', // disallow unnecessary boolean casts
  'no-implicit-globals': 'error', // disallow declarations in the global scope
  'no-import-assign': 'error', // disallow assigning to imported bindings
  'no-invalid-this': 'error', // disallow this keywords outside of classes or class-like objects
  'no-loss-of-precision': 'error', // disallow literal numbers that lose precision
  'no-negated-condition': 'error', // disallow negated conditions
  'no-nonoctal-decimal-escape': 'error', // disallow `\8` and `\9` escape sequences in string literals
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // disallow the unary operators `++` and `--`
  'no-promise-executor-return': 'error', // disallow returning values from Promise executor functions
  'no-prototype-builtins': 'warn', // disallow calling some Object.prototype methods directly on objects
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: [
        'then', // this will cause tons of confusion when your module is dynamically `import()`ed
      ],
    },
  ], // disallow specified names in exports
  'no-restricted-syntax': 'off', // disallow specified syntax
  'no-sequences': ['error', { allowInParentheses: false }], // disallow comma operators
  'no-setter-return': 'error', // disallow returning values from setters
  'no-shadow': ['warn', { allow: ['resolve, reject'] }], // disallow variable declarations from shadowing variables declared in the outer scope
  'no-underscore-dangle': 'error', // disallow dangling underscores in identifiers
  'no-unexpected-multiline': 'warn', // disallow confusing multiline expressions
  'no-unmodified-loop-condition': 'warn', // disallow unmodified loop conditions
  'no-unreachable-loop': 'warn', // disallow loops with a body that allows only one iteration
  'no-unsafe-optional-chaining': 'error', // disallow use of optional chaining in contexts where the `undefined` value is not allowed
  'no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTernary: true, enforceForJSX: true },
  ], // disallow unused expressions
  'no-unused-vars': ['error', { vars: 'local', args: 'after-used' }], // disallow unused variables
  'no-use-before-define': 'error', // disallow the use of variables before they are defined
  'no-useless-backreference': 'warn', // disallow useless backreferences in regular expressions
  'no-useless-call': 'error', // disallow unnecessary calls to .call() and .apply()
  'no-void': 'off', // disallow void operators
  'no-warning-comments': ['warn', { terms: ['todo:', 'fixme:', 'debug:'], location: 'start' }], // disallow specified warning terms in comments
  'padding-line-between-statements': [
    'warn',
    { blankLine: 'always', prev: '*', next: 'return' },
    { blankLine: 'always', prev: 'import', next: '*' },
    { blankLine: 'any', prev: 'import', next: 'import' },
  ], // require or disallow padding lines between statements
  'prefer-const': 'error', // require const declarations for variables that are never reassigned after declared
  'prefer-exponentiation-operator': 'error', // disallow the use of `Math.pow` in favor of the `**` operator
  'prefer-promise-reject-errors': 'error', // require using Error objects as Promise rejection reasons
  'prefer-regex-literals': 'error', // disallow use of the RegExp constructor in favor of regular expression literals
  quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }], // enforce the consistent use of either backticks, double, or single quotes
  'require-atomic-updates': 'warn', // disallow assignments that can lead to race conditions due to usage of await or yield
  'require-unicode-regexp': 'off', // enforce the use of `u` flag on RegExp
  'sort-imports': [
    'warn',
    {
      ignoreCase: true,
      memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple'],
      allowSeparatedGroups: true,
    },
  ], // enforce sorted import declarations within modules
  'spaced-comment': ['warn', 'always'], // enforce consistent spacing after the `//` or `/*` in a comment
};

export = config;
