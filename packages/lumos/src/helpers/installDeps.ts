import execa from 'execa';

export async function installDeps(deps: string[], isYarn = false, isMonorepo = false) {
  const args: string[] = [];

  if (isYarn) {
    args.push('--dev', '--no-progress');

    if (isMonorepo) {
      args.push('-W');
    }

    await execa('yarn', ['add', ...args, ...deps]);
  } else {
    args.push('--save-dev');

    await execa('npm', ['install', ...args, ...deps]);
  }
}
