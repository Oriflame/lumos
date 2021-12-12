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
  engines?: { node?: string };
  dependencies?: PackageDeps;
  devDependencies?: PackageDeps;
  peerDependencies?: PackageDeps;
}

let packageJson: PackageJSON | undefined;

export function getRootPackageJSON(): PackageJSON {
  if (packageJson === undefined) {
    packageJson = parseJSON(PACKAGE_JSON_PATH);
  }

  return packageJson!;
}

const versionCache: Map<string, number> = new Map();

export function getPackageVersion(pkgName: string): number {
  if (versionCache.has(pkgName)) {
    return versionCache.get(pkgName)!;
  }

  try {
    const pkg = parseJSON<{ version: string }>(require.resolve(`${pkgName}/package.json`));

    versionCache.set(pkgName, Number.parseFloat(pkg.version));

    return versionCache.get(pkgName)!;
  } catch {
    versionCache.set(pkgName, 0);
  }

  try {
    const pkg = getRootPackageJSON();
    const version =
      pkg.dependencies?.[pkgName] ??
      pkg.devDependencies?.[pkgName] ??
      pkg.peerDependencies?.[pkgName];

    if (version) {
      versionCache.set(pkgName, Number.parseFloat(version.replace(/[^\d.]+/g, '')));

      return versionCache.get(pkgName)!;
    }
  } catch {
    versionCache.set(pkgName, 0);
  }

  return versionCache.get(pkgName)!;
}

export function getRootProjectReferences(): ProjectReference[] | undefined {
  return getRootTSConfig().references;
}
