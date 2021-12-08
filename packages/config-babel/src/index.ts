import { BabelConfig } from '@beemo/driver-babel';
import {
  ALIAS_PATTERN,
  IGNORE_PATHS,
  LumosEnvSetting,
  NODE_TARGET,
  WEB_TARGET,
} from '@oriflame/lumos-common';

interface BabelOptions {
  env?: LumosEnvSetting;
  esm?: boolean;
  graphql?: boolean;
  library?: boolean;
  future?: boolean;
  node?: boolean;
  react?: boolean;
  typescript?: boolean;
  empty?: boolean;
  srcFolder: string;
  moduleFederationEnabled?: boolean;
}

export function getConfig({
  env = {},
  esm = false,
  graphql = false,
  library = false,
  future = false,
  node = false,
  react = false,
  typescript = false,
  empty = false,
  srcFolder,
  moduleFederationEnabled = false,
}: BabelOptions): BabelConfig {
  if (empty) {
    return {};
  }

  const envOptions = {
    loose: true,
    modules: esm || moduleFederationEnabled ? false : 'commonjs',
    shippedProposals: future,
    targets: node ? NODE_TARGET : WEB_TARGET,
    ...env,
  };
  const presets: NonNullable<BabelConfig['presets']> = [['@babel/preset-env', envOptions]];
  const plugins: NonNullable<BabelConfig['plugins']> = ['babel-plugin-optimize-clsx'];

  // https://babeljs.io/blog/2020/03/16/7.9.0#highlights
  // @ts-expect-error Not typed upstream
  envOptions.bugfixes = typeof envOptions.targets === 'object' && !!envOptions.targets.esmodules;

  // Flags
  let useFuture = future;
  let removePropTypes = false;

  switch (process.env.NODE_ENV) {
    case 'test': {
      envOptions.modules = 'commonjs';
      envOptions.targets = { node: 'current' };
      plugins.push('babel-plugin-dynamic-import-node');
      break;
    }
    case 'development': {
      if (react) {
        plugins.push('react-refresh/babel');
      }
      break;
    }
    case 'production':
    default: {
      if (!library && react) {
        plugins.push([
          'babel-plugin-transform-react-remove-prop-types',
          {
            mode: 'remove',
            removeImport: true,
            additionalLibraries: [],
            ignoreFilenames: ['node_modules'],
          },
        ]);

        removePropTypes = true;
      }
      break;
    }
  }

  if (graphql) {
    plugins.push('babel-plugin-graphql-tag');
  }

  if (react) {
    presets.push([
      '@babel/preset-react',
      { runtime: 'automatic', development: process.env.NODE_ENV === 'development' },
    ]);
  }

  if (typescript) {
    useFuture = true;
    presets.push('@babel/preset-typescript');

    plugins.unshift(
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      'babel-plugin-parameter-decorator',
    );

    if (!removePropTypes) {
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

  if (useFuture) {
    plugins.push(
      ['@babel/plugin-proposal-class-properties', { loose: envOptions.loose }],
      ['@babel/plugin-proposal-private-methods', { loose: envOptions.loose }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: envOptions.loose }],
      '@babel/plugin-proposal-export-namespace-from',
    );
  }

  plugins.push('@babel/plugin-transform-runtime');

  return {
    ignore: [...IGNORE_PATHS, '__tests__', '__mocks__'],
    plugins,
    presets,
  };
}
