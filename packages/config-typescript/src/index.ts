import { TypeScriptConfig } from '@beemo/driver-typescript';
import { ALIAS_PATTERN } from '@oriflame/lumos-common';

// Keep in sync with the `tsconfig.options.json` file in this package.
export interface TypeScriptOptions {
  buildFolder: string;
  includeTests?: boolean;
  library?: boolean;
  future?: boolean;
  node?: boolean;
  react?: boolean;
  srcFolder: string;
  testsFolder: string;
  typesFolder: string;
  workspaces?: string[];
  emitDeclarationOnly?: boolean;
  allowJs?: boolean;
  skipLibCheck?: boolean;
}

export function getCompilerOptions({
  library = false,
  future = false,
  node = false,
  react = false,
  emitDeclarationOnly = false,
  srcFolder = 'src',
  allowJs = false,
  skipLibCheck = false,
}: Partial<TypeScriptOptions>) {
  const options: TypeScriptConfig['compilerOptions'] = {
    allowSyntheticDefaultImports: true,
    declaration: library || emitDeclarationOnly,
    esModuleInterop: true,
    forceConsistentCasingInFileNames: true,
    isolatedModules: !future && !library,
    jsx: 'preserve',
    lib: ['dom', 'DOM.Iterable', 'esnext'],
    module: node ? 'commonjs' : 'esnext',
    moduleResolution: 'node',
    noEmitOnError: true,
    noImplicitReturns: true,
    pretty: true,
    strict: true,
    target: future || node ? 'es2018' : 'es2015',
    // We want to resolve json modules
    resolveJsonModule: true,
    experimentalDecorators: true,
    // Use define in development for spec accuracy,
    // but omit in production for smaller file sizes.
    useDefineForClassFields: future && process.env.NODE_ENV === 'development',
    allowJs,
    skipLibCheck,
  };

  if (react) {
    // @ts-expect-error -- not typed
    options.jsx = 'react-jsx';
  }

  if (!library) {
    options.baseUrl = '.';
    options.paths = {
      [`${ALIAS_PATTERN}/*`]: [`./${srcFolder}/*`],
    };
  }

  return options;
}

export function getConfig(options: TypeScriptOptions): TypeScriptConfig {
  const config = {
    compilerOptions: getCompilerOptions(options),
    include: [`./${options.srcFolder}/**/*`, `./${options.typesFolder}/**/*`],
    exclude: ['**/node_modules/*'],
  };

  if (options.includeTests) {
    config.include.push(`./${options.testsFolder}/**/*`);
  }

  if (options.library) {
    config.compilerOptions.declarationDir = `./${options.buildFolder}`;
  }

  config.compilerOptions.outDir = `./${options.buildFolder}`;

  return config;
}

export function getConfigWithProjectRefs(options: Partial<TypeScriptOptions>): TypeScriptConfig {
  const config = {
    compilerOptions: getCompilerOptions(options),
    files: [],
    references: [],
  };

  config.compilerOptions.composite = true;
  config.compilerOptions.declarationMap = true;

  return config;
}
