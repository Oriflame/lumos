import { TypeScriptConfig } from '@beemo/driver-typescript';

import { getSettings } from '../helpers/getSettings';

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
  declarationOnly = false,
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
  module: 'esnext',
  moduleResolution: 'node',
  noEmitOnError: true,
  noImplicitReturns: true,
  pretty: true,
  strict: true,
  removeComments: false,
  resolveJsonModule: true,
  skipLibCheck,
  emitDeclarationOnly: declarationOnly,
  sourceMap: Boolean(context.getRiskyOption('sourceMaps')),
  target: future || node ? 'es2020' : 'es2015',
  useDefineForClassFields: future && process.env.NODE_ENV === 'development',
};

const include: string[] = [];

if (tool.package.workspaces) {
  compilerOptions.composite = true;
  compilerOptions.declaration = true;
  compilerOptions.declarationMap = true;
  compilerOptions.emitDeclarationOnly = true;
  compilerOptions.noEmitOnError = false;
}

if (react) {
  compilerOptions.lib!.push('dom', 'dom.iterable');
  compilerOptions.jsx = 'react-jsx';
}

const config: TypeScriptConfig = {
  compilerOptions,
  include,
};

export default config;
