import { allRules } from './allRules';

import a11yRulesConfig from '../../src/rules/a11y';
import eslintRulesConfig from '../../src/rules/eslint';
import eslintCommentsRulesConfig from '../../src/rules/eslint-comments';
import importRulesConfig from '../../src/rules/import';
import jestRulesConfig from '../../src/rules/jest-rules';
import nodeRulesConfig from '../../src/rules/node';
import prettierRulesConfig from '../../src/rules/prettier';
import promiseRulesConfig from '../../src/rules/promise';
import reactHooksRulesConfig from '../../src/rules/react-hooks';
import reactRulesConfig from '../../src/rules/react';
import testingLibraryRulesConfig from '../../src/rules/testing-library';
import typescriptRulesConfig from '../../src/rules/typescript';
import unicornRulesConfig from '../../src/rules/unicorn';

const a11yRules = Object.entries(a11yRulesConfig!).map(([ruleName]) => ruleName);
const eslintRules = Object.entries(eslintRulesConfig!).map(([ruleName]) => ruleName);
const eslintCommentsRules = Object.entries(eslintCommentsRulesConfig!).map(
  ([ruleName]) => ruleName,
);
const importRules = Object.entries(importRulesConfig!).map(([ruleName]) => ruleName);
const jestRules = Object.entries(jestRulesConfig!).map(([ruleName]) => ruleName);
const nodeRules = Object.entries(nodeRulesConfig!).map(([ruleName]) => ruleName);
const prettierRules = Object.entries(prettierRulesConfig!).map(([ruleName]) => ruleName);
const promiseRules = Object.entries(promiseRulesConfig!).map(([ruleName]) => ruleName);
const reactHookRules = Object.entries(reactHooksRulesConfig!).map(([ruleName]) => ruleName);
const reactRules = Object.entries(reactRulesConfig!).map(([ruleName]) => ruleName);
const testingLibraryRules = Object.entries(testingLibraryRulesConfig!).map(
  ([ruleName]) => ruleName,
);
const typescriptRules = Object.entries(typescriptRulesConfig!).map(([ruleName]) => ruleName);
const unicornRules = Object.entries(unicornRulesConfig!).map(([ruleName]) => ruleName);

const usedRules = [
  ...a11yRules,
  ...eslintRules,
  ...eslintCommentsRules,
  ...importRules,
  ...jestRules,
  ...nodeRules,
  ...prettierRules,
  ...promiseRules,
  ...reactHookRules,
  ...reactRules,
  ...testingLibraryRules,
  ...typescriptRules,
  ...unicornRules,
].sort();

const missingRules: string[] = [];

allRules.forEach((ruleName) => {
  if (!usedRules.includes(ruleName)) {
    missingRules.push(ruleName);
  }
});

missingRules.sort();

const deprecatedRules: string[] = [];

usedRules.forEach((ruleName) => {
  if (!allRules.includes(ruleName)) {
    deprecatedRules.push(ruleName);
  }
});

deprecatedRules.sort();

console.log('Deprecated rules:', deprecatedRules);
console.log('Missing rules:', missingRules);
