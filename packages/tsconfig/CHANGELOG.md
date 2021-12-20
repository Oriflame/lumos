# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### 5.0.13 - 2021-12-20

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.12 - 2021-12-20

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.11 - 2021-12-20

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.10 - 2021-12-20

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.9 - 2021-12-19

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.8 - 2021-12-19

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.7 - 2021-12-19

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.6 - 2021-12-19

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.5 - 2021-12-19

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.4 - 2021-12-19

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.3 - 2021-12-19

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.2 - 2021-12-19

**Note:** Version bump only for package tsconfig-oriflame





### 5.0.1 - 2021-12-19

**Note:** Version bump only for package tsconfig-oriflame





# 5.0.0 - 2021-12-19

# @oriflame/lumos was migrated to Beemo v2

[Beemo documentation](https://beemo.dev/docs).
[Beemo migration notes](https://beemo.dev/docs/migration/2.0).

## Breaking changes

- configs are included in lumos
```diff
  "devDependencies": {
-    "@oriflame/config-babel": "4.3.0",
-    "@oriflame/config-eslint": "4.3.0",
-    "@oriflame/config-jest": "4.3.0",
-    "@oriflame/config-prettier": "4.3.0",
-    "@oriflame/config-typescript": "4.3.0",
-     "@oriflame/lumos": "4.3.0",
+     "@oriflame/lumos": "5.0.0",
  }
```
- `lumos-setup` and `lumos-eject` was removed
- Configuration was removed from package.json to `.config/lumos.ts`
```diff
-  "lumos": {
-    "drivers": [
-      "babel",
-      "eslint",
-      "jest",
-      "prettier",
-      "typescript"
-    ],
-    "settings": {
-      "react": true,
-      "testingLibrary": true,
-      "library": true,
-      "future": true,
-      "coverage": 97,
-      "node": true,
-      "buildFolder": "esm"
-    }
-  },
```
- Configs were moved from `config/[driver-name].js` to `.config/lumos/[driver-name].ts`
- Jest no longer need NODE_ENV and TZ env
```diff
-   "jest": "cross-env NODE_ENV=test TZ=UTC lumos jest",
+   "jest": "lumos jest",
```
- typescript `--reference-workspaces` was removed
```diff
-   "build": "lumos typescript --build --reference-workspaces",
+   "build": "lumos typescript --build",
```
- typescript no longer generates tsconfigs in packages automatically. Run `lumos typescript:sync-project-refs` to update them.
```diff
+   "sync-projects": "lumos typescript:sync-project-refs",
```

#### 💥 Breaking

- Migrate to beemo v2. (#790) ([475ba3d](https://github.com/oriflame/lumos/commit/475ba3d25376f8a17fd8b9c70777cc6a3327d35a)), work items [#790](https://github.com/oriflame/lumos/issues/790)

**Note:** Version bump only for package tsconfig-oriflame
