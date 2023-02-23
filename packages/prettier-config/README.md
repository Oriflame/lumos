# @oriflame/prettier-config

## Installation

```sh
npm install --save-dev @oriflame/prettier-config prettier
yarn add --dev @oriflame/prettier-config prettier
```

## Usage

`package.json`:

```json
{
  "prettier": "@oriflame/prettier-config"
}
```

`.prettierrc`:

```javascript
module.exports = '@oriflame/prettier-config';
```

or you can override part of the config

```javascript
module.exports = {
  ...require('@oriflame/prettier-config'),
  semi: false,
};
```
