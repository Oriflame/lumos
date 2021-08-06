# Webpack Config

Provides Webpack dependencies and configuration. Primarily used in union with the
[Lumos](https://www.npmjs.com/package/@oriflame/lumos) CLI.

## Extending config

**Create file in configs folder:**


`configs/webpack.js`

```js
modules.exports = {
  plugins: [new webpack.NamedChunksPlugin()],
};
```

## Settings

### Main settings

```ts
export interface WebpackOptions {
  analyzeBundle?: boolean;
  buildFolder?: string;
  port?: number | string;
  parallel?: boolean | number | string;
  root?: string;
  react?: boolean;
  sourceMaps?: boolean;
  publicPath?: string;
  srcFolder: string;
  entryPoint?: string;
  devServerContentBase?: string;
  host?: string;
  moduleFederationConfig?: ConstructorParameters<typeof container.ModuleFederationPlugin>[0];
  enableSharedModules?: boolean;
  sharedModulesManifestPath?: string;
}
```

### Default values

```ts
{
  analyzeBundle = false,
  buildFolder = 'build',
  port = 3000,
  react = false,
  sourceMaps = false,
  srcFolder = 'src',
  publicPath = '/',
  root = process.cwd(),
  host = undefined,
}
```

### Options

- analyzeBundle
  - Enable/Disable bundle analyze
- buildFolder
  - Defines build folder
- port
  - Defines port
- react
  - Enable/Disable react usage
- sourceMaps
  - Enable/Disable source map generation
- srcFolder
  - Defines source code folder
- entryPoint
  - Defines file which will be acting as entry point instead of index.html
- publicPath
  - Defined path where to get scripts
  - useful values: '/', './'
- parallel
  - Settings for terser plugin
  - fast AF boii
- host
  - Webpack dev server host

### CLI Options

- `--sourceMaps`
  - Enable source map generation
- `--analyze`
  - Enable bundle analyze
- `--parallel` / `--parallel=<number | string | boolean>`
  - Enable/sets parallel configuration
- `--buildFolder=<string>`
  - sets build folder
- `--entryPoint=<string>`
  - sets entry point for build
  - Entry point is relative to srcFolder

**Example:**

```bash
lumos webpack --entryPoint=appEntry.tsx --sourceMaps --analyze --buildFolder=build
```
