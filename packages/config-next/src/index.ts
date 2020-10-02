/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return */
import bundleAnalyzer from '@next/bundle-analyzer';
import { ALIAS_PATTERN, getESMAliases, WEBPACK_ROOT } from '@ori-open/lumos-common';
import { NextConfig, NextConfigObject } from 'beemo-driver-next';
import path from 'path';
import { mergeConfig } from './helpers';

interface NextOptions {
  analyzeBundle?: boolean;
  buildFolder?: string;
  root?: string;
  target?: NextConfigObject['target'];
  srcFolder: string;
}

export function getConfig({
  analyzeBundle = false,
  root = WEBPACK_ROOT,
  buildFolder = '.next',
  target = 'server',
  srcFolder = 'src',
}: NextOptions): NextConfig {
  const options: NextConfigObject = {
    distDir: buildFolder,
    target,
    webpack: config => {
      return mergeConfig(config, {
        resolve: {
          alias: {
            [`${ALIAS_PATTERN}`]: path.join(root, srcFolder, '/'),
            [`${ALIAS_PATTERN}(.+)`]: `${path.join(root, srcFolder)}/\\1`,
            [`${ALIAS_PATTERN}/(.+)`]: `${path.join(root, srcFolder)}/\\1`,
            ...getESMAliases(),
          },
        },
      });
    },
  };

  if (analyzeBundle) {
    return bundleAnalyzer({
      enabled: analyzeBundle,
    })(options);
  }

  return options;
}
