# prettier-config-oriflame

## Installation

```sh
npm install --save-dev prettier-config-oriflame prettier
yarn add --dev prettier-config-oriflame prettier
```

## Usage

`package.json`:

```json
{
  "prettier": "prettier-config-oriflame"
}
```

`.prettierrc`:

```javascript
module.exports = 'prettier-config-oriflame';
```

or you can override part of the config

```javascript
module.exports = {
  ...(require('prettier-config-oriflame')),
  semi: false
};
```
