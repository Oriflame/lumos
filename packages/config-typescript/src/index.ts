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
  declarationDir?: string;
  emitDeclarationOnly?: boolean;
  skipLibCheck?: boolean;
  buildFolder?: string;
}

export function getCompilerOptions({
  library = false,
  future = false,
  react = false,
  srcFolder = 'src',
  allowJs = false,
  skipLibCheck = false,
  sourceMaps = true,
  emitDeclarationOnly = false,
  declarationDir = 'dts',
  buildFolder,
  workspaces,
}: Partial<TypeScriptOptions>) {
  if (workspaces) {
    Object.assign(
      compilerOptions,
      (require('tsconfig-oriflame/tsconfig.workspaces.json') as TypeScriptConfig).compilerOptions,
    );
  }
  // Do we need isolated modules?
  compilerOptions.isolatedModules = future && library;
  compilerOptions.useDefineForClassFields = future && process.env.NODE_ENV === 'development';
  compilerOptions.allowJs = allowJs;
  compilerOptions.skipLibCheck = skipLibCheck;
  compilerOptions.declaration = library || emitDeclarationOnly;

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

  if (!workspaces) {
    compilerOptions.outDir = `./${buildFolder}`;
  }

  if (library && !workspaces) {
    compilerOptions.composite = true;
    compilerOptions.declarationDir = `./${declarationDir}`;
  }

  if (sourceMaps) {
    compilerOptions.sourceMap = true;
    compilerOptions.declarationMap = true;
  }

  return compilerOptions;
}

export function getConfig(options: TypeScriptOptions): TypeScriptConfig {
  const { workspaces, library, srcFolder, typesFolder, buildFolder } = options;
  if (workspaces) {
    return {
      compilerOptions: getCompilerOptions(options),
    };
  }

  return {
    compilerOptions: {
      ...getCompilerOptions(options),
      ...(library && { outDir: buildFolder }),
    },
    include: [`./${srcFolder}/**/*`, `./${typesFolder}/**/*`],
    exclude: ['**/node_modules/*'],
  };
}
