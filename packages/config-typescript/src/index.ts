import type { TypeScriptConfig } from '@beemo/driver-typescript';
import { ALIAS_PATTERN } from '@oriflame/lumos-common';

const config = require('tsconfig-oriflame/tsconfig.json') as TypeScriptConfig;

const compilerOptions = config.compilerOptions!;

export interface TypeScriptOptions {
  sourceMaps?: boolean;
  library?: boolean;
  future?: boolean;
  react?: boolean;
  srcFolder: string;
  typesFolder: string;
  workspaces?: boolean;
  allowJs?: boolean;
  includeTests?: boolean;
  testsFolder: string;
  buildFolder: string;
  declarationFolder?: string;
  declarationOnly?: boolean;
  skipLibCheck?: boolean;
}

export function getCompilerOptions({
  library = false,
  future = false,
  react = false,
  srcFolder = 'src',
  allowJs = false,
  skipLibCheck = false,
  sourceMaps = true,
  declarationOnly = false,
  declarationFolder,
  buildFolder,
  includeTests,
  workspaces,
}: Partial<TypeScriptOptions>) {
  if (workspaces) {
    Object.assign(
      compilerOptions,
      (require('tsconfig-oriflame/tsconfig.workspaces.json') as TypeScriptConfig).compilerOptions,
    );
  }
  // Do we need isolated modules?
  compilerOptions.isolatedModules = future && library && !includeTests;
  compilerOptions.useDefineForClassFields = future && process.env.NODE_ENV === 'development';
  compilerOptions.allowJs = allowJs;
  compilerOptions.skipLibCheck = skipLibCheck;

  if (react) {
    compilerOptions.lib = [...(compilerOptions.lib ?? []), 'dom.iterable'];
    compilerOptions.jsx = 'react-jsx';
  }

  if (!library) {
    compilerOptions.baseUrl = '.';
    compilerOptions.paths = {
      [`${ALIAS_PATTERN}/*`]: [`./${srcFolder}/*`],
    };
  }

  if (!workspaces && library) {
    compilerOptions.declarationDir = declarationFolder || buildFolder;
  }

  if (!workspaces) {
    if (!includeTests) {
      compilerOptions.rootDir = srcFolder;
      compilerOptions.emitDeclarationOnly = declarationOnly;
      compilerOptions.declaration = library || declarationOnly;
      compilerOptions.declarationMap = library || declarationOnly;
      compilerOptions.outDir = buildFolder;
    }
    compilerOptions.composite = library;
  }

  if (sourceMaps) {
    compilerOptions.sourceMap = true;
  }

  return compilerOptions;
}

export function getConfig(options: TypeScriptOptions): TypeScriptConfig {
  const { workspaces, srcFolder, typesFolder, includeTests, testsFolder } = options;
  if (workspaces) {
    return {
      compilerOptions: getCompilerOptions(options),
    };
  }

  const tsconfig = {
    compilerOptions: getCompilerOptions(options),
    include: [`./${srcFolder}/**/*`, `./${typesFolder}/**/*`],
    exclude: ['**/node_modules/*'],
  };

  if (includeTests) {
    tsconfig.include.push(`./${testsFolder}/**/*`);
  }

  return tsconfig;
}
