import { Path } from '@beemo/core';
import { getPackage, WEBPACK_ROOT } from '@oriflame/lumos-common';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { Configuration, container } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { INVALID_CHARS, NUMBER_REGEX } from './constants';
import getClientEnvironment from './env';
import { WebpackOptions } from './types';

export const PROD = process.env.NODE_ENV === 'production';
export const PORT = 3000;

let favicon = '';

export function getFavIcon(srcPath: string): string {
  if (favicon) {
    return favicon;
  }

  const prodPath = new Path(srcPath, 'favicon.png');
  const devPath = new Path(srcPath, 'favicon-dev.png');

  if (!PROD && devPath.exists()) {
    favicon = devPath.path();
  } else if (prodPath.exists()) {
    favicon = prodPath.path();
  }

  return favicon;
}

export function getPlugins({
  analyzeBundle,
  srcFolder,
  entryPoint,
  react,
  moduleFederationConfig,
  enableSharedModules,
  root,
  sharedModulesManifestPath,
}: WebpackOptions): Configuration['plugins'] {
  const srcPath = path.join(WEBPACK_ROOT, srcFolder);

  const plugins: Configuration['plugins'] = [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(!PROD),
    }),
  ];

  if (moduleFederationConfig) {
    plugins.push(new container.ModuleFederationPlugin(moduleFederationConfig));
  }

  if (!PROD) {
    plugins.push(
      new HtmlWebpackPlugin({
        template: `${srcFolder}/index.html`,
        filename: 'index.html',
        favicon: getFavIcon(srcPath),
      }),
      new webpack.DefinePlugin(getClientEnvironment('development')),
    );
  }

  if (PROD && enableSharedModules) {
    plugins.push(
      new webpack.DllReferencePlugin({
        context: root,
        manifest: path.join(root!, sharedModulesManifestPath!),
      }),
    );
  }
  if (analyzeBundle) {
    // @ts-expect-error -- Type errors in bundle analyzer plugin types
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (!entryPoint && PROD) {
    plugins.push(
      new HtmlWebpackPlugin({
        chunksSortMode: 'auto',
        template: `${srcFolder}/index.html`,
        filename: 'index.html',
        favicon: getFavIcon(srcPath),
      }),
    );
  }

  if (react && !PROD) {
    plugins.push(new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin());
  }

  return plugins;
}

export function getUniqueName() {
  const { name } = getPackage();

  return `${name.replace(NUMBER_REGEX, '').replace(INVALID_CHARS, '')}`;
}

export function getParallelValue(value: boolean | number | string | undefined): boolean | number {
  if (value === undefined) {
    return true;
  }

  if (value === 'true') {
    return true;
  }

  if (value === 'false' || value === '') {
    return false;
  }

  return Number(value || 1);
}
