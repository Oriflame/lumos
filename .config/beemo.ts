import { BeemoConfig } from '@beemo/core';

const config: BeemoConfig = {
  module: '@oriflame/lumos',
  drivers: [
    'babel',
    'eslint',
    'jest',
    'prettier',
    ['typescript', { declarationOnly: false }],
    'webpack',
  ],
  settings: {
    declarationDir: 'dts',
    node: true,
    testsFolder: 'test',
    library: true,
  },
};

export default config;
