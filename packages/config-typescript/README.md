# TypeScript Config

Factory functions for creating preset [TypeScript](https://www.typescriptlang.org/) configurations.
Primarily used in union with the [Lumos](https://www.npmjs.com/package/@oriflame/lumos) CLI.

## Extending config

**Update package.json:**

```json
{
  "lumos": {
    "typescript": {
      "allowSyntheticDefaultImports": true
    }
  }
}
```

**Create file in configs folder:**

`configs/typescript.js`

```js
module.exports = {
  allowSyntheticDefaultImports: true,
};
```

## Settings

### Main settings

```ts
export interface TypeScriptOptions {
  buildFolder: string;
  includeTests?: boolean;
  library?: boolean;
  future?: boolean;
  node?: boolean;
  react?: boolean;
  srcFolder: string;
  testsFolder: string;
  typesFolder: string;
  workspaces?: string[];
  emitDeclarationOnly?: boolean;
  allowJs?: boolean;
  skipLibCheck?: boolean;
}
```

### Default values

```ts
{
  library = false,
  future = false,
  node = false,
  react = false,
  emitDeclarationOnly = false,
  srcFolder = 'src',
  allowJs = false,
  skipLibCheck = false,
}
```

### Settings

- library
  - Optimized build for library
- future
  - Sets target to next version
- node
  - Optimized build for node
- emitDeclarationOnly
  - Only emits d.ts files
- srcFolder
  - Path to source folder
- allowJs
  - Enables javascript in typescript
- skipLibCheck
  - Skips library check

### CLI Options

- `--[no-]clean`
  - clean the target `outDir` before transpiling. Defaults to `true`.
- `--reference-workspaces` / `--reference-workspaces=<string>`
  - automatically generate project references based on workspace dependency graph. Defaults to
    `false`.
- `--emitDeclarationOnly`
  - emit d.ts files only
- `--noEmit`
  - include tests
- `--buildFolder=<string>`
  - sets build folder
- `--srcFolder=<string>`
  - sets src folder
- `--testsFolder=<string>`
  - sets tests folder
- `--typesFolder=<string>`
  - sets types folder

**Example:**

```bash
lumos typescript --emitDeclarationOnly --typesFolder=types
```
