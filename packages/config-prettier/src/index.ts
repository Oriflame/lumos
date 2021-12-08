import type { PrettierConfig } from '@beemo/driver-prettier';
import { IGNORE_PATHS } from '@oriflame/lumos-common';

export { PrettierConfig };

const config = {
  ...(require('prettier-config-oriflame') as PrettierConfig),
  ignore: [
    ...IGNORE_PATHS,
    'npm-shrinkwrap.json',
    'package-lock.json',
    'yarn.lock',
    'tsconfig.json',
    'tsconfig.eslint.json',
    'tsconfig.options.json',
    'CHANGELOG.md',
    'jest.config.js',
    'babel.config.js',
    'webpack.config.js',
  ],
};

export default config;
