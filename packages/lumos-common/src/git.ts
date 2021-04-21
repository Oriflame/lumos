import execa from 'execa';

export async function getLastTag(): Promise<string> {
  return execa('git', ['describe', '--tags', '--abbrev=0', '@^']).then((response) =>
    response.stdout.trim(),
  );
}

export async function getCommitsSince(since: string): Promise<string[]> {
  return execa('git', ['log', '--oneline', `${since}..@`]).then((response) =>
    response.stdout.trim().split('\n'),
  );
}

let commitHash = '';

export function getCommitHash(): string {
  if (commitHash) {
    return commitHash;
  }

  try {
    commitHash = execa.sync('git', ['rev-parse', '--short=7', 'HEAD']).stdout;
  } catch (error: unknown) {
    // Ignore error
  }

  return commitHash;
}
