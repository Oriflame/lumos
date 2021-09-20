import { BeemoConfig } from '@beemo/core';

const config: BeemoConfig = {
  module: '@oriflame/lumos',
  drivers: [
    'babel',
    'eslint',
    'jest',
    'prettier',
    ['typescript', { declarationOnly: false, buildFolder: 'lib' }],
    'webpack',
  ],
  settings: {
    node: true,
    testsFolder: 'test',
    library: true,
  },
};

export default config;
