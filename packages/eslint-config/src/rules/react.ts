import type eslint from 'eslint';

const config: eslint.Linter.Config['rules'] = {
  // eslint-plugin-react rules
  'react/boolean-prop-naming': 'off', // enforces consistent naming for boolean props
  'react/button-has-type': ['error', { reset: false }], // forbid "button" element without an explicit "type" attribute
  'react/default-props-match-prop-types': 'error', // enforce all defaultProps are defined and not "required" in propTypes
  'react/destructuring-assignment': 'warn', // rule enforces consistent usage of destructuring assignment in component
  'react/display-name': 'off', // prevent missing displayName in a React component definition
  'react/forbid-component-props': 'off', // forbid certain props on Components
  'react/forbid-dom-props': 'off', // forbid certain props on DOM Nodes
  'react/forbid-elements': 'off', // forbid certain elements
  'react/forbid-foreign-prop-types': 'error', // forbid using another component's propTypes
  'react/forbid-prop-types': [
    'error',
    {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ], // forbid certain propTypes
  'react/function-component-definition': 'off', // standardize the way function component get defined
  'react/jsx-boolean-value': ['error', 'never'], // enforce boolean attributes notation in JSX
  'react/jsx-child-element-spacing': 'error', // ensures inline tags are not rendered without spaces between them
  'react/jsx-closing-bracket-location': 'off', // validate closing bracket location in JSX
  'react/jsx-closing-tag-location': 'off', // validate closing tag location for multiline JSX
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }], // disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
  'react/jsx-curly-newline': 'off', // enforce consistent line breaks inside jsx curly
  'react/jsx-curly-spacing': 'off', // enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  'react/jsx-equals-spacing': 'off', // disallow or enforce spaces around equal signs in JSX attributes
  'react/jsx-filename-extension': ['error', { allow: 'as-needed', extensions: ['.jsx', '.tsx'] }], // restrict file extensions that may contain JSX
  'react/jsx-first-prop-new-line': 'off', // ensure proper position of the first property in JSX
  'react/jsx-fragments': ['error', 'syntax'], // enforce shorthand or standard form for React fragments
  'react/jsx-handler-names': 'error', // enforce event handler naming conventions in JSX
  'react/jsx-indent': 'off', // validate JSX indentation
  'react/jsx-indent-props': 'off', // validate props indentation in JSX
  'react/jsx-key': 'error', // report missing key props in iterators/collection literals
  'react/jsx-max-depth': 'off', // validate JSX maximum depth
  'react/jsx-max-props-per-line': 'off', // limit maximum of props on a single line in JSX
  'react/jsx-newline': 'off', // enforce a new line after jsx elements and expressions
  'react/jsx-no-bind': ['warn', { ignoreDOMComponents: true }], // prevents usage of Function.prototype.bind and arrow functions in React component props
  'react/jsx-no-constructed-context-values': 'warn', // prevents JSX context provider values from taking values that will cause needless rerenders
  'react/jsx-no-comment-textnodes': 'warn', // comments inside children section of tag should be placed inside braces
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }], // enforce no duplicate props
  'react/jsx-no-literals': 'off', // Prevent usage of string literals in JSX
  'react/jsx-no-script-url': 'error', // forbid javascript: URLs
  'react/jsx-no-target-blank': 'error', // forbid target="_blank" attribute without rel="noreferrer"
  'react/jsx-no-undef': 'error', // disallow undeclared variables in JSX
  'react/jsx-no-useless-fragment': 'error', // disallow unnecessary fragments
  'react/jsx-one-expression-per-line': 'off', // Limit to one expression per line in JSX
  'react/jsx-pascal-case': 'error', // enforce PascalCase for user-defined JSX components
  'react/jsx-props-no-multi-spaces': 'off', // disallow multiple spaces between inline JSX props
  'react/jsx-props-no-spreading': 'off', // prevent JSX prop spreading
  'react/jsx-sort-default-props': 'off', // enforce default props alphabetical sorting
  'react/jsx-sort-props': [
    'warn',
    {
      callbacksLast: true,
      shorthandFirst: true,
      noSortAlphabetically: true,
      reservedFirst: true,
    },
  ], // enforce props alphabetical sorting
  'react/jsx-tag-spacing': 'off', // validate whitespace in and around the JSX opening and closing brackets
  'react/jsx-uses-react': 'off', // prevent React to be incorrectly marked as unused
  'react/jsx-uses-vars': 'error', // prevent variables used in JSX to be incorrectly marked as unused
  'react/jsx-wrap-multilines': 'off', // prevent missing parentheses around multilines JSX
  'react/no-access-state-in-setstate': 'error', // reports when this.state is accessed within setState
  'react/no-adjacent-inline-elements': 'off', // prevent adjacent inline elements not separated by whitespace
  'react/no-array-index-key': 'error', // prevent usage of Array index in keys
  'react/no-arrow-function-lifecycle': 'error', // lifecycle methods should be methods on the prototype, not class fields
  'react/no-children-prop': 'error', // prevent passing of children as props
  'react/no-danger': 'warn', // prevent usage of dangerous JSX props
  'react/no-danger-with-children': 'error', // report when a DOM element is using both children and dangerouslySetInnerHTML
  'react/no-deprecated': 'error', // prevent usage of deprecated methods, including component lifecycle methods
  'react/no-did-mount-set-state': 'error', // prevent usage of setState in componentDidMount
  'react/no-did-update-set-state': 'error', // prevent usage of setState in componentDidUpdate
  'react/no-direct-mutation-state': 'error', // prevent direct mutation of this.state
  'react/no-find-dom-node': 'error', // prevent usage of findDOMNode
  'react/no-invalid-html-attribute': 'off', // forbid attribute with an invalid values
  'react/no-is-mounted': 'error', // prevent usage of isMounted
  'react/no-multi-comp': 'off', // prevent multiple component definition per
  'react/no-namespace': 'error', // enforce that namespaces are not used in React elements
  'react/no-redundant-should-component-update': 'error', // flag shouldComponentUpdate when extending PureComponent
  'react/no-render-return-value': 'error', // prevent usage of the return value of React.render
  'react/no-set-state': 'off', // prevent usage of setState
  'react/no-string-refs': 'error', // prevent string definitions for references and prevent referencing this.refs
  'react/no-this-in-sfc': 'error', // report "this" being used in stateless components
  'react/no-typos': 'error', // prevent common casing typos
  'react/no-unescaped-entities': 'error', // detect unescaped HTML entities, which might represent malformed tags
  'react/no-unknown-property': 'warn', // prevent usage of unknown DOM property
  'react/no-unsafe': 'error', // prevent usage of unsafe lifecycle methods
  'react/no-unstable-nested-components': 'error', // prevent creating unstable components inside components
  'react/no-unused-class-component-methods': 'error', // prevent declaring unused methods of component class
  'react/no-unused-prop-types': 'off', // prevent definitions of unused prop types
  'react/no-unused-state': 'error', // prevent definitions of unused state fields
  'react/no-will-update-set-state': 'error', // prevent usage of setState in componentWillUpdate
  'react/prefer-es6-class': 'error', // enforce ES5 or ES6 class for React Components
  'react/prefer-exact-props': 'off', // prefer exact proptype definitions
  'react/prefer-read-only-props': 'off', // require read-only props
  'react/prefer-stateless-function': 'error', // enforce stateless React Components to be written as a pure function
  'react/react-in-jsx-scope': 'off', // prevent missing React when using JSX
  'react/require-default-props': 'off', // enforce a defaultProps definition for every prop that is not a required prop
  'react/require-optimization': 'off', // enforce React components to have a shouldComponentUpdate method
  'react/require-render-return': 'error', // enforce ES5 or ES6 class for returning value in render function
  'react/self-closing-comp': 'error', // prevent extra closing tags for components without children
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
  'react/void-dom-elements-no-children': 'error', // prevent passing of children to void DOM elements (e.g. <br />)
};

export default config;
