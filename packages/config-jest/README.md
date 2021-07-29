# Jest Config

Factory functions for creating preset [Jest](https://jestjs.io/) configurations. Primarily used in
union with the [Lumos](https://www.npmjs.com/package/@oriflame/lumos) CLI.

## Extending config

**Update package.json:**

```json
{
  "lumos": {
    "jest": {
      "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
    }
  }
}
```

**Create file in configs folder:**

`configs/eslint.js`

```js
modules.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
```

## Settings

### Main settings

```ts
export interface JestOptions {
  graphql?: boolean;
  react?: boolean;
  node?: boolean;
  srcFolder: string;
  testsFolder: string;
  threshold?: number;
  workspaces?: string[];
  testResultFileName?: string;
}
```

### Default values

```ts
{
  graphql = false,
  react = false,
  node = false,
  srcFolder,
  testsFolder,
  threshold = 40,
  workspaces = [],
  testResultFileName = 'TEST-RESULTS.xml',
};
```

### CLI Options

- `--coverage`
  - Enable code coverage output

__Example:__

```bash
lumos jest --coverage
```
