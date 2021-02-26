import { ESLintConfig } from '@beemo/driver-eslint';
import { EXTS_GROUP } from '@oriflame/lumos-common';

const config: ESLintConfig = {
  plugins: ['promise', 'unicorn'],
  rules: {
    // not enabled in Airbnb
    'default-param-last': 'error',
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'multiline-comment-style': 'off',
    'multiline-ternary': ['error', 'never'],
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-dupe-else-if': 'error',
    'no-implicit-coercion': 'error',
    'no-import-assign': 'error',
    'no-global-assign': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'off', // replaced with unicorn rule
    'no-setter-return': 'error',
    'no-useless-call': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-regex-literals': 'error',
    'require-atomic-updates': 'error',

    // replaced with new proposals
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',

    // import
    'import/default': 'error',
    'import/imports-first': 'error',
    'import/namespace': 'error',
    'import/no-unused-modules': 'off', // super broken at the moment

    // promises
    'promise/no-callback-in-promise': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': [
      'error',
      {
        allowReject: true,
      },
    ],
    'promise/param-names': 'error',
    'promise/valid-params': 'error',

    // react
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array'],
      },
    ],
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-key': 'error',
    'react/jsx-no-bind': [
      'warn',
      {
        allowArrowFunctions: false,
        allowBind: false,
        allowFunctions: false,
        ignoreDOMComponents: false,
        ignoreRefs: false,
      },
    ],
    'react/jsx-no-literals': [
      'error',
      {
        ignoreProps: true,
        noStrings: true,
      },
    ],
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-sort-default-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        noSortAlphabetically: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    'react/no-did-mount-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/sort-comp': [
      'error',
      {
        groups: {
          handlers: ['/^on.+$/', '/^handle.+$/'],
          lifecycle: [
            'constructor',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          properties: [
            '/^(?!on).+$/',
            '/^(?!handle).+$/',
            '/^(?!render).+$/',
            '/^.+Ref$/',
            'state',
          ],
          renderers: ['/^render.+$/', 'render'],
          statics: [
            'propTypes',
            'defaultProps',
            'contextType',
            'contextTypes',
            'childContextTypes',
          ],
        },
        order: ['statics', 'properties', 'lifecycle', 'everything-else', 'handlers', 'renderers'],
      },
    ],
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    // unicorn
    'unicorn/better-regex': 'error', // improve regexps by making them shorter, consistent, and safer
    'unicorn/catch-error-name': 'error', // enforce a specific parameter name in catch clauses
    'unicorn/consistent-function-scoping': 'error', // move function definitions to the highest possible scope
    'unicorn/custom-error-definition': 'error', // enforce correct Error subclassing
    'unicorn/error-message': 'error', // enforce passing a message value when throwing a built-in error
    'unicorn/escape-case': 'error', // require escape sequences to use uppercase values
    'unicorn/expiring-todo-comments': [
      'warn',
      {
        terms: ['todo:', 'fixme:', 'debug:'],
      },
    ], // add expiration conditions to to do comments
    'unicorn/explicit-length-check': 'error', // enforce explicitly comparing the length property of a value
    'unicorn/filename-case': [
      'warn',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ], // enforce a case style for filenames
    'unicorn/import-index': 'error', // enforce importing index files with .
    'unicorn/new-for-builtins': 'error', // enforce the use of new for all builtins, except String, Number, Boolean, Symbol and BigInt
    'unicorn/no-abusive-eslint-disable': 'warn', // enforce specifying rules to disable in eslint-disable comments
    'unicorn/no-array-callback-reference': 'error', // prevent passing a function reference directly to iterator methods
    'unicorn/no-for-loop': 'error', // Do not use a for loop that can be replaced with a for-of loop
    'unicorn/no-hex-escape': 'error', // enforce the use of Unicode escapes instead of hexadecimal escapes
    'unicorn/no-instanceof-array': 'error', // require Array.isArray() instead of instanceof Array
    'unicorn/no-nested-ternary': 'error', // disallow nested ternary expressions
    'unicorn/no-new-buffer': 'error', // enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer()
    'unicorn/no-object-as-default-parameter': 'warn', // disallow the use of objects as default parameters
    'unicorn/no-process-exit': 'error', // disallow process.exit()
    'unicorn/no-unused-properties': 'warn', // disallow unused object properties
    'unicorn/no-zero-fractions': 'error', // disallow number literals with zero fractions or dangling dots
    'unicorn/number-literal-case': 'error', // enforce lowercase identifier and uppercase value for number literals
    'unicorn/prefer-add-event-listener': 'error', // prefer .addEventListener() and .removeEventListener() over on-functions
    'unicorn/prefer-array-find': 'error', // prefer .find(…) over the first element from .filter(…)
    'unicorn/prefer-array-flat-map': 'error', // prefer .flatMap(…) over .map(…).flat()
    'unicorn/prefer-dom-node-append': 'error', // prefer Node#append() over Node#appendChild()
    'unicorn/prefer-dom-node-dataset': 'error', // prefer using .dataset on DOM elements over .setAttribute(…)
    'unicorn/prefer-dom-node-remove': 'error', // prefer childNode.remove() over parentNode.removeChild(childNode)
    'unicorn/prefer-dom-node-text-content': 'error', // prefer .textContent over .innerText
    'unicorn/prefer-includes': 'error', // prefer .includes() over .indexOf() when checking for existence or non-existence
    'unicorn/prefer-keyboard-event-key': 'error', // prefer KeyboardEvent#key over KeyboardEvent#keyCode.
    'unicorn/prefer-modern-dom-apis': 'error', // prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement()
    'unicorn/prefer-negative-index': 'error', // prefer negative index over .length - index for {String,Array,TypedArray}#slice() and Array#splice()
    'unicorn/prefer-number-properties': 'error', // prefer Number static properties over global ones
    'unicorn/prefer-reflect-apply': 'error', // prefer Reflect.apply() over Function#apply()
    'unicorn/prefer-set-has': 'error', // prefer Set#has() over Array#includes() when checking for existence or non-existence
    'unicorn/prefer-string-replace-all': 'error', // prefer String#replaceAll() over regex searches with the global flag
    'unicorn/prefer-string-slice': 'error', // prefer String#slice() over String#substr() and String#substring()
    'unicorn/prefer-string-starts-ends-with': 'error', // prefer String#startsWith() & String#endsWith() over more complex alternatives
    'unicorn/prefer-string-trim-start-end': 'error', // prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight()
    'unicorn/prefer-type-error': 'error', // enforce throwing TypeError in type checking conditions
    'unicorn/throw-new-error': 'error', // require new when throwing an error
  },

  overrides: [
    {
      files: [`*.test.${EXTS_GROUP}`],
      rules: {
        'unicorn/no-array-callback-reference': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-no-literals': 'off',
      },
    },
  ],
};

export = config;
