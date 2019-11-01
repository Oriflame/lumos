/* eslint-disable import/no-extraneous-dependencies */
import {
  checkForInvalidLocks,
  checkForConventionalPrefix,
  checkForConventionalSquashCommit,
} from '@rajzik/config-danger';

checkForInvalidLocks();
checkForConventionalPrefix();
checkForConventionalSquashCommit();
