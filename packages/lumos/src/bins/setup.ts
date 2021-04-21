import { Path } from '@beemo/core';
import { LumosPackage, SCAFFOLD_DEPS } from '@oriflame/lumos-common';
import chalk from 'chalk';
import editJsonFile from 'edit-json-file';
import { prompt } from 'enquirer';
import execa from 'execa';

import { BANNER } from '../constants';
import { installDeps } from '../helpers/installDeps';

interface SetupPrompt {
  drivers: string[];
  libs: string[];
  type: string;
  node: boolean;
  next: boolean;
  scaffold: boolean;
  scripts: boolean;
  yarn: boolean;
}

const pkgPath = Path.resolve('package.json').path();

function addLumosToPackage(response: SetupPrompt) {
  const pkg = editJsonFile(pkgPath);
  const lumos: Partial<LumosPackage['lumos']> = {
    drivers: response.drivers,
    settings: {},
  };

  if (response.libs.includes('react')) {
    lumos.settings!.react = true;
  }

  if (response.libs.includes('graphql')) {
    lumos.settings!.graphql = true;
  }

  if (response.type === 'lib' || response.type === 'monolib') {
    lumos.settings!.library = true;
  }

  if (response.type === 'app') {
    lumos.settings!.entryPoint = 'app-loader.tsx';
  }

  if (response.next) {
    lumos.settings!.next = true;
  }

  if (response.node) {
    lumos.settings!.node = true;
  }

  pkg.set('lumos', lumos);
  pkg.save();
}

function addScriptsToPackage(response: SetupPrompt) {
  const { drivers } = response;
  const pkg = editJsonFile(pkgPath);
  const client = response.yarn ? 'yarn' : 'npm';
  const monorepo = response.type === 'monolib';

  const scripts = pkg.get<LumosPackage['scripts']>('scripts') ?? {};

  scripts.prepare = 'lumos create-config --silent';

  if (drivers.includes('babel')) {
    if (monorepo) {
      scripts.build = 'lumos babel --workspaces=* && lumos babel --esm --workspaces=*';
    } else {
      scripts.build = 'lumos babel && lumos babel --esm';
    }
  }

  if (drivers.includes('eslint')) {
    scripts.lint = 'lumos eslint';
    scripts.posttest = `${client} run lint`;
  }

  if (drivers.includes('jest')) {
    scripts.jest = 'cross-env NODE_ENV=test TZ=UTC lumos jest';
    scripts['jest:coverage'] = `${client} run jest ${response.yarn ? '' : '--'} --coverage`;
    scripts.test = `${client} run jest:coverage`;
  }

  if (drivers.includes('prettier')) {
    scripts.prettier = 'lumos prettier';
  }

  if (drivers.includes('typescript')) {
    if (monorepo) {
      scripts.type = 'lumos typescript --build --reference-workspaces';
      scripts.prebuild = 'yarn run type';
    } else {
      scripts.type = 'lumos typescript --noEmit';
      scripts.postbuild = 'lumos typescript --emitDeclarationOnly';
    }

    scripts.pretest = `${client} run type`;
  }

  if (drivers.includes('webpack')) {
    scripts.build = 'cross-env NODE_ENV=production lumos webpack';
    scripts.start = 'lumos create-config webpack --silent && lumos-webpack-server';

    delete scripts.prebuild;
    delete scripts.postbuild;
  }

  pkg.set('scripts', scripts);
  pkg.save();
}

export async function setup() {
  console.log(BANNER);
  console.log(`${chalk.cyan('[1/6]')} Setting up Lumos`);

  const response = await prompt<SetupPrompt>([
    {
      type: 'multiselect',
      name: 'drivers',
      message: 'Which developer tools are you going to use?',
      choices: [
        { message: 'Babel', name: 'babel' },
        { message: 'ESLint', name: 'eslint' },
        { message: 'Jest', name: 'jest' },
        { message: 'Prettier', name: 'prettier' },
        { message: 'TypeScript', name: 'typescript' },
        { message: 'Webpack', name: 'webpack' },
      ],
    },
    {
      type: 'multiselect',
      name: 'libs',
      message: 'Which libraries are you going to use?',
      choices: [
        { message: 'React', name: 'react' },
        { message: 'GraphQL', name: 'graphql' },
      ],
    },
    {
      type: 'select',
      name: 'type',
      message: 'Which type of project is this?',
      choices: [
        { message: 'Application', name: 'app' },
        { message: 'Library', name: 'lib' },
        { message: 'Library (monorepo)', name: 'monolib' },
      ],
    },
    {
      type: 'confirm',
      name: 'node',
      message: 'Is this a Node.js only project?',
    },
    {
      type: 'confirm',
      name: 'next',
      message: 'Do you want to enable experimental features?',
    },
    {
      type: 'confirm',
      name: 'scaffold',
      message: 'Do you want to scaffold dotfiles?',
    },
    {
      type: 'confirm',
      name: 'scripts',
      message: 'Do you want to define package scripts?',
    },
    {
      type: 'confirm',
      name: 'yarn',
      message: 'Are you using Yarn?',
    },
  ]);

  if (response.drivers.includes('jest') && !response.drivers.includes('babel')) {
    response.drivers.push('babel');
  }

  console.log(`${chalk.cyan('[2/6]')} Updating package settings`);

  addLumosToPackage(response);

  console.log(`${chalk.cyan('[3/6]')} Installing dependencies`);

  let dependencies = [
    '@oriflame/lumos',
    ...response.drivers.map((driver) => `@oriflame/config-${driver}`),
  ];

  if (response.scaffold) {
    dependencies = [...dependencies, ...SCAFFOLD_DEPS];
  }

  await installDeps(dependencies, response.yarn, response.type === 'monolib');

  console.log(`${chalk.cyan('[4/6]')} Adding package scripts`);

  if (response.scripts) {
    addScriptsToPackage(response);
  } else {
    console.log(chalk.gray('Not chosen, skipping'));
  }

  console.log(`${chalk.cyan('[5/6]')} Scaffolding dotfiles`);

  if (response.scaffold) {
    await execa('lumos', ['scaffold', 'project', 'dotfiles'], {
      preferLocal: true,
    });
  } else {
    console.log(chalk.gray('Not chosen, skipping'));
  }

  console.log(`${chalk.cyan('[6/6]')} Generating config files`);

  await execa('lumos', ['create-config', '--silent'], { preferLocal: true });
}
