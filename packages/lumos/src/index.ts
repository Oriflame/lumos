import { DriverContext, Path, Tool } from '@beemo/core';
import { getSettings, DIR_PATTERN_LIST } from '@oriflame/lumos-common';
import fs from 'fs';

function hasNoParams(context: DriverContext, name: string): boolean {
  const { params } = context.args;

  return params.length === 0 || (params.length === 1 && params[0] === name);
}

function createWorkspacesGlob(workspaces: string[]): string {
  const paths = workspaces.map((p) => p.replace('./', ''));

  return paths.length === 1 ? `${paths[0]}/` : `{${paths.join(',')}}/`;
}

export default function cli(tool: Tool) {
  const { buildFolder, srcFolder, testsFolder, typesFolder } = getSettings();
  const usingBabel = tool.driverRegistry.isRegistered('babel');
  const usingPrettier = tool.driverRegistry.isRegistered('prettier');
  const usingJest = tool.driverRegistry.isRegistered('jest');
  const usingTypescript = tool.driverRegistry.isRegistered('typescript');
  const workspaces = tool.project.getWorkspaceGlobs({ relative: true });
  const pathPrefix = workspaces.length > 0 ? createWorkspacesGlob(workspaces) : '';
  const exts = ['.ts', '.tsx', '.js', '.jsx'];

  /**
   * BABEL
   * - Add default extensions.
   * - Add source and output dirs by default.
   */
  tool.onRunDriver.listen((context, _) => {
    if (!context.getRiskyOption('extensions')) {
      context.addOption('--extensions', exts.join(','));
    }

    if (hasNoParams(context, 'babel')) {
      context.addParam(`./${srcFolder}`);
      context.addOption('--out-dir', context.getRiskyOption('esm') ? './esm' : `./${buildFolder}`);
    }
  }, 'babel');

  /**
   * NEXT JS
   */

  tool.onRunDriver.listen((_, driver) => {
    if (!usingTypescript) {
      driver.options.dependencies.push('typescript');
    }
  }, 'next');

  /**
   * ESLINT
   * - Add default extensions.
   * - Lint source and test folders by default.
   * - Create a `tsconfig.eslint.json` file.
   */
  tool.onRunDriver.listen((context, driver) => {
    context.addOptions(['--cache', '--color']);

    if (usingTypescript && !context.getRiskyOption('ext')) {
      context.addOption('--ext', exts.join(','));
    }

    if (hasNoParams(context, 'eslint')) {
      workspaces.forEach((wsPrefix) => {
        context.addParam(new Path(wsPrefix, `{${DIR_PATTERN_LIST},${srcFolder},${testsFolder}}`).path());
      });
    } else {
      context.addParams([srcFolder, testsFolder]);
    }
  }, 'eslint');

  /**
   * JEST
   * - Set common arguments. Include more during code coverage.
   * - Set environment variables by default.
   */
  tool.onRunDriver.listen((context, driver) => {
    context.addOptions(['--colors']);

    if (context.getRiskyOption('coverage')) {
      context.addOptions(['--logHeapUsage', '--detectOpenHandles']);
    }

    if (usingTypescript) {
      driver.options.dependencies.push('typescript');
    }

    driver.options.env.NODE_ENV = 'test';
    driver.options.env.TZ = 'UTC';
  }, 'jest');

  /**
   * PRETTIER
   * - Always write files.
   * - Glob a ton of files by default.
   */
  tool.onRunDriver.listen((context) => {
    context.addOption('--write');
    const customExtensions = '{ts,tsx,js,jsx,scss,css,gql,graphql,yml,yaml}';



    if (hasNoParams(context, 'prettier')) {
      if (workspaces.length > 0) {
        workspaces.forEach((wsPrefix) => {
          context.addParams([
            new Path(
              wsPrefix,
              `{${DIR_PATTERN_LIST},${srcFolder},${testsFolder}}`,
              `**/*.${customExtensions}`,
            ).path(),
            new Path(wsPrefix, '*.{md,json}').path(),
          ]);
        });
      } else {
        context.addParams([
          new Path(`{${DIR_PATTERN_LIST},${srcFolder},${testsFolder}}`, `**/*.${exts}`).path(),
          '*.{md,json}',
        ]);
      }
    }
  }, 'prettier');

  /**
   * WEBPACK
   * - Set common and custom arguments.
   * - Handle Babel and TS integration.
   */
  tool.onRunDriver.listen((context, driver) => {
    context.addOptions(['--colors', '--progress', '--bail']);

    if (usingBabel) {
      driver.options.dependencies.push('babel');

      // Babel 7.5 handles dynamic imports natively, which will break Webpack
      // when transforming to `commonjs`. So always force Babel to ESM mode.
      process.env.ESM = 'true';
    }

    if (usingTypescript) {
      driver.options.dependencies.push('typescript');
    }

    // Since webpack config uses references and doesn't have access to Beemo,
    // we need to set these environment variables for easy access.
    driver.configure({
      env: {
        SOURCE_MAPS: context.getRiskyOption('sourceMaps') ? 'true' : '',
        WEBPACK_ANALYZE: context.getRiskyOption('analyze') ? 'true' : '',
        WEBPACK_PARALLEL: String(context.getRiskyOption('parallel') || ''),
        LUMOS_BUILD_FOLDER: context.getRiskyOption('buildFolder') as string,
        LUMOS_ENTRY_POINT: context.getRiskyOption('entryPoint') as string,
      },
    });
  }, 'webpack');
}
