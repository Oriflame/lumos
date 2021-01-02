import { ESLintConfig } from '@beemo/driver-eslint';
import { EXTS_GROUP } from '@oriflame/lumos-common';

const config: ESLintConfig = {
  plugins: ['promise', 'unicorn'],
  rules: {
    // Not enabled in Airbnb
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
    'no-native-reassign': 'error',
    'no-negated-condition': 'error',
    'no-setter-return': 'error',
    'no-useless-call': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-regex-literals': 'error',
    'require-atomic-updates': 'error',
    'no-nested-ternary': 'off', // Replaced with unicorn rule

    // Replaced with new proposals
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',

    // Import React is no longer needed from latest version
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // IMPORT
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-unused-modules': 'off', // Super broken at the moment
    'import/imports-first': 'error',

    // PROMISE
    'promise/no-callback-in-promise': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': ['error', { allowReject: true }],
    'promise/param-names': 'error',
    'promise/valid-params': 'error',

    // REACT
    'react/destructuring-assignment': 'off', // Broken with class properties
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-key': 'error',
    'react/jsx-no-literals': ['error', { noStrings: true, ignoreProps: true }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-no-script-url': 'error',
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
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    'react/no-did-mount-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/sort-comp': [
      'error',
      {
        order: ['statics', 'properties', 'lifecycle', 'everything-else', 'handlers', 'renderers'],
        groups: {
          statics: [
            'propTypes',
            'defaultProps',
            'contextType',
            'contextTypes',
            'childContextTypes',
          ],
          properties: [
            '/^(?!on).+$/',
            '/^(?!handle).+$/',
            '/^(?!render).+$/',
            '/^.+Ref$/',
            'state',
          ],
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
          handlers: ['/^on.+$/', '/^handle.+$/'],
          renderers: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/sort-prop-types': [
      'error',
      {
        ignoreCase: true,
        callbacksLast: true,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    'react/jsx-no-bind': [
      'warn',
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false,
      },
    ],

    // UNICORN
    'unicorn/better-regex': 'error',
    'unicorn/filename-case': [
      'warn',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'warn',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/no-unused-properties': 'warn',
    'unicorn/no-object-as-default-parameter': 'warn',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/expiring-todo-comments': [
      'warn',
      {
        terms: ['todo:', 'fixme:'],
      },
    ],
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
