import { getSettings } from '@oriflame/lumos-common';
import { TypeScriptConfig } from '@beemo/driver-typescript';

const { context, tool } = process.beemo;
const settings = getSettings();
const { options } = tool.driverRegistry.get('typescript');

const {
  buildFolder,
  srcFolder,
  testsFolder,
  typesFolder,
  node,
  decorators,
  react,
  library,
  future,
  allowJs,
  skipLibCheck,
  declarationDir,
} = { ...settings, ...options };


const compilerOptions: TypeScriptConfig['compilerOptions'] = {
  allowJs,
  allowSyntheticDefaultImports: true,
  declaration: true,
  esModuleInterop: true,
  experimentalDecorators: Boolean(decorators),
  forceConsistentCasingInFileNames: true,
  isolatedModules: !future && !library,
  lib: ['esnext'],
  module: 'commonjs',
  moduleResolution: 'node',
  noEmitOnError: true,
  noImplicitReturns: true,
  declarationDir,
  pretty: true,
  strict: true,
  removeComments: false,
  resolveJsonModule: true,
  skipLibCheck,
  sourceMap: Boolean(context.getRiskyOption('sourceMaps')),
  target: node ? 'es2018' : 'es5',
  useDefineForClassFields: future && process.env.NODE_ENV === 'development',
};

const include: string[] = [];

if (react) {
  compilerOptions.lib!.push('dom');
  compilerOptions.jsx = 'react-jsx';
}


if (!context.getRiskyOption('referenceWorkspaces')) {
  include.push(`./${srcFolder}/**/*`, `./${typesFolder}/**/*`);

  // When --noEmit is passed, we want to run the type checker and include test files.
  // Otherwise, we do not want to emit declarations for test files.
  if (context.getRiskyOption('noEmit')) {
    include.push(`./${testsFolder}/**/*`);
  }

  compilerOptions.outDir = `./${buildFolder}`;
}

const config: TypeScriptConfig = {
  compilerOptions,
  include,
};

export default config;
