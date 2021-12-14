import { Path } from '@beemo/core';
import { getRootPackageJSON } from '@oriflame/lumos-common';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import glob from 'fast-glob';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { Configuration, container } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { INVALID_CHARS, NUMBER_REGEX } from './constants';
import getClientEnvironment from './env';
import { WebpackOptions } from './types';

export const WEBPACK_ROOT = process.cwd();

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
    // @ts-expect-error -- issue with plugin
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
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
}

export function getUniqueName() {
  const { name } = getRootPackageJSON();

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

const { WEBPACK_ESM_SCOPES, WEBPACK_ESM_PACKAGES } = process.env;

const esmScopes = ['@ori', '@ori-ui', '@ori-events'];
const esmPackages: string[] = [];

if (WEBPACK_ESM_SCOPES) {
  esmScopes.push(...WEBPACK_ESM_SCOPES.split(','));
}

if (WEBPACK_ESM_PACKAGES) {
  esmPackages.push(...WEBPACK_ESM_PACKAGES.split(','));
}

export interface AliasMap {
  [key: string]: string;
}

export function getESMAliases(): AliasMap {
  const aliases: AliasMap = {};
  const pkg = getRootPackageJSON();
  const buildTargets = ['lib', 'build', 'dist'];

  glob
    .sync([`node_modules/{${esmScopes.join(',')}}/*`, `node_modules/{${esmPackages.join(',')}}`], {
      absolute: true,
      cwd: WEBPACK_ROOT,
      onlyDirectories: true,
      onlyFiles: false,
    })
    .forEach((modulePath) => {
      const packageName = modulePath.split('/node_modules/')[1];
      const esLessName = packageName.replace(/-es$/, '');
      const esPath = new Path(modulePath, 'es');
      const esmPath = new Path(modulePath, 'esm');

      // ori-foo/lib -> ori-foo/esm
      // optimal/lib -> optimal/esm
      if (esPath.exists() || esmPath.exists()) {
        const aliasPath = esPath.exists() ? `${packageName}/es` : `${packageName}/esm`;
        const aliased = buildTargets.some((targetFolder) => {
          if (new Path(modulePath, targetFolder).exists()) {
            aliases[`${packageName}/${targetFolder}`] = aliasPath;

            return true;
          }

          return false;
        });

        if (!aliased) {
          aliases[`${packageName}$`] = aliasPath;
        }

        // lodash -> lodash-es
      } else if (packageName.endsWith('-es') && pkg.dependencies && pkg.dependencies[esLessName]) {
        aliases[esLessName] = packageName;
      }
    });

  return aliases;
}
