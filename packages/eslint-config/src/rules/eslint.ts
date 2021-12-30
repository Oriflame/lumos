import confusingBrowserGlobals from 'confusing-browser-globals';
import type eslint from 'eslint';

const config: eslint.Linter.Config['rules'] = {
  // ESLint rules
  'accessor-pairs': 'off', // enforce getter and setter pairs in objects and classes
  'array-bracket-newline': 'off', // enforce linebreaks after opening and before closing array brackets
  'array-bracket-spacing': 'off', // enforce consistent spacing inside array brackets
  'array-callback-return': ['error', { allowImplicit: true }], // enforce return statements in callbacks of array methods
  'array-element-newline': 'off', // enforce line breaks after each array element
  'arrow-body-style': ['warn', 'as-needed'], // require braces around arrow function bodies
  'arrow-parens': 'off', // require parentheses around arrow function arguments
  'arrow-spacing': 'off', // enforce consistent spacing before and after the arrow in arrow functions
  'block-scoped-var': 'error', // enforce the use of variables within the scope they are defined
  'block-spacing': 'off', // disallow or enforce spaces inside of blocks after opening block and before closing block
  'brace-style': 'off', // enforce consistent brace style for blocks
  camelcase: ['warn', { properties: 'always' }], // enforce camelcase naming convention
  'capitalized-comments': 'off', // enforce or disallow capitalization of the first letter of a comment
  'class-methods-use-this': 'warn', // enforce that class methods utilize this
  'comma-dangle': 'off', // require or disallow trailing commas
  'comma-spacing': 'off', // enforce consistent spacing before and after commas
  'comma-style': 'off', // enforce consistent comma style
  complexity: ['warn', 20], // enforce a maximum cyclomatic complexity allowed in a program
  'computed-property-spacing': 'off', // enforce consistent spacing inside computed property brackets
  'consistent-return': 'error', // require return statements to either always or never specify values
  'consistent-this': 'off', // enforce consistent naming when capturing the current execution context
  'constructor-super': 'error', // require super() calls in constructors
  curly: ['error', 'all'], // enforce consistent brace style for all control statements
  'default-case': 'warn', // require default cases in switch statements
  'default-case-last': 'warn', // enforce default clauses in switch statements to be last
  'default-param-last': 'warn', // enforce default parameters to be last
  'dot-location': 'off', // enforce consistent newlines before and after dots
  'dot-notation': ['error', { allowKeywords: true }], // enforce dot notation whenever possible
  'eol-last': 'off', // require or disallow newline at the end of files
  eqeqeq: ['error', 'smart'], // require the use of === and !==
  'for-direction': 'error', // enforce `for` loop update clause moving the counter in the right direction
  'func-call-spacing': 'off', // require or disallow spacing between function identifiers and their invocations
  'func-name-matching': ['error', 'always', { considerPropertyDescriptor: true }], // require function names to match the name of the variable or property to which they are assigned
  'func-names': 'warn', // require or disallow named function expressions
  'func-style': ['warn', 'declaration', { allowArrowFunctions: true }], // enforce the consistent use of either function declarations or expressions
  'function-call-argument-newline': 'off', // enforce line breaks between arguments of a function call
  'function-paren-newline': 'off', // enforce consistent line breaks inside function parentheses
  'generator-star-spacing': 'off', // enforce consistent spacing around `*` operators in generator functions
  'getter-return': ['error', { allowImplicit: true }], // enforce return statements in getters
  'grouped-accessor-pairs': 'warn', // require grouped accessor pairs in object literals and classes
  'guard-for-in': 'error', // require `for-in` loops to include an `if` statement
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
  'id-length': 'off', // enforce minimum and maximum identifier lengths
  'id-match': 'off', // require identifiers to match a specified regular expression
  'implicit-arrow-linebreak': 'off', // enforce the location of arrow function bodies
  indent: 'off', // enforce consistent indentation
  'init-declarations': 'off', // require or disallow initialization in variable declarations
  'jsx-quotes': 'off', // enforce the consistent use of either double or single quotes in JSX attributes
  'key-spacing': 'off', // enforce consistent spacing between keys and values in object literal properties
  'keyword-spacing': 'off', // enforce consistent spacing before and after keywords
  'line-comment-position': 'off', // enforce position of line comments
  'linebreak-style': 'off', // enforce consistent linebreak style
  'lines-around-comment': 'off', // require empty lines around comments
  'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }], // require or disallow an empty line between class members
  'max-classes-per-file': ['warn', 1], // enforce a maximum number of classes per file
  'max-depth': 'off', // enforce a maximum depth that blocks can be nested
  'max-len': 'off', // enforce a maximum line length
  'max-lines': 'off', // enforce a maximum number of lines per file
  'max-lines-per-function': 'off', // enforce a maximum number of line of code in a function
  'max-nested-callbacks': 'off', // enforce a maximum depth that callbacks can be nested
  'max-params': ['warn', 3], // enforce a maximum number of parameters in function definitions
  'max-statements': 'off', // enforce a maximum number of statements allowed in function blocks
  'max-statements-per-line': 'off', // enforce a maximum number of statements allowed per line
  'multiline-comment-style': 'off', // enforce a particular style for multiline comments
  'multiline-ternary': 'off', // enforce newlines between operands of ternary expressions
  'new-cap': 'warn', // require constructor names to begin with a capital letter
  'new-parens': 'off', // enforce or disallow parentheses when invoking a constructor with no arguments
  'newline-per-chained-call': 'off', // require a newline after each call in a method chain
  'no-alert': 'error', // disallow the use of alert, confirm, and prompt
  'no-array-constructor': 'warn', // disallow Array constructors
  'no-async-promise-executor': 'error', // disallow using an async function as a Promise executor
  'no-await-in-loop': 'warn', // disallow await inside of loops
  'no-bitwise': 'error', // disallow bitwise operators
  'no-caller': 'error', // disallow the use of arguments.caller or arguments.callee
  'no-case-declarations': 'error', // disallow lexical declarations in case clauses
  'no-class-assign': 'error', // disallow reassigning class members
  'no-compare-neg-zero': 'error', // disallow comparing against -0
  'no-cond-assign': ['error', 'always'], // disallow assignment operators in conditional expressions
  'no-confusing-arrow': 'off', // disallow arrow functions where they could be confused with comparisons
  'no-console': 'warn', // disallow the use of console
  'no-const-assign': 'error', // disallow reassigning const variables
  'no-constant-condition': 'warn', // disallow constant expressions in conditions
  'no-constructor-return': 'warn', // disallow returning value from constructor
  'no-continue': 'off', // disallow continue statements
  'no-control-regex': 'error', // disallow control characters in regular expressions
  'no-debugger': 'error', // disallow the use of debugger
  'no-delete-var': 'error', // disallow deleting variables
  'no-div-regex': 'warn', // disallow division operators explicitly at the beginning of regular expressions
  'no-dupe-args': 'error', // disallow duplicate arguments in function definitions
  'no-dupe-class-members': 'error', // disallow duplicate class members
  'no-dupe-else-if': 'error', // disallow duplicate conditions in if-else-if chains
  'no-dupe-keys': 'error', // disallow duplicate keys in object literals
  'no-duplicate-case': 'error', // disallow duplicate case labels
  'no-duplicate-imports': 'error', // disallow duplicate module imports
  'no-else-return': 'error', // disallow `else` blocks after `return` statements in `if` statements
  'no-empty': 'error', // disallow empty block statements
  'no-empty-character-class': 'error', // disallow empty character classes in regular expressions
  'no-empty-function': 'error', // disallow empty functions
  'no-empty-pattern': 'error', // disallow empty destructuring patterns
  'no-eq-null': 'off', // disallow null comparisons without type-checking operators
  'no-eval': 'error', // disallow the use of eval()
  'no-ex-assign': 'error', // disallow reassigning exceptions in catch clauses
  'no-extend-native': 'error', // disallow extending native types
  'no-extra-bind': 'error', // disallow unnecessary calls to .bind()
  'no-extra-boolean-cast': 'error', // disallow unnecessary boolean casts
  'no-extra-label': 'error', // disallow unnecessary labels
  'no-extra-parens': 'off', // disallow unnecessary parentheses
  'no-extra-semi': 'off', // disallow unnecessary semicolons
  'no-fallthrough': 'error', // disallow fallthrough of case statements
  'no-floating-decimal': 'off', // disallow leading or trailing decimal points in numeric literals
  'no-func-assign': 'error', // disallow reassigning function declarations
  'no-global-assign': 'error', // disallow assignments to native objects or read-only global variables
  'no-implicit-coercion': 'off', // disallow shorthand type conversions
  'no-implicit-globals': 'error', // disallow declarations in the global scope
  'no-implied-eval': 'error', // disallow the use of eval()-like methods
  'no-import-assign': 'error', // disallow assigning to imported bindings
  'no-inline-comments': 'off', // disallow inline comments after code
  'no-inner-declarations': 'error', // disallow variable or function declarations in nested blocks
  'no-invalid-regexp': 'error', // disallow invalid regular expression strings in RegExp constructors
  'no-invalid-this': 'error', // disallow this keywords outside of classes or class-like objects
  'no-irregular-whitespace': 'error', // disallow irregular whitespace
  'no-iterator': 'error', // disallow the use of the __iterator__ property
  'no-label-var': 'error', // disallow labels that share a name with a variable
  'no-labels': 'error', // disallow labeled statements
  'no-lone-blocks': 'error', // disallow unnecessary nested blocks
  'no-lonely-if': 'error', // disallow if statements as the only statement in else blocks
  'no-loop-func': 'error', // disallow function declarations that contain unsafe references inside loop statements
  'no-loss-of-precision': 'error', // disallow literal numbers that lose precision
  'no-magic-numbers': 'off', // disallow magic numbers
  'no-misleading-character-class': 'error', // disallow characters which are made with multiple code points in character class syntax
  'no-mixed-operators': 'off', // disallow mixed binary operators
  'no-mixed-spaces-and-tabs': 'off', // disallow mixed spaces and tabs for indentation
  'no-multi-assign': 'error', // disallow use of chained assignment expressions
  'no-multi-spaces': 'off', // disallow multiple spaces
  'no-multi-str': 'error', // disallow multiline strings
  'no-multiple-empty-lines': 'off', // disallow multiple empty lines
  'no-negated-condition': 'error', // disallow negated conditions
  'no-nested-ternary': 'error', // disallow nested ternary expressions
  'no-new': 'error', // disallow new operators outside of assignments or comparisons
  'no-new-func': 'error', // disallow new operators with the Function object
  'no-new-object': 'error', // disallow Object constructors
  'no-new-symbol': 'error', // disallow new operators with the Symbol object
  'no-new-wrappers': 'error', // disallow new operators with the String, Number, and Boolean objects
  'no-nonoctal-decimal-escape': 'error', // disallow `\8` and `\9` escape sequences in string literals
  'no-obj-calls': 'error', // disallow calling global object properties as functions
  'no-octal': 'error', // disallow octal literals
  'no-octal-escape': 'error', // disallow octal escape sequences in string literals
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'accumulator',
        'error',
        'context',
        'request',
        'response',
        '$scope',
        'staticContext',
      ],
    },
  ], // disallow reassigning function parameters
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // disallow the unary operators `++` and `--`
  'no-promise-executor-return': 'error', // disallow returning values from Promise executor functions
  'no-proto': 'error', // disallow the use of the __proto__ property
  'no-prototype-builtins': 'warn', // disallow calling some Object.prototype methods directly on objects
  'no-redeclare': 'error', // disallow variable redeclaration
  'no-regex-spaces': 'error', // disallow multiple spaces in regular expressions
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: [
        'then', // this will cause tons of confusion when your module is dynamically `import()`ed
      ],
    },
  ], // disallow specified names in exports
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message: 'Use Number.isFinite instead',
    },
    {
      name: 'isNaN',
      message: 'Use Number.isNaN instead',
    },
    ...confusingBrowserGlobals,
  ], // disallow specified global variables
  'no-restricted-imports': 'off', // disallow specified modules when loaded by import
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ], // disallow certain properties on certain objects
  'no-restricted-syntax': 'off', // disallow specified syntax
  'no-return-assign': 'error', // disallow assignment operators in return statements
  'no-return-await': 'error', // disallow unnecessary return await
  'no-script-url': 'error', // disallow javascript: urls
  'no-self-assign': 'error', // disallow assignments where both sides are exactly the same
  'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same
  'no-sequences': ['error', { allowInParentheses: false }], // disallow comma operators
  'no-setter-return': 'error', // disallow returning values from setters
  'no-shadow': ['warn', { allow: ['resolve, reject'] }], // disallow variable declarations from shadowing variables declared in the outer scope
  'no-shadow-restricted-names': 'error', // disallow identifiers from shadowing restricted names
  'no-sparse-arrays': 'error', // disallow sparse arrays
  'no-tabs': 'off', // disallow all tabs
  'no-template-curly-in-string': 'error', // disallow template literal placeholder syntax in regular strings
  'no-ternary': 'off', // disallow ternary operators
  'no-this-before-super': 'error', // disallow this/super before calling super() in constructors
  'no-throw-literal': 'error', // disallow throwing literals as exceptions
  'no-trailing-spaces': 'off', // disallow trailing whitespace at the end of lines
  'no-undef': 'error', // disallow the use of undeclared variables unless mentioned in /* global */ comments
  'no-undef-init': 'error', // disallow initializing variables to undefined
  'no-undefined': 'off', // disallow the use of undefined as an identifier
  'no-underscore-dangle': 'error', // disallow dangling underscores in identifiers
  'no-unexpected-multiline': 'warn', // disallow confusing multiline expressions
  'no-unmodified-loop-condition': 'warn', // disallow unmodified loop conditions
  'no-unneeded-ternary': ['error', { defaultAssignment: false }], // disallow ternary operators when simpler alternatives exist
  'no-unreachable': 'error', // disallow unreachable code after return, throw, continue, and break statements
  'no-unreachable-loop': 'warn', // disallow loops with a body that allows only one iteration
  'no-unsafe-finally': 'error', // disallow control flow statements in finally blocks
  'no-unsafe-negation': 'error', // disallow negating the left operand of relational operators
  'no-unsafe-optional-chaining': 'error', // disallow use of optional chaining in contexts where the `undefined` value is not allowed
  'no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTernary: true, enforceForJSX: true },
  ], // disallow unused expressions
  'no-unused-labels': 'error', // disallow unused labels
  'no-unused-private-class-members': 'error', //  disallow unused private class members
  'no-unused-vars': ['error', { vars: 'local', args: 'after-used' }], // disallow unused variables
  'no-use-before-define': 'error', // disallow the use of variables before they are defined
  'no-useless-backreference': 'warn', // disallow useless backreferences in regular expressions
  'no-useless-call': 'error', // disallow unnecessary calls to .call() and .apply()
  'no-useless-catch': 'error', // disallow unnecessary catch clauses
  'no-useless-computed-key': 'error', // disallow unnecessary computed property keys in objects and classes
  'no-useless-concat': 'error', // disallow unnecessary concatenation of literals or template literals
  'no-useless-constructor': 'error', // disallow unnecessary constructors
  'no-useless-escape': 'error', // disallow unnecessary escape characters
  'no-useless-rename': 'error', // disallow renaming import, export, and destructured assignments to the same name
  'no-useless-return': 'error', // disallow redundant return statements
  'no-var': 'error', // require let or const instead of var
  'no-void': 'off', // disallow void operators
  'no-warning-comments': ['warn', { terms: ['todo:', 'fixme:', 'debug:'], location: 'start' }], // disallow specified warning terms in comments
  'no-whitespace-before-property': 'off', // disallow whitespace before properties
  'no-with': 'error', // disallow with statements
  'nonblock-statement-body-position': 'off', // enforce the location of single-line statements
  'object-curly-newline': 'off', // enforce consistent line breaks inside braces
  'object-curly-spacing': 'off', // enforce consistent spacing inside braces
  'object-property-newline': 'off', // enforce placing object properties on separate lines
  'object-shorthand': ['error', 'always', { avoidQuotes: true }], // require or disallow method and property shorthand syntax for object literals
  'one-var': ['error', 'never'], // enforce variables to be declared either together or separately in functions
  'one-var-declaration-per-line': 'off', // require or disallow newlines around variable declarations
  'operator-assignment': ['error', 'always'], // require or disallow assignment operator shorthand where possible
  'operator-linebreak': 'off', // enforce consistent linebreak style for operators
  'padded-blocks': 'off', // require or disallow padding within blocks
  'padding-line-between-statements': [
    'warn',
    { blankLine: 'always', prev: '*', next: 'return' },
    { blankLine: 'always', prev: 'import', next: '*' },
    { blankLine: 'any', prev: 'import', next: 'import' },
  ], // require or disallow padding lines between statements
  'prefer-arrow-callback': 'error', // require using arrow functions for callbacks
  'prefer-const': 'error', // require const declarations for variables that are never reassigned after declared
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: { array: false, object: true },
      AssignmentExpression: { array: true, object: false },
    },
    { enforceForRenamedProperties: false },
  ], // require destructuring from arrays and/or objects
  'prefer-exponentiation-operator': 'error', // disallow the use of `Math.pow` in favor of the `**` operator
  'prefer-named-capture-group': 'off', // enforce using named capture group in regular expression
  'prefer-numeric-literals': 'error', // disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
  // TODO: set to error when we ensure compatibility (e.g. Node.js v16.9 is needed for Object.hasOwn())
  'prefer-object-has-own': 'off', // disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
  'prefer-object-spread': 'error', // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
  'prefer-promise-reject-errors': 'error', // require using Error objects as Promise rejection reasons
  'prefer-regex-literals': 'error', // disallow use of the RegExp constructor in favor of regular expression literals
  'prefer-rest-params': 'error', // require rest parameters instead of arguments
  'prefer-spread': 'error', // require spread operators instead of .apply()
  'prefer-template': 'error', // require template literals instead of string concatenation
  'quote-props': 'off', // require quotes around object literal property names
  quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }], // enforce the consistent use of either backticks, double, or single quotes
  radix: 'error', // enforce the consistent use of the radix argument when using parseInt()
  'require-atomic-updates': 'warn', // disallow assignments that can lead to race conditions due to usage of await or yield
  'require-await': 'off', // disallow async functions which have no await expression
  'require-unicode-regexp': 'off', // enforce the use of `u` flag on RegExp
  'require-yield': 'error', // require generator functions to contain yield
  'rest-spread-spacing': 'off', // enforce spacing between rest and spread operators and their expressions
  semi: 'off', // require or disallow semicolons instead of ASI
  'semi-spacing': 'off', // enforce consistent spacing before and after semicolons
  'semi-style': 'off', // enforce location of semicolons
  'sort-imports': [
    'warn',
    {
      ignoreCase: true,
      memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple'],
      allowSeparatedGroups: true,
    },
  ], // enforce sorted import declarations within modules
  'sort-keys': 'off', // require object keys to be sorted
  'sort-vars': 'off', // require variables within the same declaration block to be sorted
  'space-before-blocks': 'off', // enforce consistent spacing before blocks
  'space-before-function-paren': 'off', // enforce consistent spacing before function definition opening parenthesis
  'space-in-parens': 'off', // enforce consistent spacing inside parentheses
  'space-infix-ops': 'off', // require spacing around infix operators
  'space-unary-ops': 'off', // enforce consistent spacing before or after unary operators
  'spaced-comment': ['warn', 'always'], // enforce consistent spacing after the `//` or `/*` in a comment
  strict: ['error', 'never'], // require or disallow strict mode directives
  'switch-colon-spacing': 'off', // enforce spacing around colons of switch statements
  'symbol-description': 'error', // require symbol descriptions
  'template-curly-spacing': 'off', // require or disallow spacing around embedded expressions of template strings
  'template-tag-spacing': 'off', // require or disallow spacing between template tags and their literals
  'unicode-bom': 'off', // require or disallow Unicode byte order mark (BOM)
  'use-isnan': 'error', // require calls to isNaN() when checking for NaN
  'valid-typeof': ['error', { requireStringLiterals: true }], // enforce comparing typeof expressions against valid strings
  'vars-on-top': 'error', // require var declarations be placed at the top of their containing scope
  'wrap-iife': 'off', // require parentheses around immediate function invocations
  'wrap-regex': 'off', // require parenthesis around regex literals
  'yield-star-spacing': 'off', // require or disallow spacing around the `*` in `yield*` expressions
  yoda: 'error', // require or disallow “Yoda” conditions
};

export default config;
