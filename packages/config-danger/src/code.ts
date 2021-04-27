import path from 'path';

import {
  updatedFiles,
  touchedFiles,
  isRevert,
  SRC_EXT,
  TEST_EXT,
  GLOBAL_IGNORE,
  IS_SRC,
  IS_TEST,
  JS_EXT,
} from './helpers';
import { CommonOptions } from './types';

const changedSrcFiles = updatedFiles.filter((file) => IS_SRC.test(file) && SRC_EXT.test(file));

export interface TestOptions extends CommonOptions {
  ignorePattern?: RegExp;
  root?: string;
}

// Check for invalid NPM/Yarn installs by verifying the lock files.
export function checkForInvalidLocks() {
  const fileNames = new Set(touchedFiles.map((file) => path.basename(file)));

  if (fileNames.has('package-lock.json') && !fileNames.has('package.json')) {
    fail('Your PR contains changes to package-lock.json, but not package.json.');
  } else if (fileNames.has('npm-shrinkwrap.json') && !fileNames.has('package.json')) {
    fail('Your PR contains changes to npm-shrinkwrap.json, but not package.json.');
  } else if (fileNames.has('yarn.lock') && !fileNames.has('package.json')) {
    fail('Your PR contains changes to yarn.lock, but not package.json.');
  }
}

// Check that any test file exists when source files are updated.
export function checkForAnyTests({ root, ...options }: TestOptions = {}) {
  if (isRevert()) {
    return;
  }

  const hasTestFiles = touchedFiles.some((file) => !!TEST_EXT.test(file));
  const srcFiles = root
    ? changedSrcFiles.filter((srcFile) => srcFile.startsWith(root))
    : changedSrcFiles;

  if (srcFiles.length > 0 && !hasTestFiles) {
    const msg = 'Your PR contains changes to source files, but no test changes were found.';

    if (options.fail) {
      fail(msg);
    } else {
      warn(msg);
    }
  }
}

// Check that all touched source files have an accompanying test file change.
export function checkSourceFilesHaveTests({ ignorePattern, root, ...options }: TestOptions = {}) {
  if (isRevert()) {
    return;
  }

  const missingTestFiles: string[] = [];
  const srcFiles = root
    ? changedSrcFiles.filter((srcFile) => srcFile.startsWith(root))
    : changedSrcFiles;

  srcFiles.forEach((srcFile) => {
    if (ignorePattern?.exec(srcFile) ?? GLOBAL_IGNORE.exec(srcFile)) {
      return;
    }

    const testFile = srcFile
      .replace(IS_SRC, 'tests?/')
      // Foo/index.tsx -> Foo.test.tsx | Foo/index.test.tsx
      .replace(
        /(\w+)\/index\.((t|j)sx?)$/,
        (match, name, ext) => `(?:(${name}.test.${ext})|(${name}/index.test.${ext}))`,
      )
      // Foo.tsx -> Foo.test.tsx
      .replace(/(\w+)\.((t|j)sx?)$/, (match, name, ext) =>
        name === 'test' ? match : `${name}.test.${ext}`,
      );

    const regex = new RegExp(testFile);

    updatedFiles.forEach((file) => {
      if (regex.test(file)) {
        missingTestFiles.push(`- ${srcFile.split(IS_SRC)[1]}`);
      }
    });
  });

  if (missingTestFiles.length > 0) {
    const msg = `Your PR contains changes to the following source files, but no test changes were found.\n\n\n${missingTestFiles.join(
      '\n',
    )}`;

    if (options.fail) {
      fail(msg);
    } else {
      warn(msg);
    }
  }
}

// Component snapshot testing is deprecated, so disallow new snapshots.
export interface SnapshotOptions {
  docsUrl?: string;
}

const fileFilter = (file: string) => file.endsWith('jsx.snap') || file.endsWith('tsx.snap');

export function disableComponentSnapshots(options: SnapshotOptions = {}) {
  if (isRevert()) {
    return;
  }

  const hasCreatedSnapshot = danger.git.created_files.some(fileFilter);
  const hasUpdatedSnapshots = danger.git.modified_files.some(fileFilter);

  if (!hasCreatedSnapshot && !hasUpdatedSnapshots) {
    return;
  }

  let message = 'Snapshot testing has been deprecated. Please migrate to standard React testing.';

  if (options.docsUrl) {
    message += ` [View for more information](${options.docsUrl})`;
  }

  if (hasCreatedSnapshot) {
    fail(message);
  } else {
    warn(message);
  }
}

// Disable new JavaScript files from being created.
export function disableNewJavaScript() {
  const hasJS = danger.git.created_files.some(
    (file) => (IS_SRC.test(file) || IS_TEST.test(file)) && JS_EXT.test(file),
  );

  if (hasJS) {
    fail('JavaScript detected. All new files must be TypeScript.');
  }
}
