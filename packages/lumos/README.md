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

## Eject files

This will eject files and remove dependency of this package.

```bash
npx lumos-eject
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
- [danger](../config-danger)
- [eslint](../config-eslint)
- [jest](../config-jest)
- [prettier](../config-prettier)
- [typescript](../config-typescript)
- [webpack](../config-webpack)

### Set drivers manually

```json
{
  "lumos": {
    "drivers": ["babel", "eslint"]
  }
}
```

## Supported settings

```ts
export interface LumosSettings {
  buildFolder: string;
  coverage: number;
  docsFolder: string;
  env: LumosEnvSetting;
  graphql: boolean;
  library: boolean;
  next: boolean;
  node: boolean;
  testingLibrary: boolean;
  react: boolean;
  srcFolder: string;
  testsFolder: string;
  typesFolder: string;
  entryPoint?: string;
  publicPath?: string;
  root?: string;
  parallel?: boolean | string | number;
  testResultFileName?: string;
  emptyBabelConfig: boolean;
  nextOptions?: Partial<NextConfigObject>;
  allowJs: boolean;
  skipLibCheck: boolean;
  host?: string;
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
  next: false,
  node: false,
  react: false,
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

## Rest of documentation

[Beemo docs](https://milesj.gitbook.io/beemo/)
