import { BeemoConfig, DriverContext, Tool } from '@beemo/core';
import { DIR_PATTERN_LIST, ESLINT_DIRS } from '@oriflame/lumos-common';

import { getSettings } from './helpers/getSettings';
import { LumosSettings } from './types';

function hasNoParams(context: DriverContext, name: string): boolean {
  const { params } = context.args;

  return params.length === 0 || (params.length === 1 && params[0] === name);
}

export type LumosConfig = BeemoConfig<Partial<LumosSettings>>;

export type { ConfigTemplateResult, ConfigTemplateOptions, ConfigObject } from '@beemo/core';

export default function lumos(tool: Tool) {
  const { srcFolder, testsFolder, esmBuildFolder, buildFolder } = getSettings(tool);
  const usingTypescript = tool.driverRegistry.isRegistered('typescript');
  const workspaces = tool.project.getWorkspaceGlobs({ relative: true });
  const exts = ['.ts', '.tsx', '.js', '.jsx'];

  /**
   * BABEL
   * - Add default extensions.
   * - Add source and output dirs by default.
   */
  tool.onRunDriver.listen((context) => {
    context.addOption('--copy-files');

    if (usingTypescript && !context.getRiskyOption('extensions')) {
      context.addOption('--extensions', exts.join(','));
    }

    if (hasNoParams(context, 'babel')) {
      context.addParam(srcFolder);
      context.addOption(
        '--out-dir',
        tool.config.settings.esm || context.getRiskyOption('esm') ? esmBuildFolder : buildFolder,
      );
    }
  }, 'babel');

  /**
   * ESLINT
   * - Add default extensions.
   * - Lint source and test folders by default.
   * - Create a `tsconfig.eslint.json` file.
   */
  tool.onRunDriver.listen((context) => {
    context.addOptions(['--cache', '--color']);

    if (usingTypescript && !context.getRiskyOption('ext')) {
      context.addOption('--ext', exts.join(','));
    }

    if (hasNoParams(context, 'eslint')) {
      if (workspaces.length > 0) {
        workspaces.forEach((wsPrefix) => {
          context.addOption(`${wsPrefix}/{${DIR_PATTERN_LIST},${srcFolder},${testsFolder}}`);
        });
      } else {
        context.addOptions([srcFolder, testsFolder, ...ESLINT_DIRS]);
      }
    }

    // Generate prettier config for the prettier rules
    if (tool.driverRegistry.isRegistered('prettier')) {
      context.addDriverDependency(tool.driverRegistry.get('prettier'));
    }

    // Generate typescript config for the typescript rules
    if (usingTypescript) {
      context.addDriverDependency(tool.driverRegistry.get('typescript'));
    }
  }, 'eslint');

  /**
   * JEST
   * - Set common arguments. Include more during code coverage.
   * - Set environment variables by default.
   */
  tool.onRunDriver.listen((context, driver) => {
    context.addOptions(['--colors', '--logHeapUsage']);

    if (context.getRiskyOption('coverage')) {
      context.addOptions(['--detectOpenHandles']);
    }
    const env: Record<string, string> = {
      NODE_ENV: 'test',
      TZ: 'UTC',
    };
    // https://jestjs.io/docs/ecmascript-modules
    if (tool.config.settings.esm) {
      env.NODE_OPTIONS = `--experimental-vm-modules ${process.env.NODE_OPTIONS ?? ''}`.trim();
    }

    if (usingTypescript) {
      driver.options.dependencies.push('typescript');
    }

    // Generate babel config to transform files
    if (tool.driverRegistry.isRegistered('babel')) {
      context.addDriverDependency(tool.driverRegistry.get('babel'));
    }

    driver.configure({
      env,
    });
  }, 'jest');

  /**
   * PRETTIER
   * - Always write files.
   */
  tool.onRunDriver.listen((context) => {
    if (hasNoParams(context, 'prettier')) {
      context.addOption('--write');
      context.addOption('.');
    }
  }, 'prettier');

  /**
   * WEBPACK
   * - Set common and custom arguments.
   * - Handle Babel and TS integration.
   */
  tool.onRunDriver.listen((context, driver) => {
    const isServe = context.args.params.some((item) => item === 'serve');
    if (isServe) {
      // @ts-expect-error -- test
      driver.options.outputStrategy = 'stream';

      // .options.outputStrategy = 'stream';
    } else {
      context.addOptions(['--colors', '--progress', '--bail']);
    }

    if (tool.driverRegistry.isRegistered('babel')) {
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
        LUMOS_BUILD_FOLDER: (context.getRiskyOption('buildFolder') as string) || '',
        LUMOS_ENTRY_POINT: (context.getRiskyOption('entryPoint') as string) || '',
        LUMOS_SETTINGS: JSON.stringify(tool.config.settings),
      },
    });
  }, 'webpack');
}

export type { BabelConfig } from '@beemo/driver-babel';
export type { JestConfig } from '@beemo/driver-jest';
export type { ESLintConfig } from '@beemo/driver-eslint';
export type { TypeScriptConfig } from '@beemo/driver-typescript';
export type { PrettierConfig } from '@beemo/driver-prettier';
export type { WebpackConfig } from '@beemo/driver-webpack';
