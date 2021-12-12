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
  workspaces?: boolean;
  allowJs?: boolean;
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
  workspaces,
}: Partial<TypeScriptOptions>) {
  if (workspaces) {
    Object.assign(
      compilerOptions,
      (require('tsconfig-oriflame/tsconfig.workspaces.json') as TypeScriptConfig).compilerOptions,
    );
  }

  compilerOptions.isolatedModules = !future && !library;
  compilerOptions.useDefineForClassFields = future && process.env.NODE_ENV === 'development';
  compilerOptions.allowJs = allowJs;
  compilerOptions.skipLibCheck = skipLibCheck;

  if (react) {
    compilerOptions.lib = [...(compilerOptions.lib ?? []), 'dom', 'dom.iterable'];
    compilerOptions.jsx = 'react-jsx';
  }

  if (!library) {
    compilerOptions.baseUrl = '.';
    compilerOptions.paths = {
      [`${ALIAS_PATTERN}/*`]: [`./${srcFolder}/*`],
    };
  }

  if (sourceMaps) {
    compilerOptions.sourceMap = true;
  }

  return compilerOptions;
}

export function getConfig(options: TypeScriptOptions): TypeScriptConfig {
  return {
    compilerOptions: getCompilerOptions(options),
  };
}
