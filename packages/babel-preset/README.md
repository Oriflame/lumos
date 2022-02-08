# `@oriflame/babel-preset`

## Installation

```sh
npm install --save-dev @oriflame/babel-preset @babel/core
yarn add --dev @oriflame/babel-preset @babel/core
```

## Usage

### babelrc

```json
{
  "presets": [
    ["@oriflame/babel-preset",
      {
        "react": true
      }
    ]
  ]
}
```

### Options

- react `boolean`
  - Enable react preset
- modules `boolean`
  - Enables modules transpilation
- library `boolean`
  - Enables optimizations for library
- graphql `boolean`
  - Add support for graphql
- removePropTypes `boolean`
  - Removes prop types from source code
- targets `Record<string, string> | string[] | string`
  - env targets (see: [@babel/preset-env#targets](https://babeljs.io/docs/en/babel-preset-env#targets))
- srcFolder `string`
  - Change default source folder
  - default: `src`
- env `object`
  - Change env setting
  - see: [@babel/preset-evn](https://babeljs.io/docs/en/babel-preset-env)

### Using core-js

We support core-js polyfills.

See: [babel documentation](https://babeljs.io/docs/en/babel-preset-env#usebuiltins-entry).
