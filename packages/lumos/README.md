# Lumos

Centralized CLI for JavaScript and TypeScript dev tools.
[Built on and powered by Beemo](https://github.com/beemojs/beemo).

## Usage

### Prerequisites

- package.json
- install @oriflame/lumos

**Setup initial project with this package:**

```bash
npm init
npm install --save-dev @oriflame/lumos
npx lumos-setup
```

**yarn:**

```bash
yarn init
yarn add --dev @oriflame/lumos
npx lumos-setup
```

## Scaffold dotfile

```bash
npx lumos scaffold project dotfiles
```

## Create configs

```bash
npx lumos create-config [driver list]
```

```bash
npx lumos create-config eslint prettier
```

## Running drivers

```bash
npx lumos <name of driver> [--cli options]
```

```bash
npx lumos eslint
npm lumos typescript --build --reference-workspaces
```

## Supported drivers

- [babel](../config-babel)
- [eslint](../config-eslint)
- [jest](../config-jest)
- [prettier](../config-prettier)
- [typescript](../config-typescript)
- [webpack](../config-webpack)

## Extra configs

- [danger](../config-danger)

### Set drivers manually

```json
{
  "lumos": {
    "drivers": ["babel", "eslint"]
  }
}
```

## Supported settings

These setting are supported settings forwarded to the drivers, this settings affect configuration
and behavior of the drivers.

```ts
export interface LumosSettings {
  buildFolder: string;
  coverage: number;
  docsFolder: string;
  env: LumosEnvSetting;
  graphql: boolean;
  library: boolean;
  future: boolean;
  node: boolean;
  react: boolean;
  nextjs: boolean;
  srcFolder: string;
  testsFolder: string;
  typesFolder: string;
  entryPoint?: string;
  publicPath?: string;
  root?: string;
  parallel?: boolean | number | string;
  testResultFileName?: string;
  emptyBabelConfig: boolean;
  allowJs: boolean;
  skipLibCheck: boolean;
  devServerContentBase?: string;
  moduleFederationConfig?: unknown;
  host?: string;
  enableSharedModules?: boolean;
  sharedModulesManifestPath?: string;
}
```

### Default values

```ts
{
  buildFolder: 'lib',
  coverage: 75,
  docsFolder: 'docs',
  env: {},
  graphql: false,
  library: false,
  future: false,
  node: false,
  react: false,
  nextjs: false,
  testingLibrary: false,
  srcFolder: 'src',
  testsFolder: 'tests',
  typesFolder: 'types',
  emptyBabelConfig: false,
  allowJs: false,
  skipLibCheck: false,
  root: process.cwd(),
  parallel: true,
  testResultFileName: 'TEST-RESULTS.xml',
}
```

### Edit this settings

in package json

```json
{
  "lumos": {
    "settings": {
      "buildFolder": "lib",
      "coverage": 75
    }
  }
}
```

## Modifying configs

### Modify package.json

```json
{
  "lumos": {
    "eslint": {
      // name of the driver
      "rules": {
        "import/prefer-default-export": "off"
      }
    }
  }
}
```

### Create file in `configs` folder

Create javascript file inside this folder with name of driver. For example: `configs/eslint.js`

```js
module.exports = {
  rules: {
    'import/prefer-default-export': 'off',
  },
};
```

### Cli options

#### Babel

- `string[]` - paths
- extensions: `string[]` - file extensions
- outDir: `string` - output directory override
- esm: `boolean` - es modules compilation

**Example:**

```bash
lumos babel --extensions .ts,.js ./src --out-dir ./lib
```

#### Eslint

- `string[]` - paths
- ext: `string[]` - extension
- color: `boolean` - enable color output

**Example:**

```bash
lumos eslint --ext .ts,.js ./src --color
```

#### Jest

- colors: `boolean` - Enable color output
- coverage: `boolean` - Enable code coverage

**Example:**

```bash
lumos jest --colors --coverage
```

#### Prettier

- `string[]` - paths
- write: `boolean` - Enable file write

**Example:**

```bash
lumos prettier --write ./src/**/*.{ts,tsx,js,jsx,scss,css,gql,graphql,yml,yaml,md}
```

#### Typescript

- referenceWorkspaces: `boolean` - enable workspace references
- emitDeclarationOnly: `boolean` - Only emit dts files

**Example:**

```bash
lumos typescript --referenceWorkspaces --emitDeclarationOnly
```

#### Webpack

- colors: `boolean` - Enable color output
- progress: `boolean` - Enable webpack progress log
- bail: `boolean` -
- parallel: `number` - Enable parallelism
- buildFolder: `string` - Override build folder
- entryPoint: `string` - Override entry point
- sourceMaps: `string` - Enable source maps generation
- analyze: `string` - Enable webpack analyze plugin

**Example:**

```bash
lumos webpack --colors --progress
lumos webpack build
```
