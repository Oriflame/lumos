import { ESLintConfig } from '@beemo/driver-eslint';

const config: ESLintConfig['rules'] = {
  // eslint-plugin-react-hooks rules
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/rules-of-hooks': 'error',

  // eslint-plugin-react rules
  'react/destructuring-assignment': 'warn', // rule enforces consistent usage of destructuring assignment in component
  'react/forbid-foreign-prop-types': 'error', // forbid using another component's propTypes
  'react/jsx-child-element-spacing': 'error', // ensures inline tags are not rendered without spaces between them
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }], // disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
  'react/jsx-filename-extension': ['error', { allow: 'as-needed', extensions: ['.jsx', '.tsx'] }], // restrict file extensions that may contain JSX
  'react/jsx-handler-names': 'error', // enforce event handler naming conventions in JSX
  'react/jsx-key': 'error', // report missing key props in iterators/collection literals
  'react/jsx-no-bind': ['warn', { ignoreDOMComponents: true }], // prevents usage of Function.prototype.bind and arrow functions in React component props
  'react/jsx-no-constructed-context-values': 'warn', // prevents JSX context provider values from taking values that will cause needless rerenders
  'react/jsx-no-comment-textnodes': 'warn', // comments inside children section of tag should be placed inside braces
  'react/jsx-no-literals': 'off', // Prevent usage of string literals in JSX
  'react/jsx-no-script-url': 'error', // forbid javascript: URLs
  'react/jsx-no-useless-fragment': 'error', // disallow unnecessary fragments
  'react/jsx-pascal-case': 'error', // enforce PascalCase for user-defined JSX components
  'react/jsx-props-no-spreading': 'off', // prevent JSX prop spreading
  'react/jsx-sort-props': [
    'warn',
    {
      callbacksLast: true,
      shorthandFirst: true,
      noSortAlphabetically: true,
      reservedFirst: true,
    },
  ], // enforce props alphabetical sorting
  'react/jsx-uses-react': 'off', // prevent React to be incorrectly marked as unused
  'react/no-array-index-key': 'error', // prevent usage of Array index in keys
  'react/no-children-prop': 'error', // prevent passing of children as props
  'react/no-did-mount-set-state': 'error', // prevent usage of setState in componentDidMount
  'react/no-direct-mutation-state': 'error', // prevent direct mutation of this.state
  'react/no-unescaped-entities': 'error', // detect unescaped HTML entities, which might represent malformed tags
  'react/no-unknown-property': 'warn', // prevent usage of unknown DOM property
  'react/no-unsafe': 'error', // prevent usage of unsafe lifecycle methods
  'react/no-will-update-set-state': 'error', // prevent usage of setState in componentWillUpdate
  'react/prefer-stateless-function': 'error', // enforce stateless React Components to be written as a pure function
  'react/react-in-jsx-scope': 'off', // prevent missing React when using JSX
  'react/require-default-props': 'off', // enforce a defaultProps definition for every prop that is not a required prop
  'react/sort-comp': [
    'warn',
    {
      order: ['statics', 'properties', 'lifecycle', 'everything-else', 'handlers', 'renderers'],
      groups: {
        statics: ['propTypes', 'defaultProps', 'contextType', 'contextTypes', 'childContextTypes'],
        properties: ['/^(?!on).+$/', '/^(?!handle).+$/', '/^(?!render).+$/', '/^.+Ref$/', 'state'],
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
  ], // enforce component methods order
  'react/sort-prop-types': [
    'warn',
    {
      ignoreCase: true,
      callbacksLast: true,
      requiredFirst: false,
      sortShapeProp: true,
    },
  ], // enforce propTypes declarations alphabetical sorting
  'react/state-in-constructor': ['warn', 'never'], // state initialization in an ES6 class component should be in a constructor
  'react/static-property-placement': 'off', // defines where React component static properties should be positioned
  'react/style-prop-object': 'warn', // enforce style prop value is an object
};

export = config;
