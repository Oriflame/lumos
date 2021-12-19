import { ALIAS_PATTERN } from '@oriflame/lumos-common';

export type PluginItem = string | [string, object];

export interface BabelPresetOriflameOptions {
  modules?: boolean;
  react?: boolean;
  removePropTypes?: boolean;
  graphql?: boolean;
  library?: boolean;
  srcFolder?: string;
  targets?: Record<string, string> | string[] | string;
  env?: Record<string, unknown>;
}

export default function babelPresetOriflame(
  _: unknown,
  {
    modules,
    react,
    targets,
    removePropTypes,
    graphql,
    library,
    srcFolder = 'src',
    env = {},
  }: BabelPresetOriflameOptions = {},
) {
  const plugins: PluginItem[] = [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    ['babel-plugin-transform-dev', { evaluate: false }],
    'babel-plugin-optimize-clsx',
    '@emotion',
  ];

  // When using decorators, we must apply loose to explicit plugins
  // https://babeljs.io/docs/en/babel-plugin-proposal-decorators#legacy
  plugins.unshift(
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
  );

  const presets: PluginItem[] = [
    [
      '@babel/preset-env',
      {
        // Always use async/await
        exclude: [
          '@babel/plugin-transform-regenerator',
          '@babel/plugin-transform-async-to-generator',
        ],
        loose: true,
        modules: modules ? false : 'auto',
        useBuiltIns: false,
        bugfixes: true,
        shippedProposals: true,
        // Only target node since this is for development
        // Revisit in Babel v8: https://babeljs.io/docs/en/options#no-targets
        targets: targets ?? { node: 'current' },
        ...env,
      },
    ],
    ['@babel/preset-typescript', { allowDeclareFields: true }],
  ];

  if (graphql) {
    plugins.push('babel-plugin-graphql-tag');
  }

  if (react) {
    presets.push([
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV === 'development',
        runtime: 'automatic',
      },
    ]);

    if (process.env.NODE_ENV === 'development') {
      plugins.push('react-refresh/babel');
    }

    if (removePropTypes) {
      plugins.push([
        'babel-plugin-transform-react-remove-prop-types',
        {
          mode: 'remove',
          removeImport: true,
          additionalLibraries: [],
          ignoreFilenames: ['node_modules'],
        },
      ]);
    } else {
      plugins.push('babel-plugin-typescript-to-proptypes');
    }
  }

  if (!library) {
    plugins.push([
      'babel-plugin-module-resolver',
      {
        extensions: ['ts', 'tsx', 'js', 'jsx'],
        alias: {
          [ALIAS_PATTERN]: `./${srcFolder}`,
        },
      },
    ]);
  }

  plugins.push('@babel/plugin-transform-runtime');

  return {
    plugins,
    presets,
  };
}
