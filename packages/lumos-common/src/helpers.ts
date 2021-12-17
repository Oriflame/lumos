import fs from 'fs';
import type { CompilerOptions, ProjectReference } from 'typescript';

import { TSCONFIG_JSON_PATH, PACKAGE_JSON_PATH } from './constants';

export function parseJSON<T>(filePath: string): T {
  const content = fs
    .readFileSync(filePath, 'utf8')
    .split('\n')
    // Remove comments from JSON files
    .filter((line) => !/^\s*(#|\/)/.test(line))
    .join('\n');

  return JSON.parse(content) as T;
}

interface TSConfigJSON {
  compilerOptions?: CompilerOptions;
  references?: ProjectReference[];
}

let tsconfigJson: TSConfigJSON | undefined;

export function getRootTSConfig(): TSConfigJSON {
  if (tsconfigJson === undefined) {
    tsconfigJson = parseJSON(TSCONFIG_JSON_PATH);
  }

  return tsconfigJson!;
}

type PackageDeps = Record<string, string>;

interface PackageJSON {
  name: string;
  engines?: { node?: string };
  dependencies?: PackageDeps;
  devDependencies?: PackageDeps;
  peerDependencies?: PackageDeps;
}

let packageJson: PackageJSON | undefined;

export function getRootPackageJson(): PackageJSON {
  if (packageJson === undefined) {
    packageJson = parseJSON(PACKAGE_JSON_PATH);
  }

  return packageJson!;
}

export function getRootProjectReferences(): ProjectReference[] | undefined {
  return getRootTSConfig().references;
}
