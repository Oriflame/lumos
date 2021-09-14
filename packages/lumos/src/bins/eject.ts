/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- TODO: better typings*/

import { Path } from '@beemo/core';
import { PluginEntry } from '@boost/config';
import { LumosPackage } from '@oriflame/lumos-common';
import chalk from 'chalk';
import editJsonFile from 'edit-json-file';
import { prompt } from 'enquirer';
import execa from 'execa';
import fs from 'fs';

import { BANNER } from '../constants';
import { installDeps } from '../helpers/installDeps';
import { removeDeps } from '../helpers/removeDeps';

interface EjectPrompt {
  monorepo: boolean;
  yarn: boolean;
}

const pkgPath = Path.resolve('package.json').path();

function writeJsFile(configPath: string, config: unknown) {
  fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(config, null, 2)}`, 'utf8');
}

async function copyAndInstallDepsFromModule(
  moduleName: string,
  isYarn: boolean,
  isMonorepo: boolean,
) {
  const pkg = require(`${moduleName}/package.json`) as Record<string, unknown>;
  const deps = Object.keys(pkg.dependencies as Record<string, string>).filter(
    (dep) => !dep.includes('@beemo') && !dep.includes('@oriflame/lumos'),
  );

  await installDeps(deps, isYarn, isMonorepo);
  await removeDeps([moduleName], isYarn, isMonorepo);
}

function escapeRegExp(value: string): string {
  return value.replace(/[$()*+.?[\\\]^{|}]/g, '\\$&');
}

function migrateDotfiles() {
  const toRemove = [
    '# Configs',
    '# Configs (provided by Lumos)',
    '.babelrc',
    '.eslintignore',
    '.eslintrc.js',
    '.flowconfig',
    '.prettierignore',
    'babel.config.js',
    'jest.config.js',
    'prettier.config.js',
    'tsconfig.json',
    'tsconfig.eslint.json',
    'tsconfig.options.json',
    '*.tsbuildinfo',
  ];

  try {
    const dotPath = Path.resolve('.gitignore').path();
    let data = fs.readFileSync(dotPath, 'utf8');

    toRemove.forEach((value) => {
      data = data.replace(new RegExp(`${escapeRegExp(value)}\n?`, 'g'), '');
    });

    fs.writeFileSync(dotPath, data.trim(), 'utf8');
  } catch (error: unknown) {
    // Ignore
  }
}

function migratePackageScripts(lumos: LumosPackage['lumos']) {
  const pkg = editJsonFile(pkgPath);
  const scripts = pkg.get<LumosPackage['scripts']>('scripts') ?? {};
  const srcFolder = lumos.settings?.srcFolder ?? 'src';
  const testFolder = lumos.settings?.testsFolder ?? 'tests';

  if (scripts.prepare.includes('create-config')) {
    delete scripts.prepare;
  }

  if (scripts.release.includes('auto-release')) {
    delete scripts.release;
  }

  Object.keys(scripts).forEach((key) => {
    const value = scripts[key];
    const esm = value.includes('--esm');

    scripts[key] = value
      .replace(
        'lumos babel',
        `${esm ? 'ESM=true ' : ''}babel ./${srcFolder} --out-dir ./${esm ? 'esm' : 'lib'}`,
      )
      .replace('--esm', '')
      .replace(
        'lumos eslint',
        `eslint --color --report-unused-disable-directives ./${srcFolder} ./${testFolder}`,
      )
      .replace('lumos jest', 'jest --colors')
      .replace('--coverage', '--coverage --logHeapUsage --detectOpenHandles')
      .replace('lumos prettier', `prettier --write ./${srcFolder} ./${testFolder}`)
      .replace('lumos typescript', 'tsc')
      .replace('lumos webpack', 'webpack --colors --progress --bail')
      .replace('lumos-webpack-server', 'webpack-dev-server')
      .trim();
  });

  pkg.set('scripts', scripts);
  pkg.save();
}

function migrateEslint() {
  const configPath = Path.resolve('.eslintrc.js').path();
  const { extends: extendPaths, ...rootConfig } = require(configPath);
  let config: { extends: string[]; parserOptions?: Record<string, unknown> } = { extends: [] };

  (extendPaths as string[]).forEach((extendPath) => {
    if (extendPath.startsWith('.')) {
      config = {
        ...config,
        ...require(extendPath),
      };
    } else {
      config.extends.push(extendPath);
    }
  });

  config = {
    ...config,
    ...rootConfig,
  };

  delete config.parserOptions;

  writeJsFile(configPath, config);
}

function migrateJest() {
  const configPath = Path.resolve('jest.config.js').path();
  const config = require(configPath);

  delete config.moduleNameMapper;
  delete config.setupFiles;
  delete config.setupFilesAfterEnv;
  delete config.testEnvironment;

  console.log(
    `${chalk.gray('[jest]')} ${chalk.yellow(
      'Jest config has been migrated but the following settings were removed: moduleNameMapper, setupFiles, setupFilesAfterEnv, testEnvironment',
    )}`,
  );

  console.log(
    `${chalk.gray('[jest]')} ${chalk.yellow(
      'This included custom serializers, transformers, mocks, setup files, and more provided by Lumos. These will need to be manually configured now.',
    )}`,
  );

  writeJsFile(configPath, config);
}

function migrateWebpack() {
  const configPath = Path.resolve('webpack.config.js').path();
  const url = 'https://github.com/Oriflame/lumos/blob/master/packages/config-webpack/index.js';

  console.log(
    `${chalk.gray('[webpack]')} ${chalk.yellow('Webpack config could not be migrated.')}`,
  );
  console.log(
    `${chalk.gray('[webpack]')} ${chalk.yellow(
      `Please copy portions of this config manually: ${url}`,
    )}`,
  );

  writeJsFile(configPath, {});
}

export async function eject() {
  console.log(BANNER);
  console.log(`${chalk.cyan('[1/5]')} Ejecting Lumos`);

  const lumos = editJsonFile(pkgPath).get<LumosPackage['lumos']>('lumos');

  if (!lumos) {
    throw new Error("Project isn't Lumos enabled.");
  }

  const response = await prompt<EjectPrompt>([
    {
      type: 'confirm',
      name: 'monorepo',
      message: 'Is this a monorepo?',
    },
    {
      type: 'confirm',
      name: 'yarn',
      message: 'Are you using Yarn?',
    },
  ]);

  await execa('lumos', ['create-config', '--silent'], { preferLocal: true });

  console.log(`${chalk.cyan('[2/5]')} Updating package scripts`);

  migratePackageScripts(lumos);

  console.log(`${chalk.cyan('[3/5]')} Migrating drivers`);
  let drivers: PluginEntry[] = [];

  if (Array.isArray(lumos.drivers)) {
    drivers = lumos.drivers;
  } else if (lumos.drivers) {
    drivers = Object.keys(lumos.drivers);
  }

  for (const driver of drivers) {
    console.log(`${chalk.gray(`[${driver}]`)} Migrating config`);
    const currentDriver = Array.isArray(driver) ? driver[0] : driver;

    if (currentDriver === 'eslint') {
      migrateEslint();
    } else if (currentDriver === 'jest') {
      migrateJest();
    } else if (currentDriver === 'webpack') {
      migrateWebpack();
    }

    console.log(`${chalk.gray(`[${currentDriver}]`)} Updating dependencies`);

    // eslint-disable-next-line no-await-in-loop -- we don't mind in this case
    await copyAndInstallDepsFromModule(
      `@oriflame/config-${currentDriver}`,
      response.yarn,
      response.monorepo,
    );

    // Remove the driver from the package in case the eject script fails later on.
    // This allows us to pickup where we left off.
    const pkg = editJsonFile(pkgPath);

    pkg.set(
      'lumos.drivers',
      (pkg.get('lumos.drivers') as string[]).filter((d) => d !== currentDriver),
    );
    pkg.save();
  }

  console.log(`${chalk.cyan('[4/5]')} Removing config`);

  await removeDeps(['@oriflame/lumos'], response.yarn, response.monorepo);

  const pkg = editJsonFile(pkgPath);

  pkg.unset('lumos');
  pkg.save();

  console.log(`${chalk.cyan('[5/5]')} Updating dotfiles`);

  migrateDotfiles();
}
