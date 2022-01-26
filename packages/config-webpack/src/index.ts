import type { WebpackConfig } from '@beemo/driver-webpack';
import { requireModule } from '@boost/module';
import {
  ALIAS_PATTERN,
  ASSET_EXT_PATTERN,
  CSS_EXT_PATTERN,
  CSS_MODULE_EXT_PATTERN,
  EXTS,
  GQL_EXT_PATTERN,
  TJSX_EXT_PATTERN,
} from '@oriflame/lumos-common';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import fs from 'fs';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import type { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import {
  DEFAULT_MANIFEST_PACKAGE,
  DEFAULT_MANIFEST_PATH,
  POSTCSS_SETTING as DEFAULT_POSTCSS_SETTING,
} from './constants';
import { getParallelValue, getPlugins, getUniqueName, PORT, PROD, WEBPACK_ROOT } from './helpers';
import type { WebpackOptions } from './types';

const customConfigPathTs = path.join(process.cwd(), '.configs', 'lumos', 'webpack.ts');
const customConfigPathJs = path.join(process.cwd(), '.configs', 'lumos', 'webpack.ts');

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
  sharedModulesPackage = DEFAULT_MANIFEST_PACKAGE,
  monorepoRoot,
}: WebpackOptions): WebpackConfig {
  const srcPath = path.join(root, srcFolder);
  const internalPath = path.join(root, buildFolder);
  const contentBase = path.join(root, devServerContentBase);
  const entry: Configuration['entry'] = {
    index: [srcPath],
  };
  const POSTCSS_SETTING = { ...DEFAULT_POSTCSS_SETTING };

  if (monorepoRoot) {
    try {
      process.chdir(monorepoRoot);
    } catch (error) {
      console.log(error);
    }
  }

  POSTCSS_SETTING.options.sourceMap = sourceMaps;

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
    sharedModulesPackage,
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
          // include: [srcPath],
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
          use: [
            'style-loader',
            { loader: 'css-loader', options: { sourceMap: sourceMaps } },
            POSTCSS_SETTING,
          ],
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
        [`${ALIAS_PATTERN}`]: path.join(root, srcFolder, '/'),
      },
      fallback: {
        assert: false,
        buffer: false,
        console: false,
        constants: false,
        crypto: false,
        domain: false,
        events: false,
        http: false,
        https: false,
        os: false,
        path: false,
        punycode: false,
        process: false,
        querystring: false,
        stream: false,
        string_decoder: false,
        sys: false,
        timers: false,
        tty: false,
        url: false,
        util: false,
        vm: false,
        zlib: false,
        fs: false,
        child_process: false,
        net: false,
        dns: false,
        applicationinsights: false,
      },
      mainFields: ['browser', 'source', 'module', 'main'],
      extensions: ['.wasm', '.mjs', ...EXTS],
    },

    output,

    devtool: PROD ? (sourceMaps ? 'source-map' : false) : 'eval-source-map',
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
      historyApiFallback: true,
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
          terserOptions: {
            sourceMap: sourceMaps,
          },
        }),
        new CssMinimizerPlugin({
          parallel: getParallelValue(parallel),
        }),
      ],
    },

    performance: false,

    stats: !PROD,
  };

  let config: WebpackConfig | undefined;
  if (fs.existsSync(customConfigPathTs)) {
    config = requireModule<WebpackConfig>(customConfigPathTs).default;
  }
  if (fs.existsSync(customConfigPathJs)) {
    config = requireModule<WebpackConfig>(customConfigPathJs).default;
  }
  if (config) {
    return merge<WebpackConfig>(baseConfig, config);
  }

  return baseConfig;
}
