import { Path } from '@beemo/core';
import type { JestConfig } from '@beemo/driver-jest';
import {
  ALIAS_PATTERN,
  ASSET_EXT_PATTERN,
  CSS_EXT_PATTERN,
  EXTS,
  GQL_EXT_PATTERN,
  IGNORE_PATHS,
  TJSX_EXT_PATTERN,
} from '@oriflame/lumos-common';

export interface JestOptions {
  graphql?: boolean;
  react?: boolean;
  node?: boolean;
  srcFolder: string;
  testsFolder: string;
  threshold?: number;
  workspaces?: string[];
  testResultFileName?: string;
  enableConsoleMocks?: boolean;
}

const exts = EXTS.map((ext) => ext.slice(1));
const extsWithoutJSON = exts.filter((ext) => ext !== 'json');

function fromHere(filePath: string): string {
  return `<rootDir>/${new Path(process.cwd()).relativeTo(
    new Path(__dirname, '..', filePath).resolve(),
  )}`;
}

function createCoveragePattern(folder: string): string {
  return `**/${folder}/**/*.{${extsWithoutJSON.join(',')}}`;
}

/**
 * Create a root project config for a project.
 *
 * @param {ConfigOptions} options
 * @returns {JestConfig}
 */
export function getConfig({
  graphql = false,
  react = false,
  node = false,
  srcFolder,
  testsFolder,
  threshold = 40,
  workspaces = [],
  testResultFileName = 'TEST-RESULTS.xml',
  enableConsoleMocks = true,
}: JestOptions): JestConfig {
  const roots: string[] = [];
  const setupFiles = [fromHere('setup/shims.js')];

  if (enableConsoleMocks) {
    setupFiles.push(fromHere('setup/console.js'));
  }

  const setupFilesAfterEnv = [fromHere('bootstrap/consumer.js')];

  if (workspaces.length > 0) {
    workspaces.forEach((wsPath) => {
      roots.push(new Path('<rootDir>', wsPath.replace('/*', '')).path());
    });
  } else {
    roots.push('<rootDir>');
  }

  if (react) {
    setupFiles.push(fromHere('setup/dom.js'));
    setupFilesAfterEnv.unshift(fromHere('bootstrap/react.js'));
  }

  if (graphql) {
    setupFilesAfterEnv.unshift(fromHere('bootstrap/graphql.js'));
  }

  setupFilesAfterEnv.push('@testing-library/jest-dom/extend-expect');

  const config: JestConfig = {
    bail: false,
    collectCoverageFrom: [createCoveragePattern(srcFolder), createCoveragePattern(testsFolder)],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: IGNORE_PATHS.filter((ignore) => !ignore.startsWith('*')),
    coverageReporters: ['lcov', 'json-summary', 'html', 'cobertura'],
    coverageThreshold: {
      global: {
        branches: threshold,
        functions: threshold,
        lines: threshold,
        statements: threshold,
      },
    },
    globals: {
      __DEV__: true,
    },
    // Add custom mock extension so libs can export mocks
    moduleFileExtensions: ['mock.js', ...exts, 'node'],
    moduleNameMapper: {
      [`^.+${ASSET_EXT_PATTERN.source}`]: fromHere('mocks/file.js'),
      [`^.+${CSS_EXT_PATTERN.source}`]: fromHere('mocks/file.js'),
      [`^${ALIAS_PATTERN}/(.*)`]: `<rootDir>/${srcFolder}/$1`,
    },
    roots,
    setupFiles,
    setupFilesAfterEnv,
    testEnvironment: node && !react ? 'node' : 'jsdom',
    transformIgnorePatterns: ['/node_modules/', '/esm/', '/lib/'],
    testURL: 'http://localhost',
    timers: 'fake',
    verbose: false,
    reporters: ['default', ['jest-junit', { outputName: testResultFileName }]],
  };

  if (graphql) {
    config.transform = {
      [`^.+${GQL_EXT_PATTERN.source}`]: fromHere('transformers/graphql.js'),
      [`^.+${TJSX_EXT_PATTERN.source}`]: 'babel-jest',
    };
  }

  return config;
}
