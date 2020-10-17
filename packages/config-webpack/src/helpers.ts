import { Path } from '@beemo/core';
import { getPackage, WEBPACK_ROOT } from '@oriflame/lumos-common';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { Configuration, container } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { INVALID_CHARS, NUMBER_REGEX } from './constants';
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
        chunks: ['runtime', 'core'],
        template: `${srcFolder}/index.html`,
        filename: 'index.html',
        favicon: getFavIcon(srcPath),
      }),
    );
  }

  if (analyzeBundle) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (!entryPoint && PROD) {
    plugins.push(
      new HtmlWebpackPlugin({
        chunks: ['runtime', 'core'],
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

export function getParallelValue(value: boolean | string | number | undefined): boolean | number {
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
