import { Path } from '@beemo/core';
import type { JestConfig } from '@beemo/driver-jest';
import { ALIAS_PATTERN, EXTS, GQL_EXT_PATTERN, TJSX_EXT_PATTERN } from '@oriflame/lumos-common';

export interface JestOptions {
  graphql?: boolean;
  react?: boolean;
  node?: boolean;
  srcFolder: string;
  testsFolder: string;
  threshold: number;
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
  threshold,
  workspaces = [],
  testResultFileName = 'TEST-RESULTS.xml',
  enableConsoleMocks = true,
}: JestOptions): JestConfig {
  let projects: string[] | undefined;
  const setupFiles: string[] = [];
  const snapshotSerializers: string[] = [];

  if (enableConsoleMocks) {
    setupFiles.push(fromHere('setup/console.js'));
  }

  const setupFilesAfterEnv: string[] = [];

  if (workspaces.length > 0) {
    projects = [];
    workspaces.forEach((wsPath) => {
      projects!.push(new Path('<rootDir>', wsPath.replace('/*', '')).path());
    });
  }

  if (react) {
    snapshotSerializers.push('@emotion/jest/serializer');
    setupFilesAfterEnv.push(fromHere('setup/emotion.js'));
    setupFiles.push(fromHere('setup/dom.js'));
  }

  if (graphql) {
    setupFilesAfterEnv.unshift(fromHere('bootstrap/graphql.js'));
  }

  setupFilesAfterEnv.push('@testing-library/jest-dom/extend-expect');

  const config: JestConfig = {
    preset: 'jest-preset-oriflame',
    bail: false,
    collectCoverageFrom: [createCoveragePattern(srcFolder), createCoveragePattern(testsFolder)],
    collectCoverage: true,
    snapshotSerializers,
    coverageThreshold: {
      global: {
        branches: threshold,
        functions: threshold,
        lines: threshold,
        statements: threshold,
      },
    },
    moduleNameMapper: {
      [`^${ALIAS_PATTERN}/(.*)`]: `<rootDir>/${srcFolder}/$1`,
    },
    projects,
    setupFiles,
    setupFilesAfterEnv,
    testEnvironment: node && !react ? 'node' : 'jsdom',
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
