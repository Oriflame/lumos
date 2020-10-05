# TypeScript Config

Factory functions for creating preset [TypeScript](https://www.typescriptlang.org/) configurations.
Primarily used in unison with the [Lumos](https://www.npmjs.com/package/@ori-open/lumos) CLI.

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
modules.exports = {
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
  next?: boolean;
  node?: boolean;
  react?: boolean;
  usingNext?: boolean;
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
  next = false,
  node = false,
  react = false,
  usingNext = false,
  emitDeclarationOnly = false,
  srcFolder = 'src',
  allowJs = false,
  skipLibCheck = false,
}
```

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

### [Beemo/typescript](https://milesj.gitbook.io/beemo/driver/typescript)
