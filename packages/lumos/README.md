# Lumos

[![npm version](https://badge.fury.io/js/@oriflame%2Flumos.svg)](https://badge.fury.io/js/@oriflame%2Flumos)

Manage dev and build tools, their configuration, and commands in a single centralized repository. Lumos aims to solve the multi-project maintenance fatigue by removing the following burdens across all projects: config and dotfile management, multiple config patterns, up-to-date development dependencies, continuous copy and paste, and more.

[Built on and powered by Beemo](https://github.com/beemojs/beemo).

## Installation

```sh
npm install --save-dev @oriflame/lumos
```

Or yarn

```sh
yarn add --dev @oriflame/lumos
```

## Configuration

Create `lumos.ts` in `.config` folder.

### Example configuration

```typescript
import type { LumosConfig } from '@oriflame/lumos';

const config: LumosConfig = {
  module: '@oriflame/lumos',
  drivers: [
    'babel',
    'eslint',
    'jest',
    'prettier',
    ['typescript', { declarationOnly: true, buildFolder: 'dts' }],
  ],
  settings: {
    react: true,
    library: true,
    future: true,
    coverage: 97,
    node: true,
    buildFolder: 'esm',
  },
};

export default config;
```

### Drivers

- [babel](../config-babel)
- [eslint](../config-eslint)
- [jest](../config-jest)
- [prettier](../config-prettier)
- [typescript](../config-typescript)
- [webpack](../config-webpack)

### Settings

- `buildFolder`(`string`) - Build folder
- `esmBuildFolder`(`string`) - Es modules build folder
- `coverage`(`number`) - Code coverage
- `env`(`LumosEnvSetting`) - Babel env settings (see:
  [preset-env#options](https://babeljs.io/docs/en/babel-preset-env#options))
- `graphql`(`boolean`) - Enable graphql support
- `library`(`boolean`) - Enable optimizations for library
- `future`(`boolean`) - Enable support for esnext javascript
- `node`(`boolean`) - Enable node optimizations
- `react`(`boolean`) - Enable react support and optimizations
- `nextjs`(`boolean`) - Enable nextjs support
- `srcFolder`(`string`) - Source folder
- `testsFolder`(`string`) - Test folder
- `typesFolder`(`string`) - Types folder
- `declarationFolder`(`string`) - Output declaration folder
- `entryPoint`(`string`) - Webpack entry point
- `publicPath`(`string`) - Webpack public path
- `root`(`string`) - Change root folder
- `declarationOnly`(`boolean`) - Enable declaration only for typescript
- `allowJs`(`boolean`) - Allow js in typescript
- `skipLibCheck`(`boolean`) - Skip library check in typescript
- `emptyBabelConfig`(`boolean`) - Enable empty babel configuration
- `enableSharedModules`(`boolean`) - Enable shared modules
- `enableConsoleMocks`(`boolean`) - Enable jest console mocks
- `sharedModulesManifestPath`(`string`) - Path to shared module manifest relative to package
- `sharedModulesPackage`(`string`) - Shared module package
- `assumptions`(`Assumptions`) - Babel assumptions (see: [compiler assumptions](https://babeljs.io/docs/en/assumptions), [preset-env#loose](https://babeljs.io/docs/en/babel-preset-env#loose))

## Usage

### Creating configs

Executing a driver will dynamically create a configuration file at runtime. If you'd like to create
the config manually outside of executing a driver, you can use the `lumos create-config`.

```sh
# All drivers
lumos create-config

# Only babel and jest
lumos create-config babel jest
```

### Overriding configs

Your configuration module may now house and provide all configurations, but that doesn't mean it's
applicable to all consuming projects. To accommodate this, Beemo supports overriding of driver
config on a project-by-project basis through a local `.config/lumos/<driver>.(js|ts)` file.

`.config/lumos/eslint.ts`

```typescript
import { ESLintConfig } from '@oriflame/lumos';

const config: ESLintConfig = {
  rules: {
    'no-param-reassign': 0,
  },
};

export default config;
```

### Custom configs with templates

Lumos provides sane defaults for all official drivers and attempts to standardize the configuration
process as much as possible. However, it's not perfect, and may not work for all consumers. To
mitigate this problem, each driver supports a template based strategy, in which a custom template
function can be used to handle the config generation (custom merging, etc), and the destination file
path.

To use templates, set the driver `configStrategy` option to "template", and the `template` option to
a file path for the template function (relative to the `.config` folder).

`.config/lumos.ts`

```typescript
import { LumosConfig } from '@oriflame/lumos';

const config: LumosConfig = {
  module: '@oriflame/lumos',
  drivers: [
    [
      'eslint',
      {
        configStrategy: 'template',
        template: './path/to/custom/template.ts',
      },
    ],
  ],
};

export default config;
```

The template is merely a function that receives a list of config objects from multiple sources, and
must return a single config object (or string), and an optional destination path. It also receives
an options object with helpful information about the current process.

To demonstrate the power of templates, let's write a custom template that generates a YAML
configuration file for ESLint.

`./path/to/custom/template.ts`

```typescript
import { yaml } from '@boost/common';
import { ConfigObject, ConfigTemplateResult, ConfigTemplateOptions } from '@oriflame/lumos';

export default function customTemplate(
  configs: ConfigObject[],
  options: ConfigTemplateOptions,
): ConfigTemplateResult {
  // Manually merge the list of configs into a single config object
  // using the rules of the driver, or ones unique to your project.
  const config = mergeConfigs(configs);

  // A template must return a `config` property, which can be an object
  // that will be formatted as JSON/JS, or a string which will be written as-is.
  // It can also return an optional `path` property, allowing the destination
  // config file path to be customized.
  return {
    config: yaml.stringify(config),
    path: options.context.cwd.append('.eslintrc.yaml'),
  };
}
```

## Scripts

### Scaffolding dotfiles

Lumos can scaffold projects through the amazing hygen library. Hygen separates templates into
groupings of "generators" and "actions", coupling a front matter concept with ejs, to deliver a
powerful and convenient experience.

```sh
npx lumos scaffold project dotfiles
```

## Configs

### Config babel

#### Applicable settings

- `env`
- `esm`
- `graphql`
- `library`
- `node`
- `react`
- `empty`
- `srcFolder`

#### Cli scripts

Options that are added automatically.

- `--copy-files`
- `--out-dir`
- when typescript is used `--extensions ts,tsx` is added

**Cli options:**

- `--[no-]clean`
- `--esm`
- `--workspaces=*`
- `--copy-files`
- `--extensions`

```sh
lumos babel
lumos babel --esm
lumos babel --clean
lumos babel --workspaces=*
```

#### Overriding config

`.configs/lumos/babel.ts`

```typescript
import type { BabelConfig } from '@oriflame/lumos`;

const config: BabelConfig = {
  plugins: ['babel-plugin-typescript-to-proptypes'],
};

export default config;
```

### Config eslint

#### Applicable settings

- `future`
- `node`
- `nextjs`

#### Cli scripts

Options that are added automatically.

- `--cache`
- `--color`
- when typescript is used `--ext ts,tsx` is added

**Cli options:**

- `--ext extensions`
- `--color`
- `--workspaces`

```sh
lumos eslint
lumos eslint --workspaces=*
lumos eslint
```

#### Overriding config

`.configs/lumos/eslint.ts`

```typescript
import type { ESLintConfig } from '@oriflame/lumos`;

const config: ESLintConfig = {
  rules: {
    semi: 'off',
  },
};

export default config;
```

### Config jest

#### Applicable settings

- `graphql`
- `node`
- `react`
- `threshold`
- `testResultFileName`
- `enableConsoleMocks`

#### Cli scripts

Options that are added automatically.

- `--logHeapUsage`
- `--color`
- when coverage is used `--detectOpenHandles` is added
- when `esm` is enabled `NODE_OPTIONS --experimental-vm-modules` is used

```sh
lumos jest
lumos jest --coverage
```

#### Overriding config

`.configs/lumos/jest.ts`

```typescript
import type { JestConfig } from '@oriflame/lumos';

const config: JestConfig = {
  coveragePathIgnorePatterns: ['stories/', 'internals/', 'test-utils/', 'fonts/', '__fixtures__/'],
};

export default config;
```

### Config Prettier

#### Cli scripts

Options that are added automatically.

- `--write`

```sh
lumos prettier
lumos prettier --write .
```

#### Overriding config

`.configs/lumos/prettier.ts`

```typescript
import type { PrettierConfig } from '@oriflame/lumos';

const config: PrettierConfig = {
  semi: false,
};

export default config;
```

### Config typescript

Synchronizing project configs isn't automatic and has to be done via the script.

```sh
lumos typescript:sync-project-refs
```

#### Applicable settings

- `library`
- `future`
- `react`
- `srcFolder`
- `allowJs`
- `skipLibCheck`
- `sourceMaps`

#### Cli scripts

**Cli options:**

- `--noEmit`
- `--build`

```sh
lumos typescript
lumos typescript --noEmit
lumos typescript --build
lumos typescript:sync-project-refs
```

#### Overriding config

`.configs/lumos/typescript.ts`

```typescript
import type { TypeScriptConfig } from '@oriflame/lumos';

const config: TypeScriptConfig = {
  compilerOptions: {
    lib: ['DOM'],
  },
};

export default config;
```

### Config webpack

#### Applicable settings

- `buildFolder`
- `react`
- `sourceMaps`
- `parallel`
- `root`
- `publicPath`
- `srcFolder`
- `entryPoint`
- `host`
- `devServerContentBase`
- `enableSharedModules`
- `sharedModulesManifestPath`
- `sharedModulesPackage`

#### Cli scripts

Options that are added automatically.

- `--colors`
- `--progress`
- `--bail`

**Cli options:**

- `--sourceMaps`
- `--analyze`
- `--parallel`
- `--buildFolder`
  - default: `build`
- `--entryPoint`

```sh
lumos webpack
lumos webpack --analyze
lumos webpack --sourceMaps=false
lumos webpack --root=./packages/test
lumos webpack build --workspaces=*
```

> Start application with webpack `lumos create-config webpack && lumos-webpack-server`

> ⚠️ When using webpack in workspaces packages needs to have `packages/<Package Name>/.config/lumos.ts`

**Webpack cli options:**

Webpack cli options can be find here: [OPTIONS.md](https://github.com/webpack/webpack-cli/blob/master/OPTIONS.md)

**Webpack cli commands:**

### Available Commands

```
  build|bundle|b                                        Run webpack (default command, can be omitted).
  help|h [command] [option]                             Display help for commands and options.
  info|i [options]                                      Outputs information about your system.
  version|v [commands...]                               Output the version number of 'webpack', 'webpack-cli' and 'webpack-dev-server' and commands.
```

#### Lumos-webpack-server

**Cli options:**

- `--root`(`string`) - relative path to package
- `--port`(`number`) - dev server port
  - default: `3000`
- `--entryPoint`(`string`) - webpack entry point relative to root
- `--env`(`string`) - Node env
  - default: `development`

```sh
lumos-webpack-server
lumos-webpack-server --port=3001
lumos-webpack-server --root=./packages/root
```

> lumos webpack server can be run from workspace package `yarn workspace @app/my-app run start` and start script `lumos-webpack-server`.
> Lumos will try to find `webpack.config.js` in parent directories up to 5 levels.

#### Overriding config

`.configs/lumos/webpack.ts`

```typescript
import type { WebpackConfig } from '@oriflame/lumos';

const config: WebpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

export default config;
```
