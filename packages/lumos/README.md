# Lumos

Centralized CLI for JavaScript and TypeScript dev tools.
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
- `env`(`LumosEnvSetting`) - Babel env settings (see: [babel-env#options](https://babeljs.io/docs/en/babel-preset-env#options))
- `graphql`(`boolean`) - Enable graphql support
- `library`(`boolean`) - Enable optimizations for library
- `future`(`boolean`) - Enable support for esnext javascript
- `node`(`boolean`) - Enable node optimizations
- `react`(`boolean`) - Enable react support and optimizations
- `nextjs`(`boolean`) - Enable nextjs support
- `srcFolder`(`string`) - Source folder
- `testsFolder`(`string`) - Test folder
- `typesFolder`(`string`) - Types folder
- `entryPoint`(`string`) - Webpack entry point
- `publicPath`(`string`) - Webpack public path
- `root`(`string`) - Change root folder
- `declarationOnly`(`boolean`) - Enable declaration only for typescript
- `allowJs`(`boolean`) - Allow js in typescript
- `skipLibCheck`(`boolean`) - Skip library check in typescript
- `emptyBabelConfig`(`boolean`) - Enable empty babel configuration
- `enableSharedModules`(`boolean`) - Enable shared modules
- `sharedModulesManifestPath`(`string`) - Path to shared module manifest
- `enableConsoleMocks`(`boolean`) - Enable jest console mocks

## Usage

### Creating configs

Executing a driver will dynamically create a configuration file at runtime. If you'd like to create the config manually outside of executing a driver, you can use the `lumos create-config`.

```sh
# All drivers
lumos create-config

# Only babel and jest
lumos create-config babel jest
```

### Overriding configs

Your configuration module may now house and provide all configurations,
but that doesn't mean it's applicable to all consuming projects.
To accommodate this, Beemo supports overriding of driver config on a project-by-project basis through a local `.config/lumos/<driver>.(js|ts)` file.

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

Lumos provides sane defaults for all official drivers and attempts to standardize the configuration process as much as possible. However, it's not perfect, and may not work for all consumers. To mitigate this problem, each driver supports a template based strategy, in which a custom template function can be used to handle the config generation (custom merging, etc), and the destination file path.

To use templates, set the driver `configStrategy` option to "template", and the `template` option to a file path for the template function (relative to the `.config` folder).

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

The template is merely a function that receives a list of config objects from multiple sources, and must return a single config object (or string), and an optional destination path. It also receives an options object with helpful information about the current process.

To demonstrate the power of templates, let's write a custom template that generates a YAML configuration file for ESLint.

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

Lumos can scaffold projects through the amazing hygen library. Hygen separates templates into groupings of "generators" and "actions", coupling a front matter concept with ejs, to deliver a powerful and convenient experience.

```sh
npx lumos scaffold project dotfiles
```
