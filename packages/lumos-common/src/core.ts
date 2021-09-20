import { BeemoConfig } from '@beemo/core';
import { PackageStructure } from '@boost/common';
import execa from 'execa';
import glob from 'fast-glob';
import fs from 'fs';
import path from 'path';

export interface LumosEnvSetting {
  targets?:
    | string[]
    | string
    | {
        browsers?: string[] | string;
        esmodules?: boolean;
        node?: string | 'current' | true;
        safari?: string | 'tp';
        [key: string]: unknown;
      };
  spec?: boolean;
  loose?: boolean;
  modules?: 'amd' | 'auto' | 'cjs' | 'commonjs' | 'systemjs' | 'umd' | false;
  debug?: boolean;
  include?: Array<RegExp | string>;
  exclude?: Array<RegExp | string>;
  useBuiltIns?: 'entry' | 'usage' | false;
  forceAllTransforms?: boolean;
  configPath?: string;
  ignoreBrowserslistConfig?: boolean;
  shippedProposals?: boolean;
}

export { execa, glob };

export function fromRoot(filePath: string, existsCheck = false): string {
  const absPath = path.join(process.cwd(), filePath);

  if (existsCheck && !fs.existsSync(absPath)) {
    return '';
  }

  return absPath;
}

let pkgCache: PackageStructure | null = null;

export function getPackage(): PackageStructure {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- typings are wrong, `process.beemo` can be undefined
  const instance = process.beemo?.tool;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (instance?.package) {
    return instance.package as PackageStructure;
  }

  if (pkgCache) {
    return pkgCache;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- TODO: rewrite
  pkgCache = require(fromRoot('package.json'));

  return pkgCache!;
}

