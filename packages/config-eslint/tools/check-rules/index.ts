import { allRules } from './allRules';

import a11yRulesConfig from '../../src/rules/a11y';
import eslintRulesConfig from '../../src/rules/eslint';
import eslintCommentsRulesConfig from '../../src/rules/eslint-comments';
import importRulesConfig from '../../src/rules/import';
import jestRulesConfig from '../../src/rules/jest';
import nodeRulesConfig from '../../src/rules/node';
import prettierRulesConfig from '../../src/rules/prettier';
import promiseRulesConfig from '../../src/rules/promise';
import reactRulesConfig from '../../src/rules/react';
import testingLibraryRulesConfig from '../../src/rules/testing-library';
import typescriptRulesConfig from '../../src/rules/typescript';
import unicornRulesConfig from '../../src/rules/unicorn';
import { RuleOptions, RuleSetting } from '@beemo/driver-eslint';

const filerDisabledRules = ([ruleName, rule]: [
  string,
  RuleSetting | [RuleSetting, ...RuleOptions[]],
]) => {
  if (Array.isArray(rule)) {
    if (rule[0] === 0 || rule[0] === '0' || rule[0] === 'off') {
      return false;
    }
  }

  if (rule === 0 || rule === '0' || rule === 'off') {
    return false;
  }

  return true;
};

const a11yRules = Object.entries(a11yRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);
const eslintRules = Object.entries(eslintRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);
const eslintCommentsRules = Object.entries(eslintCommentsRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);
const importRules = Object.entries(importRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);
const jestRules = Object.entries(jestRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);
const nodeRules = Object.entries(nodeRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);
const prettierRules = Object.entries(prettierRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);
const promiseRules = Object.entries(promiseRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);
const reactRules = Object.entries(reactRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);
const testingLibraryRules = Object.entries(testingLibraryRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);
const typescriptRules = Object.entries(typescriptRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);
const unicornRules = Object.entries(unicornRulesConfig!)
  // .filter(filerDisabledRules)
  .map(([ruleName]) => ruleName);

const usedRules = [
  ...a11yRules,
  ...eslintRules,
  ...eslintCommentsRules,
  ...importRules,
  ...jestRules,
  ...nodeRules,
  ...prettierRules,
  ...promiseRules,
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
