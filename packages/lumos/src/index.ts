import Beemo, { DriverContext, Path } from '@beemo/core';
import { getSettings } from '@oriflame/lumos-common';
import fs from 'fs';

function hasNoPositionalArgs(context: DriverContext, name: string) {
  const args = context.args._;

  return args.length === 0 || (args.length === 1 && args[0] === name);
}

function createWorkspacesGlob(workspaces: string[]): string {
  const paths = workspaces.map((p) => p.replace('./', ''));

  return paths.length === 1 ? `${paths[0]}/` : `{${paths.join(',')}}/`;
}

export default function cli(tool: Beemo) {
  const { buildFolder, docsFolder, srcFolder, testsFolder, typesFolder } = getSettings();
  const usingBabel = tool.isPluginEnabled('driver', 'babel');
  const usingPrettier = tool.isPluginEnabled('driver', 'prettier');
  const usingJest = tool.isPluginEnabled('driver', 'jest');
  const usingTypescript = tool.isPluginEnabled('driver', 'typescript');
  const workspaces = tool.getWorkspacePaths({ relative: true });
  const pathPrefix = workspaces.length > 0 ? createWorkspacesGlob(workspaces) : '';
  const exts = ['.ts', '.tsx', '.js', '.jsx'];

  /**
   * BABEL
   * - Add default extensions.
   * - Add source and output dirs by default.
   */
  tool.onRunDriver.listen((context, _) => {
    if (!context.args.extensions) {
      context.addOption('--extensions', exts.join(','));
    }

    if (hasNoPositionalArgs(context, 'babel')) {
      context.addArg(`./${srcFolder}`);
      context.addOption('--out-dir', context.args.esm ? './esm' : `./${buildFolder}`);
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
    context.addOptions(['--color']);

    if (!context.args.ext) {
      context.addOption('--ext', exts.join(','));
    }

    if (hasNoPositionalArgs(context, 'eslint')) {
      const args = [`./${pathPrefix}${srcFolder}`];
      if (usingJest) {
        args.push(`./${pathPrefix}${testsFolder}`);
      }
      context.addArgs(args);
    }

    if (usingPrettier) {
      driver.options.dependencies.push('prettier');
    }

    // Create a specialized tsconfig for ESLint
    driver.onCreateConfigFile.listen((createContext) => {
      const configPath = createContext.cwd.append('tsconfig.eslint.json');
      const include = [`${typesFolder}/**/*`]; // Always allow global types
      let extendsFrom = './tsconfig.json';

      if (workspaces.length === 0) {
        include.push(`${srcFolder}/**/*`, `${testsFolder}/**/*`);
      } else {
        extendsFrom = './tsconfig.options.json';

        workspaces.forEach((ws) => {
          const wsPath = new Path(ws);

          include.push(
            wsPath.append(`${srcFolder}/**/*`).path(),
            wsPath.append(`${testsFolder}/**/*`).path(),
            wsPath.append(`${typesFolder}/**/*`).path(),
          );
        });
      }

      fs.writeFileSync(
        configPath.path(),
        JSON.stringify(
          {
            extends: extendsFrom,
            include,
          },
          null,
          2,
        ),
        'utf8',
      );

      createContext.addConfigPath('eslint', configPath);
    });
  }, 'eslint');

  /**
   * JEST
   * - Set common arguments. Include more during code coverage.
   * - Set environment variables by default.
   */
  tool.onRunDriver.listen((context, driver) => {
    context.addOptions(['--colors']);

    if (context.args.coverage) {
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

    if (hasNoPositionalArgs(context, 'prettier')) {
      context.addArgs([
        `./${pathPrefix}{bin,hooks,scripts,${srcFolder},${testsFolder}}/**/*.{ts,tsx,js,jsx,scss,css,gql,graphql,yml,yaml,md}`,
        `./${docsFolder}/**/*.md`,
        './*.{md,json}',
      ]);
    }
  }, 'prettier');

  /**
   * TYPESCRIPT
   * - Pass Lumos settings to the TS driver options.
   */
  tool.onRunDriver.listen((_, driver) => {
    driver.configure({
      // Dont want to pull in TS types.
      // @ts-expect-error
      buildFolder,
      srcFolder,
      testsFolder,
      typesFolder,
    });
  }, 'typescript');

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
        SOURCE_MAPS: context.args.sourceMaps ? 'true' : '',
        WEBPACK_ANALYZE: context.args.analyze ? 'true' : '',
        WEBPACK_PARALLEL: String(context.args.parallel || ''),
        LUMOS_BUILD_FOLDER: context.args.buildFolder as string,
        LUMOS_ENTRY_POINT: context.args.entryPoint as string,
      },
    });
  }, 'webpack');
}
