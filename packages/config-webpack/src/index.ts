/* eslint-disable no-nested-ternary */
import { WebpackConfig } from '@beemo/driver-webpack';
import {
  ALIAS_PATTERN,
  ASSET_EXT_PATTERN,
  CSS_EXT_PATTERN,
  CSS_MODULE_EXT_PATTERN,
  EXTS,
  getESMAliases,
  GQL_EXT_PATTERN,
  TJSX_EXT_PATTERN,
  WEBPACK_ROOT,
} from '@oriflame/lumos-common';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import fs from 'fs';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { DEFAULT_MANIFEST_PATH, POSTCSS_SETTING } from './constants';
import { getParallelValue, getPlugins, getUniqueName, PORT, PROD } from './helpers';
import { WebpackOptions } from './types';

export function getConfig({
  analyzeBundle = false,
  buildFolder = 'build',
  port = PORT,
  react = false,
  sourceMaps = true,
  parallel = true,
  root = WEBPACK_ROOT,
  publicPath = 'auto',
  srcFolder,
  entryPoint,
  host,
  devServerContentBase = 'public',
  moduleFederationConfig,
  enableSharedModules = false,
  sharedModulesManifestPath = DEFAULT_MANIFEST_PATH,
}: WebpackOptions): WebpackConfig {
  const srcPath = path.join(root, srcFolder);
  const internalPath = path.join(root, buildFolder);
  const contentBase = path.join(root, devServerContentBase);
  const customConfigPath = path.join(root, 'configs', 'webpack.js');
  const entry: Configuration['entry'] = {
    index: [srcPath],
  };

  const output: Configuration['output'] = {
    path: internalPath,
    publicPath,
    filename: '[name].js',
    chunkFilename: PROD ? '[id].chunk.js' : '[id].js',
    sourceMapFilename: '[file].map',
    uniqueName: PROD ? getUniqueName() : undefined,
  };

  const plugins = getPlugins({
    analyzeBundle,
    buildFolder,
    port,
    react,
    root,
    sourceMaps,
    entryPoint,
    srcFolder,
    moduleFederationConfig,
    enableSharedModules,
    sharedModulesManifestPath,
  });

  if (entryPoint) {
    entry.index = path.join(srcPath, entryPoint);
  }

  if (entryPoint && PROD) {
    output.filename = 'index.js';
  }

  const baseConfig: WebpackConfig = {
    mode: PROD ? 'production' : 'development',

    bail: PROD,

    entry,

    context: root,

    plugins,

    module: {
      rules: [
        {
          test: TJSX_EXT_PATTERN,
          include: [srcPath],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              configFile: true,
            },
          },
        },
        {
          test: CSS_MODULE_EXT_PATTERN,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: sourceMaps,
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]_[hash:base64:5]',
                },
              },
            },
            POSTCSS_SETTING,
          ],
          sideEffects: true,
        },
        {
          test: CSS_EXT_PATTERN,
          exclude: CSS_MODULE_EXT_PATTERN,
          use: ['style-loader', 'css-loader', POSTCSS_SETTING],
          sideEffects: true,
        },
        {
          test: ASSET_EXT_PATTERN,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'assets/[name].[ext]?[hash:7]',
              publicPath,
              esModule: false,
            },
          },
        },
        {
          test: GQL_EXT_PATTERN,
          use: {
            loader: 'webpack-graphql-loader',
            options: {
              output: 'document',
              removeUnusedFragments: true,
            },
          },
        },
      ],
    },

    resolve: {
      alias: {
        ...getESMAliases(),
        [`${ALIAS_PATTERN}`]: path.join(root, srcFolder, '/'),
      },
      extensions: ['.wasm', '.mjs', ...EXTS],
    },

    output,

    devtool: PROD ? (sourceMaps ? 'source-map' : false) : 'cheap-module-source-map',
    // @ts-expect-error -- something wrong
    devServer: {
      static: {
        directory: contentBase,
        watch: true,
      },
      allowedHosts: 'all',
      client: {
        logging: 'info',
      },
      headers: {
        'Service-Worker-Allowed': '/',
      },
      historyApiFallback: {
        disableDotRule: true,
      },
      hot: true,
      port, // This can be a unix socket path so a string is valid
      host,
    },
    optimization: {
      chunkIds: PROD ? undefined : 'named',
      minimize: PROD,
      minimizer: [
        new TerserPlugin({
          parallel: getParallelValue(parallel),
        }),
        new CssMinimizerPlugin({
          parallel: getParallelValue(parallel),
          sourceMap: sourceMaps,
        }),
      ],
    },

    performance: false,

    stats: !PROD,
  };

  return fs.existsSync(customConfigPath)
    ? merge<WebpackConfig>(baseConfig, require(customConfigPath) as WebpackConfig)
    : baseConfig;
}
