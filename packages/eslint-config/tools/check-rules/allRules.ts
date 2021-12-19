/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
const eslint = require('eslint/lib/rules');
const eslintPluginTypescript = require('@typescript-eslint/eslint-plugin');
const eslintPluginEslintComments = require('eslint-plugin-eslint-comments');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginJest = require('eslint-plugin-jest');
const eslintPluginJsxA11y = require('eslint-plugin-jsx-a11y');
const eslintPluginNode = require('eslint-plugin-node');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginPromise = require('eslint-plugin-promise');
const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginReactHooks = require('eslint-plugin-react-hooks');
const eslintPluginTestingLibrary = require('eslint-plugin-testing-library');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');

interface Rule {
  meta: {
    deprecated: boolean;
  };
}

const eslintRules: string[] = [];

for (const [ruleName, rule] of eslint.entries()) {
  if (!rule.meta.deprecated) {
    eslintRules.push(ruleName);
  }
}

const typescriptRules = (Object.entries(eslintPluginTypescript.rules) as Array<[string, Rule]>)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `@typescript-eslint/${ruleName}`);

const eslintCommentsRules = (
  Object.entries(eslintPluginEslintComments.rules) as Array<[string, Rule]>
)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `eslint-comments/${ruleName}`);

const importRules = (Object.entries(eslintPluginImport.rules) as Array<[string, Rule]>)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `import/${ruleName}`);

const jestRules = (Object.entries(eslintPluginJest.rules) as Array<[string, Rule]>)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `jest/${ruleName}`);

const jsxA11yRules = (Object.entries(eslintPluginJsxA11y.rules) as Array<[string, Rule]>)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `jsx-a11y/${ruleName}`);

const nodeRules = (Object.entries(eslintPluginNode.rules) as Array<[string, Rule]>)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `node/${ruleName}`);

const prettierRules = (Object.entries(eslintPluginPrettier.rules) as Array<[string, Rule]>)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `prettier/${ruleName}`);

const promiseRules = (Object.entries(eslintPluginPromise.rules) as Array<[string, Rule]>)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `promise/${ruleName}`);

const reactRules = (Object.entries(eslintPluginReact.rules) as Array<[string, Rule]>)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `react/${ruleName}`);

const reactHooksRules = (Object.entries(eslintPluginReactHooks.rules) as Array<[string, Rule]>)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `react-hooks/${ruleName}`);

const testingLibraryRules = (
  Object.entries(eslintPluginTestingLibrary.rules) as Array<[string, Rule]>
)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `testing-library/${ruleName}`);

const unicornRules = (Object.entries(eslintPluginUnicorn.rules) as Array<[string, Rule]>)
  .filter(([ruleName, rule]) => !rule.meta.deprecated)
  .map(([ruleName]) => `unicorn/${ruleName}`);

export const allRules = [
  ...eslintRules,
  ...typescriptRules,
  ...eslintCommentsRules,
  ...importRules,
  ...jestRules,
  ...jsxA11yRules,
  ...nodeRules,
  ...prettierRules,
  ...promiseRules,
  ...reactRules,
  ...reactHooksRules,
  ...testingLibraryRules,
  ...unicornRules,
];
