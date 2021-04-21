import { Path } from '@beemo/core';
import glob from 'fast-glob';

import { getPackage } from './core';

const { WEBPACK_ESM_SCOPES, WEBPACK_ESM_PACKAGES } = process.env;

export const WEBPACK_ROOT = process.cwd();

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
  const pkg = getPackage();
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
