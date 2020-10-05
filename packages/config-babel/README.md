# Babel Config

Factory functions for creating preset [Babel](https://babeljs.io/) configurations. Primarily used in
unison with the [Lumos](https://www.npmjs.com/package/@ori-open/lumos) CLI.

## Extending config

**Update package.json:**

```json
{
  "lumos": {
    "babel": {
      "plugins": ["styled-components"]
    }
  }
}
```

**Create file in configs folder:**

`configs/babel.js`

```js
modules.exports = {
  plugins: ['styled-components'],
};
```

## Settings

### Main settings

```ts
interface BabelOptions {
  env?: LumosEnvSetting;
  esm?: boolean;
  graphql?: boolean;
  library?: boolean;
  next?: boolean;
  node?: boolean;
  react?: boolean;
  typescript?: boolean;
  empty?: boolean;
  srcFolder: string;
}
```

```ts
interface LumosEnvSetting {
  targets?:
    | string
    | string[]
    | {
        browsers?: string | string[];
        esmodules?: boolean;
        node?: string | 'current' | true;
        safari?: string | 'tp';
        [key: string]: unknown;
      };
  spec?: boolean;
  loose?: boolean;
  modules?: 'amd' | 'umd' | 'systemjs' | 'commonjs' | 'cjs' | 'auto' | false;
  debug?: boolean;
  include?: (string | RegExp)[];
  exclude?: (string | RegExp)[];
  useBuiltIns?: 'usage' | 'entry' | false;
  forceAllTransforms?: boolean;
  configPath?: string;
  ignoreBrowserslistConfig?: boolean;
  shippedProposals?: boolean;
}
```

### Default values

```ts
{
  env = {
    loose: true,
    modules: esm ? false : 'commonjs',
    shippedProposals: next,
    targets: node ? NODE_TARGET : WEB_TARGET,
  },
  esm = false,
  graphql = false,
  library = false,
  next = false,
  node = false,
  react = false,
  typescript = false,
  empty = false,
}
```

### Options

- env
  - Babel preset evn config
- buildFolder
  - Defines build folder
- react
  - Enable/Disable react usage
- typescript
  - Enable/Disable typescript usage
- esm
  - Enable/Disable esm bundle
- empty
  - This will generate empty babelrc
  - This can be handy when you need special babelrc config
- graphql
  - Enable/Disable graph QL usage
- library
  - Enable/Disable optimization for library
- next
  - Enable/Disable experimental plugins
- node
  - Enable/Disable only node support

### CLI Options

- `--[no-]clean` (bool) - Clean the target `--out-dir` before transpiling. Defaults to `true`.

### [Beemo/babel](https://milesj.gitbook.io/beemo/driver/babel)
