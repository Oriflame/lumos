# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### 5.1.6 - 2022-01-04

#### 🛠 Internals

- update dependency @types/node to ^16.11.18 (#929) ([ecb08df](https://github.com/Oriflame/lumos/commit/ecb08df530e645af5e42937f22b1ca9b0412116b)), work items [#929](https://github.com/Oriflame/lumos/issues/929)

**Note:** Version bump only for package @oriflame/config-danger





### 5.1.5 - 2022-01-03

**Note:** Version bump only for package @oriflame/config-danger





### 5.1.4 - 2022-01-01

**Note:** Version bump only for package @oriflame/config-danger





### 5.1.3 - 2022-01-01

**Note:** Version bump only for package @oriflame/config-danger





### 5.1.2 - 2021-12-31

**Note:** Version bump only for package @oriflame/config-danger





### 5.1.1 - 2021-12-31

**Note:** Version bump only for package @oriflame/config-danger





### 5.1.0 - 2021-12-30

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.29 - 2021-12-29

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.28 - 2021-12-29

#### 🛠 Internals

- update dependency @types/node to ^16.11.17 (#911) ([8d26744](https://github.com/Oriflame/lumos/commit/8d267443ff71c9940d8fdb72471cc19cad0682cf)), work items [#911](https://github.com/Oriflame/lumos/issues/911)

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.27 - 2021-12-29

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.26 - 2021-12-29

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.25 - 2021-12-27

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.24 - 2021-12-27

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.23 - 2021-12-27

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.22 - 2021-12-27

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.21 - 2021-12-23

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.20 - 2021-12-23

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.19 - 2021-12-23

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.18 - 2021-12-23

#### 🛠 Internals

- update dependency @types/node to ^16.11.16 (#909) ([20e0166](https://github.com/Oriflame/lumos/commit/20e01665785d9858ba0c28ea6f5c0cd472826af6)), work items [#909](https://github.com/Oriflame/lumos/issues/909)

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.17 - 2021-12-22

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.16 - 2021-12-22

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.15 - 2021-12-21

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.14 - 2021-12-21

#### 🛠 Internals

- update dependency @types/node to ^16.11.15 (#900) ([9274edf](https://github.com/Oriflame/lumos/commit/9274edf4017ee92e82a70d942dc7742f6c65218b)), work items [#900](https://github.com/Oriflame/lumos/issues/900)

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.13 - 2021-12-20

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.12 - 2021-12-20

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.11 - 2021-12-20

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.10 - 2021-12-20

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.9 - 2021-12-19

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.8 - 2021-12-19

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.7 - 2021-12-19

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.6 - 2021-12-19

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.5 - 2021-12-19

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.4 - 2021-12-19

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.3 - 2021-12-19

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.2 - 2021-12-19

**Note:** Version bump only for package @oriflame/config-danger





### 5.0.1 - 2021-12-19

#### 📦 Dependencies

- Update to latest. ([4a051aa](https://github.com/Oriflame/lumos/commit/4a051aaba4a187300606947db0a50d7e14a0bfae))

**Note:** Version bump only for package @oriflame/config-danger





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

- Migrate to beemo v2. (#790) ([475ba3d](https://github.com/Oriflame/lumos/commit/475ba3d25376f8a17fd8b9c70777cc6a3327d35a)), work items [#790](https://github.com/Oriflame/lumos/issues/790)

**Note:** Version bump only for package @oriflame/config-danger





### 4.3.0 - 2021-11-30

**Note:** Version bump only for package @oriflame/config-danger





### 4.2.3 - 2021-11-16

**Note:** Version bump only for package @oriflame/config-danger





### 4.2.2 - 2021-11-09

**Note:** Version bump only for package @oriflame/config-danger





### 4.2.1 - 2021-11-08

**Note:** Version bump only for package @oriflame/config-danger





### 4.2.0 - 2021-11-08

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.15 - 2021-11-01

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.14 - 2021-11-01

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.13 - 2021-10-31

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.12 - 2021-10-29

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.11 - 2021-10-28

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.10 - 2021-10-27

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.9 - 2021-10-27

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.8 - 2021-10-26

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.7 - 2021-10-26

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.6 - 2021-10-26

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.5 - 2021-10-26

#### 📦 Dependencies

- update dependency @oriflame/conventional-changelog to ^1.2.0 (#859) ([e37440a](https://github.com/Oriflame/lumos/commit/e37440a0c5a0ac1a18615297c664e0d660b1aaf2)), work items [#859](https://github.com/Oriflame/lumos/issues/859)

#### 🛠 Internals

- update dependency @types/node to v16 (#864) ([f441ce7](https://github.com/Oriflame/lumos/commit/f441ce7533045d9b5153f67bb0ea56d452fcff22)), work items [#864](https://github.com/Oriflame/lumos/issues/864)

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.4 - 2021-10-26

#### 🛠 Internals

- update dependency @types/node to ^14.17.32 (#862) ([d3a0941](https://github.com/Oriflame/lumos/commit/d3a09412f28629f30ee3e9806945b1f71f331dc3)), closes  _#862_

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.3 - 2021-10-24

#### 🛠 Internals

- update dependency @types/node to ^14.17.29 (#857) ([461e3d2](https://github.com/Oriflame/lumos/commit/461e3d22675730acb781c4768068a968eb87cb6d)), closes  _#857_

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.2 - 2021-10-23

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.1 - 2021-10-21

**Note:** Version bump only for package @oriflame/config-danger





### 4.1.0 - 2021-10-21

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.53 - 2021-10-21

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.52 - 2021-10-20

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.51 - 2021-10-19

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.50 - 2021-10-19

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.49 - 2021-10-18

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.48 - 2021-10-18

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.47 - 2021-10-15

#### 🛠 Internals

- update dependency @types/node to ^14.17.27 (#836) ([dfc2136](https://github.com/Oriflame/lumos/commit/dfc21365eebdca4a8b67c1d48d6a678d18743c2a)), closes  _#836_

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.46 - 2021-10-14

#### 📦 Dependencies

- update dependency danger to ^10.7.0 (#835) ([6d51a5d](https://github.com/Oriflame/lumos/commit/6d51a5d920265b64de0e4d6762a7b791acaa61f9)), closes  _#835_

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.45 - 2021-10-12

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.44 - 2021-10-10

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.43 - 2021-10-10

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.42 - 2021-10-08

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.41 - 2021-10-08

#### 🛠 Internals

- update dependency @types/node to ^14.17.21 (#820) ([c2c17f3](https://github.com/Oriflame/lumos/commit/c2c17f3db058cc79c51ab315e784d4a01c53a713)), closes  _#820_

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.40 - 2021-10-07

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.39 - 2021-10-05

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.38 - 2021-10-04

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.37 - 2021-10-01

#### 🛠 Internals

- update dependency @types/node to ^14.17.20 (#809) ([35636f8](https://github.com/Oriflame/lumos/commit/35636f8c5fcae0c90b4c6984ebf04cf051e233dc)), closes  _#809_

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.36 - 2021-10-01

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.35 - 2021-09-28

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.34 - 2021-09-27

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.33 - 2021-09-27

#### 🛠 Internals

- update dependency @types/node to ^14.17.19 (#798) ([9a66887](https://github.com/Oriflame/lumos/commit/9a6688764643d8a5b1d447660f3bcb1e05320054)), closes  _#798_

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.32 - 2021-09-25

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.31 - 2021-09-25

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.30 - 2021-09-25

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.29 - 2021-09-24

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.28 - 2021-09-22

#### 🛠 Internals

- update dependency @types/node to ^14.17.18 (#792) ([2d9254e](https://github.com/Oriflame/lumos/commit/2d9254e77ca9d53411195321410ad260236df282)), closes  _#792_

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.27 - 2021-09-22

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.26 - 2021-09-20

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.25 - 2021-09-19

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.24 - 2021-09-17

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.23 - 2021-09-17

#### 🛠 Internals

- update dependency @types/node to ^14.17.17 (#779) ([2e683d5](https://github.com/Oriflame/lumos/commit/2e683d54becd856991d4d5624094560045df5890)), closes  _#779_

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.22 - 2021-09-17

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.21 - 2021-09-17

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.18 - 2021-09-15

#### 🛠 Internals

- update dependency @types/node to ^14.17.16 (#775) ([ded6e54](https://github.com/Oriflame/lumos/commit/ded6e544544b207b1d0956b1b2d0dff8587183b9)), closes  _#775_

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.13 - 2021-09-13

#### 📦 Dependencies

- update dependency @oriflame/conventional-changelog to ^1.1.5 (#769) ([3701634](https://github.com/Oriflame/lumos/commit/3701634b27b3aa315ed1100bd17c1f8e5486f93c)), closes  _#769_

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.7 - 2021-09-07

#### 🛠 Internals

- update dependency @types/node to ^14.17.15 (#759) ([a91e743](https://github.com/Oriflame/lumos/commit/a91e7430c77b5279cec3f8f85cae6ac4c0231945)), closes  _#759_

**Note:** Version bump only for package @oriflame/config-danger





### 4.0.2 - 2021-09-03

#### 🛠 Internals

- update dependency @types/node to ^14.17.14 (#750) ([6ab4111](https://github.com/Oriflame/lumos/commit/6ab411193f573bd4a9e2f456b26cccb712997056)), closes  _#750_

**Note:** Version bump only for package @oriflame/config-danger





# 4.0.0 - 2021-08-31

#### 💥 Breaking

- Change `next` setting to `future` and introduce new `nextjs` setting. (#727) ([9c25bb0](https://github.com/Oriflame/lumos/commit/9c25bb00eda5073cb0d315c20df97ebfd2e03d09)), closes  _#727_


#### 🛠 Internals

- Release [ci skip]. ([540ff0d](https://github.com/Oriflame/lumos/commit/540ff0db13ba07b321255552253a68c620363b46))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.48 - 2021-08-26

#### 🛠 Internals

- Release [ci skip]. ([ebc5ed0](https://github.com/Oriflame/lumos/commit/ebc5ed0556f09b29617bad6ff8e3e82cf4cae07f))
- update dependency @types/node to ^14.17.12 (#739) ([6e71bdd](https://github.com/Oriflame/lumos/commit/6e71bdd5255ee4bdab254c07ceab87328873c282)), closes  _#739_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.47 - 2021-08-21

#### 🛠 Internals

- Release [ci skip]. ([2d70263](https://github.com/Oriflame/lumos/commit/2d7026394eef1f387bfc327d896b6e8191eb0062))
- update dependency @types/node to ^14.17.11 (#733) ([eb4d5e3](https://github.com/Oriflame/lumos/commit/eb4d5e3b35b87ee9e0c9bd2406230e56113be262)), closes  _#733_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.46 - 2021-08-19

#### 🛠 Internals

- Release [ci skip]. ([27b9147](https://github.com/Oriflame/lumos/commit/27b9147a9271367f8e0166849b9a4d6179bc9308))
- update dependency @types/node to ^14.17.10 (#729) ([6890fa3](https://github.com/Oriflame/lumos/commit/6890fa3e23a785db015fe21a015bf7a0721e6c7d)), closes  _#729_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.45 - 2021-08-05

#### 🛠 Internals

- Release [ci skip]. ([94f4aa4](https://github.com/Oriflame/lumos/commit/94f4aa48fdb2a22b87c9c95eec5689f2557d8446))
- update dependency @types/node to ^14.17.9 (#718) ([27c02b3](https://github.com/Oriflame/lumos/commit/27c02b33e188983e46f67a39295e127be424df17)), closes  _#718_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.44 - 2021-08-02

#### 🛠 Internals

- Release [ci skip]. ([ca9a3eb](https://github.com/Oriflame/lumos/commit/ca9a3eb5fbf0ec238de1fb4ae217c77f6bf3b945))
- update dependency @types/node to ^14.17.7 (#714) ([8005edd](https://github.com/Oriflame/lumos/commit/8005edd9782c42d569e0f647f2834d33a05cb27b)), closes  _#714_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.43 - 2021-07-25

#### 🛠 Internals

- Release [ci skip]. ([b7b4d5e](https://github.com/Oriflame/lumos/commit/b7b4d5e1c3de4cd9e2d49e47f4112d4cbe6bbd5b))
- update dependency @types/node to ^14.17.6 (#707) ([8bc045f](https://github.com/Oriflame/lumos/commit/8bc045f7199ba3374fd9fdfbfecd31f0b9a89fda)), closes  _#707_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.42 - 2021-07-09

#### 🛠 Internals

- Release [ci skip]. ([5279c8e](https://github.com/Oriflame/lumos/commit/5279c8ee36c2fb39af5302970ff3adb960221919))
- update dependency @types/node to ^14.17.5 (#676) ([b84e7d8](https://github.com/Oriflame/lumos/commit/b84e7d85f6a701b3656e383a44f3bdfae37cae7c)), closes  _#676_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.41 - 2021-07-04

#### 📦 Dependencies

- update dependency @oriflame/conventional-changelog to ^1.1.4 (#669) ([1b1ef6b](https://github.com/Oriflame/lumos/commit/1b1ef6b6273f6cbe93a99363bcba79112f2ffd8b)), closes  _#669_


#### 🛠 Internals

- Release [ci skip]. ([5bad573](https://github.com/Oriflame/lumos/commit/5bad573c751b8e6e3fcf5899b3cb6cf13dad22e7))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.40 - 2021-06-30

#### 📦 Dependencies

- update dependency danger to ^10.6.6 (#660) ([79191b1](https://github.com/Oriflame/lumos/commit/79191b11188ead52a6cf3e65c568d2debb9e463b)), closes  _#660_


#### 🛠 Internals

- Release [ci skip]. ([36d169d](https://github.com/Oriflame/lumos/commit/36d169dec797012224712ec4012a51bbbf4b4ea8))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.39 - 2021-06-23

#### 🛠 Internals

- Release [ci skip]. ([d5967e5](https://github.com/Oriflame/lumos/commit/d5967e533c9cbe0389a6aad2c50910b3e14ba28e))
- update dependency @types/node to ^14.17.4 (#650) ([7741b63](https://github.com/Oriflame/lumos/commit/7741b63899fc31d10ad07b9552ddadcfb0551738)), closes  _#650_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.38 - 2021-06-08

#### 🛠 Internals

- Release [ci skip]. ([dbc4de4](https://github.com/Oriflame/lumos/commit/dbc4de4527fb437d99ca0c357b539a4d5c969c89))
- update dependency @types/node to ^14.17.3 (#624) ([debf38f](https://github.com/Oriflame/lumos/commit/debf38fe222051caea6e36283e1d3107187c1603)), closes  _#624_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.37 - 2021-06-03

#### 🛠 Internals

- Release [ci skip]. ([798ccfb](https://github.com/Oriflame/lumos/commit/798ccfb726c5a1ef722b42d226969d10fbcd357b))
- update dependency @types/node to ^14.17.2 (#610) ([96c747d](https://github.com/Oriflame/lumos/commit/96c747db78a10353680c0b03695639150bff7f02)), closes  _#610_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.36 - 2021-05-25

#### 🛠 Internals

- Release [ci skip]. ([9c5a395](https://github.com/Oriflame/lumos/commit/9c5a3955e59aad0f644f32971fb22d8074170ff1))
- update dependency @types/node to ^14.17.1 (#596) ([10b8ca5](https://github.com/Oriflame/lumos/commit/10b8ca52d5f0b34b3871e4c2e1378d267381b8ba)), closes  _#596_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.35 - 2021-05-18

#### 🛠 Internals

- Release [ci skip]. ([fb4021e](https://github.com/Oriflame/lumos/commit/fb4021ebaa28b4684743220db2d42f06fd8f1ad4))
- update dependency @types/node to ^14.17.0 (#584) ([ead288e](https://github.com/Oriflame/lumos/commit/ead288e6faa8701ffe5cca198e41d0ff8c16530b)), closes  _#584_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.34 - 2021-05-13

#### 📦 Dependencies

- update oriflame dependencies (#576) ([92a414c](https://github.com/Oriflame/lumos/commit/92a414cd543395d8ab7784665cf79c54e5ac602c)), closes  _#576_


#### 🛠 Internals

- Release [ci skip]. ([9ee41a7](https://github.com/Oriflame/lumos/commit/9ee41a7773f08a7b1cb03966111e5fee8f8316f4))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.33 - 2021-05-13

#### 🛠 Internals

- Release [ci skip]. ([f4bb9df](https://github.com/Oriflame/lumos/commit/f4bb9df17457d025c1e09683dcdd7730c4b97467))
- update dependency @types/node to ^14.14.45 (#574) ([2df4772](https://github.com/Oriflame/lumos/commit/2df4772ee89e3629374e2fcfc80d601fb90dac57)), closes  _#574_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.32 - 2021-05-06

#### 🛠 Internals

- release [ci skip]. ([86f4c69](https://github.com/Oriflame/lumos/commit/86f4c69ce4d8c10eb99df3ed5630698269ab5a20))
- update dependency @types/node to ^14.14.44 (#550) ([376afd7](https://github.com/Oriflame/lumos/commit/376afd7c6ec7f85fb108d72c34acea8cc686bfef)), closes  _#550_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.31 - 2021-04-29

#### 🐞 Fixes

- Lint issues. ([76d7101](https://github.com/Oriflame/lumos/commit/76d71017c925372525f3138b51f7cad189c895dc))
- Update config and fix issues. ([dad70c4](https://github.com/Oriflame/lumos/commit/dad70c4d4554a15ffa4ac56535af0148d03c87a1))

#### 🛠 Internals

- release [ci skip]. ([a5c80fc](https://github.com/Oriflame/lumos/commit/a5c80fc7d914940a8190b0511af9f99115f09501))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.30 - 2021-04-28

#### 🛠 Internals

- release [ci skip]. ([dbf1cf1](https://github.com/Oriflame/lumos/commit/dbf1cf16370de90449f77b3b5d327efb3f2381b9))
- update dependency @types/node to ^14.14.43 ([58725a4](https://github.com/Oriflame/lumos/commit/58725a4408129192fab227ca489740264b87f746))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.29 - 2021-04-23

#### 📦 Dependencies

- update oriflame dependencies ([448ed48](https://github.com/Oriflame/lumos/commit/448ed4855399fd29b0dcf57b50a742dd89467220))

#### 🛠 Internals

- release [ci skip]. ([77f7145](https://github.com/Oriflame/lumos/commit/77f71455182786da0441522093969419a180d5bb))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.28 - 2021-04-21

#### 🐞 Fixes

- Fix ESLint issues. (#526) ([e7783e8](https://github.com/Oriflame/lumos/commit/e7783e8b76c24b45a9162f824c45397006aed79e)), closes  _#526_


#### 🛠 Internals

- release [ci skip]. ([42826b9](https://github.com/Oriflame/lumos/commit/42826b98aeb534a6c1eb7949e284c6425d89b22c))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.27 - 2021-04-17

#### 🛠 Internals

- release [ci skip]. ([b3e280d](https://github.com/Oriflame/lumos/commit/b3e280d7e61f6093339daa6d4472b68bf1b83bbb))
- update dependency @types/node to ^14.14.41 (#517) ([7ab3ec1](https://github.com/Oriflame/lumos/commit/7ab3ec104172b30466047a44494c8f1229fada7f)), closes  _#517_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.26 - 2021-03-28

#### 🛠 Internals

- bump @types/node from 14.14.36 to 14.14.37 (#456) ([0af2de7](https://github.com/Oriflame/lumos/commit/0af2de7f0f2cb90d2f7ac83eb7283c8fdbb17dac)), closes  _#456_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.25 - 2021-03-26

#### 🛠 Internals

- bump @types/node from 14.14.35 to 14.14.36 (#448) ([17da954](https://github.com/Oriflame/lumos/commit/17da9541787b78b41e5561a0ddb4195be9f669e8)), closes  _#448_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.24 - 2021-03-25

#### 📦 Dependencies

- bump danger from 10.6.3 to 10.6.4 (#443) ([76fdabb](https://github.com/Oriflame/lumos/commit/76fdabbac8709026b4be7cde55af11c7eb4b8b2f)), closes  _#443_

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.23 - 2021-03-25

#### 📦 Dependencies

- bump @oriflame/conventional-changelog from 1.0.9 to 1.1.0 (#445) ([808b6fe](https://github.com/Oriflame/lumos/commit/808b6feb6c0b9f307ddc4fae86d18d0f083f50b0)), closes  _#445_


#### 🛠 Internals

- release [ci skip]. ([5f2267f](https://github.com/Oriflame/lumos/commit/5f2267fb5e16a9303d8151c1c331ae5805ca3f85))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.22 - 2021-03-16

#### 🛠 Internals

- bump @types/node from 14.14.34 to 14.14.35 (#418) ([385bc5e](https://github.com/Oriflame/lumos/commit/385bc5e)), closes [#418](https://github.com/Oriflame/lumos/issues/418)

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.21 - 2021-03-15

#### 🛠 Internals

- bump @types/node from 14.14.33 to 14.14.34 (#412) ([f044091](https://github.com/Oriflame/lumos/commit/f044091)), closes [#412](https://github.com/Oriflame/lumos/issues/412)

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.20 - 2021-03-15

#### 🛠 Internals

- bump @types/node from 14.14.32 to 14.14.33 (#402) ([e78066b](https://github.com/Oriflame/lumos/commit/e78066b)), closes [#402](https://github.com/Oriflame/lumos/issues/402)
- release [ci skip]. ([40f2607](https://github.com/Oriflame/lumos/commit/40f2607))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.19 - 2021-03-08

#### 🛠 Internals

- bump @types/node from 14.14.31 to 14.14.32 (#387) ([5ad5922](https://github.com/Oriflame/lumos/commit/5ad5922)), closes [#387](https://github.com/Oriflame/lumos/issues/387)
- release [ci skip]. ([95e5b98](https://github.com/Oriflame/lumos/commit/95e5b98))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.18 - 2021-02-24

#### 📦 Dependencies

- bump danger from 10.6.2 to 10.6.3 (#351) ([9a88e31](https://github.com/Oriflame/lumos/commit/9a88e31)), closes [#351](https://github.com/Oriflame/lumos/issues/351)

#### 🛠 Internals

- release [ci skip]. ([a7c9b84](https://github.com/Oriflame/lumos/commit/a7c9b84))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.17 - 2021-02-19

#### 🛠 Internals

- bump @types/node from 14.14.28 to 14.14.31 (#330) ([2700431](https://github.com/Oriflame/lumos/commit/2700431)), closes [#330](https://github.com/Oriflame/lumos/issues/330)
- release [ci skip]. ([a3e4417](https://github.com/Oriflame/lumos/commit/a3e4417))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.16 - 2021-02-16

#### 🛠 Internals

- bump @types/node from 14.14.27 to 14.14.28 (#310) ([ed85738](https://github.com/Oriflame/lumos/commit/ed85738)), closes [#310](https://github.com/Oriflame/lumos/issues/310)
- release [ci skip]. ([5785c2a](https://github.com/Oriflame/lumos/commit/5785c2a))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.15 - 2021-02-12

#### 🛠 Internals

- bump @types/node from 14.14.26 to 14.14.27 (#306) ([09b310b](https://github.com/Oriflame/lumos/commit/09b310b)), closes [#306](https://github.com/Oriflame/lumos/issues/306)

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.14 - 2021-02-12

#### 🛠 Internals

- bump @types/node from 14.14.25 to 14.14.26 (#299) ([6790b16](https://github.com/Oriflame/lumos/commit/6790b16)), closes [#299](https://github.com/Oriflame/lumos/issues/299)
- release [ci skip]. ([a92c592](https://github.com/Oriflame/lumos/commit/a92c592))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.13 - 2021-02-04

#### 🛠 Internals

- bump @types/node from 14.14.22 to 14.14.25 (#276) ([6ab2909](https://github.com/Oriflame/lumos/commit/6ab2909)), closes [#276](https://github.com/Oriflame/lumos/issues/276)
- release [ci skip]. ([edf1eb4](https://github.com/Oriflame/lumos/commit/edf1eb4))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.12 - 2021-02-04

#### 📦 Dependencies

- bump danger from 10.6.1 to 10.6.2 (#277) ([16600fb](https://github.com/Oriflame/lumos/commit/16600fb)), closes [#277](https://github.com/Oriflame/lumos/issues/277)

#### 🛠 Internals

- release [ci skip]. ([631da14](https://github.com/Oriflame/lumos/commit/631da14))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.11 - 2021-01-28

#### 📦 Dependencies

- bump danger from 10.6.0 to 10.6.1 (#255) ([c2bfd6e](https://github.com/Oriflame/lumos/commit/c2bfd6e)), closes [#255](https://github.com/Oriflame/lumos/issues/255)

#### 🛠 Internals

- release [ci skip]. ([8e5a0f4](https://github.com/Oriflame/lumos/commit/8e5a0f4))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.10 - 2021-01-24

#### 🛠 Internals

- bump @types/node from 14.14.20 to 14.14.22 (#244) ([1e51aa8](https://github.com/Oriflame/lumos/commit/1e51aa8)), closes [#244](https://github.com/Oriflame/lumos/issues/244)
- release [ci skip]. ([d6c6766](https://github.com/Oriflame/lumos/commit/d6c6766))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.9 - 2021-01-08

#### 📦 Dependencies

- bump @oriflame/conventional-changelog from 1.0.8 to 1.0.9 (#215) ([6839e7f](https://github.com/Oriflame/lumos/commit/6839e7f)), closes [#215](https://github.com/Oriflame/lumos/issues/215)

#### 🛠 Internals

- bump @types/node from 14.14.19 to 14.14.20 (#208) ([f98e40d](https://github.com/Oriflame/lumos/commit/f98e40d)), closes [#208](https://github.com/Oriflame/lumos/issues/208)
- release [ci skip]. ([24d3df7](https://github.com/Oriflame/lumos/commit/24d3df7))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.8 - 2021-01-05

#### 📦 Dependencies

- bump danger from 10.5.4 to 10.6.0 (#209) ([13265cb](https://github.com/Oriflame/lumos/commit/13265cb)), closes [#209](https://github.com/Oriflame/lumos/issues/209)

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.7 - 2021-01-04

#### 🛠 Internals

- bump @types/node from 14.14.16 to 14.14.19 (#201) ([70caeb7](https://github.com/Oriflame/lumos/commit/70caeb7)), closes [#201](https://github.com/Oriflame/lumos/issues/201)
- release [ci skip]. ([1cda56c](https://github.com/Oriflame/lumos/commit/1cda56c))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.6 - 2021-01-03

#### 📦 Dependencies

- bump @oriflame/conventional-changelog from 1.0.7 to 1.0.8 (#202) ([6968a01](https://github.com/Oriflame/lumos/commit/6968a01)), closes [#202](https://github.com/Oriflame/lumos/issues/202)

#### 🛠 Internals

- release [ci skip]. ([d1dd4ec](https://github.com/Oriflame/lumos/commit/d1dd4ec))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.5 - 2020-12-24

#### 📦 Dependencies

- bump @oriflame/conventional-changelog from 1.0.6 to 1.0.7 (#186) ([0b7d51e](https://github.com/Oriflame/lumos/commit/0b7d51e)), closes [#186](https://github.com/Oriflame/lumos/issues/186)

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.4 - 2020-12-24

#### 🛠 Internals

- bump @types/node from 14.14.14 to 14.14.16 (#183) ([fcc23bc](https://github.com/Oriflame/lumos/commit/fcc23bc)), closes [#183](https://github.com/Oriflame/lumos/issues/183)
- release [ci skip]. ([23ec8ff](https://github.com/Oriflame/lumos/commit/23ec8ff))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.3 - 2020-12-18

#### 🛠 Internals

- bump @types/node from 14.14.13 to 14.14.14 (#169) ([174e0a3](https://github.com/Oriflame/lumos/commit/174e0a3)), closes [#169](https://github.com/Oriflame/lumos/issues/169)
- release [ci skip]. ([c1e5b0c](https://github.com/Oriflame/lumos/commit/c1e5b0c))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.2 - 2020-12-14

#### 🛠 Internals

- bump @types/node from 14.14.12 to 14.14.13 (#161) ([b345f84](https://github.com/Oriflame/lumos/commit/b345f84)), closes [#161](https://github.com/Oriflame/lumos/issues/161)
- release [ci skip]. ([f8b9059](https://github.com/Oriflame/lumos/commit/f8b9059))

**Note:** Version bump only for package @oriflame/config-danger





### 1.1.1 - 2020-12-10

#### 🛠 Internals

- bump @types/node from 14.14.10 to 14.14.12 (#156) ([45ee4c8](https://github.com/Oriflame/lumos/commit/45ee4c8)), closes [#156](https://github.com/Oriflame/lumos/issues/156)
- release [ci skip]. ([dd3bdd1](https://github.com/Oriflame/lumos/commit/dd3bdd1))

**Note:** Version bump only for package @oriflame/config-danger





## 1.1.0 - 2020-12-03

#### 🚀 Updates

- Change arrow parent to always. ([7089e17](https://github.com/Oriflame/lumos/commit/7089e17))

#### 🛠 Internals

- release [ci skip]. ([3d4df30](https://github.com/Oriflame/lumos/commit/3d4df30))

**Note:** Version bump only for package @oriflame/config-danger





### 1.0.11 - 2020-11-28

#### 📦 Dependencies

- bump danger from 10.5.3 to 10.5.4 (#121) ([e285d1e](https://github.com/Oriflame/lumos/commit/e285d1e)), closes [#121](https://github.com/Oriflame/lumos/issues/121)

#### 🛠 Internals

- release [ci skip]. ([c6d2f4f](https://github.com/Oriflame/lumos/commit/c6d2f4f))

**Note:** Version bump only for package @oriflame/config-danger





### 1.0.10 - 2020-11-25

#### 🛠 Internals

- bump @types/node from 14.14.9 to 14.14.10 (#116) ([cab2217](https://github.com/Oriflame/lumos/commit/cab2217)), closes [#116](https://github.com/Oriflame/lumos/issues/116)
- release [ci skip]. ([700fa85](https://github.com/Oriflame/lumos/commit/700fa85))

**Note:** Version bump only for package @oriflame/config-danger





### 1.0.9 - 2020-11-20

#### 📦 Dependencies

- bump danger from 10.5.2 to 10.5.3 (#93) ([85884a8](https://github.com/Oriflame/lumos/commit/85884a8)), closes [#93](https://github.com/Oriflame/lumos/issues/93)

#### 🛠 Internals

- bump @types/node from 14.14.8 to 14.14.9 (#94) ([23f9fbc](https://github.com/Oriflame/lumos/commit/23f9fbc)), closes [#94](https://github.com/Oriflame/lumos/issues/94)
- release [ci skip]. ([b0f0a24](https://github.com/Oriflame/lumos/commit/b0f0a24))

**Note:** Version bump only for package @oriflame/config-danger





### 1.0.8 - 2020-11-19

#### 📦 Dependencies

- bump danger from 10.5.1 to 10.5.2 (#88) ([790bb47](https://github.com/Oriflame/lumos/commit/790bb47)), closes [#88](https://github.com/Oriflame/lumos/issues/88)

#### 🛠 Internals

- release [ci skip]. ([a4a6135](https://github.com/Oriflame/lumos/commit/a4a6135))

**Note:** Version bump only for package @oriflame/config-danger





### 1.0.7 - 2020-11-18

#### 🛠 Internals

- bump @types/node from 14.14.7 to 14.14.8 (#84) ([aa8d78f](https://github.com/Oriflame/lumos/commit/aa8d78f)), closes [#84](https://github.com/Oriflame/lumos/issues/84)
- release [ci skip]. ([b3d3033](https://github.com/Oriflame/lumos/commit/b3d3033))

**Note:** Version bump only for package @oriflame/config-danger





### 1.0.6 - 2020-11-11

#### 🛠 Internals

- bump @types/node from 14.14.6 to 14.14.7 (#69) ([c067fb7](https://github.com/Oriflame/lumos/commit/c067fb7)), closes [#69](https://github.com/Oriflame/lumos/issues/69)
- release [ci skip]. ([025b53a](https://github.com/Oriflame/lumos/commit/025b53a))

**Note:** Version bump only for package @oriflame/config-danger





### 1.0.5 - 2020-11-06

#### 📦 Dependencies

- bump @oriflame/conventional-changelog from 1.0.4 to 1.0.6 (#59) ([6627d2e](https://github.com/Oriflame/lumos/commit/6627d2e)), closes [#59](https://github.com/Oriflame/lumos/issues/59)

#### 🛠 Internals

- release [ci skip]. ([4c58e87](https://github.com/Oriflame/lumos/commit/4c58e87))

**Note:** Version bump only for package @oriflame/config-danger





### 1.0.4 - 2020-11-03

#### 📦 Dependencies

- bump danger from 10.5.0 to 10.5.1 (#46) ([3922396](https://github.com/Oriflame/lumos/commit/3922396)), closes [#46](https://github.com/Oriflame/lumos/issues/46)

#### 🛠 Internals

- release [ci skip]. ([d57e13c](https://github.com/Oriflame/lumos/commit/d57e13c))

**Note:** Version bump only for package @oriflame/config-danger





### 1.0.3 - 2020-11-01

#### 🛠 Internals

- bump @types/node from 14.11.10 to 14.14.6 (#35) ([4ed54fc](https://github.com/Oriflame/lumos/commit/4ed54fc)), closes [#35](https://github.com/Oriflame/lumos/issues/35)
- release [ci skip]. ([ab741ee](https://github.com/Oriflame/lumos/commit/ab741ee))

**Note:** Version bump only for package @oriflame/config-danger





### 1.0.2 - 2020-10-17

#### 📦 Dependencies

- Update to latest. ([91729b1](https://github.com/Oriflame/lumos/commit/91729b1))

**Note:** Version bump only for package @oriflame/config-danger





### 1.0.1 - 2020-10-16

#### 🛠 Internals

- release [ci skip]. ([affd151](https://github.com/Oriflame/lumos/commit/affd151))
- Remove rajzik deps. (#11) ([346d8da](https://github.com/Oriflame/lumos/commit/346d8da)), closes [#11](https://github.com/Oriflame/lumos/issues/11)

**Note:** Version bump only for package @oriflame/config-danger





# 0.1.0 - 2020-10-16

#### 💥 Breaking

- Rewrite to oriflame package. (#2) ([42efea6](https://github.com/Oriflame/lumos/commit/42efea6)), closes [#2](https://github.com/Oriflame/lumos/issues/2)

#### 🚀 Updates

- added dotfiles. ([53c3e81](https://github.com/Oriflame/lumos/commit/53c3e81))
- Migrate to LTS node. ([6625184](https://github.com/Oriflame/lumos/commit/6625184))
- Migrate to new packages. (#87) ([4c15f2c](https://github.com/Oriflame/lumos/commit/4c15f2c)), closes [#87](https://github.com/Oriflame/lumos/issues/87)
- Update packages. ([ba09f76](https://github.com/Oriflame/lumos/commit/ba09f76))

#### 🐞 Fixes

- another one. ([724320d](https://github.com/Oriflame/lumos/commit/724320d))
- danger pr message. ([5785160](https://github.com/Oriflame/lumos/commit/5785160))
- eslint error ([b1a7894](https://github.com/Oriflame/lumos/commit/b1a7894))
- naming ([53a0779](https://github.com/Oriflame/lumos/commit/53a0779))
- only for release. ([5ef2c58](https://github.com/Oriflame/lumos/commit/5ef2c58))
- redeploy. ([406909d](https://github.com/Oriflame/lumos/commit/406909d))
- updated danger pr. ([f1b0826](https://github.com/Oriflame/lumos/commit/f1b0826))

#### 📦 Dependencies

- Audit 09/05 (#2) ([a71a10c](https://github.com/Oriflame/lumos/commit/a71a10c)), closes [#2](https://github.com/Oriflame/lumos/issues/2)
- bump @rajzik/conventional-changelog-beemo from 2.0.1 to 2.0.2 ([fda1464](https://github.com/Oriflame/lumos/commit/fda1464))
- bump @rajzik/conventional-changelog-beemo from 2.0.2 to 2.0.4 (#480) ([1ba1499](https://github.com/Oriflame/lumos/commit/1ba1499)), closes [#480](https://github.com/Oriflame/lumos/issues/480)
- bump @rajzik/conventional-changelog-beemo from 2.0.4 to 2.0.5 (#484) ([27504ec](https://github.com/Oriflame/lumos/commit/27504ec)), closes [#484](https://github.com/Oriflame/lumos/issues/484)
- bump @rajzik/conventional-changelog-beemo from 2.0.5 to 2.0.6 (#500) ([2004686](https://github.com/Oriflame/lumos/commit/2004686)), closes [#500](https://github.com/Oriflame/lumos/issues/500)
- bump @rajzik/conventional-changelog-beemo from 2.0.6 to 2.1.0 (#604) ([50cf7a1](https://github.com/Oriflame/lumos/commit/50cf7a1)), closes [#604](https://github.com/Oriflame/lumos/issues/604)
- bump @rajzik/conventional-changelog-beemo from 2.1.0 to 2.1.1 (#679) ([b39094d](https://github.com/Oriflame/lumos/commit/b39094d)), closes [#679](https://github.com/Oriflame/lumos/issues/679)
- bump conventional-changelog-beemo from 1.5.1 to 1.5.3 ([765ba19](https://github.com/Oriflame/lumos/commit/765ba19))
- bump conventional-changelog-beemo from 1.5.3 to 1.6.0 ([a699ed1](https://github.com/Oriflame/lumos/commit/a699ed1))
- bump danger from 10.0.0 to 10.1.1 ([a117a15](https://github.com/Oriflame/lumos/commit/a117a15))
- bump danger from 10.1.1 to 10.2.0 ([2369a51](https://github.com/Oriflame/lumos/commit/2369a51))
- bump danger from 10.2.0 to 10.2.1 (#440) ([434fd81](https://github.com/Oriflame/lumos/commit/434fd81)), closes [#440](https://github.com/Oriflame/lumos/issues/440)
- bump danger from 10.2.1 to 10.3.0 (#517) ([e65246f](https://github.com/Oriflame/lumos/commit/e65246f)), closes [#517](https://github.com/Oriflame/lumos/issues/517)
- bump danger from 10.3.0 to 10.4.0 (#589) ([c137a7d](https://github.com/Oriflame/lumos/commit/c137a7d)), closes [#589](https://github.com/Oriflame/lumos/issues/589)
- bump danger from 10.4.0 to 10.4.1 (#699) ([62c555a](https://github.com/Oriflame/lumos/commit/62c555a)), closes [#699](https://github.com/Oriflame/lumos/issues/699)
- bump danger from 10.4.1 to 10.5.0 (#708) ([6f14c86](https://github.com/Oriflame/lumos/commit/6f14c86)), closes [#708](https://github.com/Oriflame/lumos/issues/708)
- **[Beemo]** Update to latest. ([bf6798c](https://github.com/Oriflame/lumos/commit/bf6798c))
- bump danger from 9.2.10 to 10.0.0 ([8112123](https://github.com/Oriflame/lumos/commit/8112123))
- bump danger from 9.2.4 to 9.2.8 ([b59df4b](https://github.com/Oriflame/lumos/commit/b59df4b))
- bump danger from 9.2.9 to 9.2.10 ([f4e1a49](https://github.com/Oriflame/lumos/commit/f4e1a49))
- Update minor and patch versions. ([968389c](https://github.com/Oriflame/lumos/commit/968389c))
- Update root and dev versions. ([5d35b0e](https://github.com/Oriflame/lumos/commit/5d35b0e))

#### 📋 Misc

- Change required node version to 10. ([959b81d](https://github.com/Oriflame/lumos/commit/959b81d))

#### 🛠 Internals

- bump @types/node from 12.12.11 to 12.12.14 ([62d65ef](https://github.com/Oriflame/lumos/commit/62d65ef))
- bump @types/node from 12.12.14 to 12.12.15 ([036ad0a](https://github.com/Oriflame/lumos/commit/036ad0a))
- bump @types/node from 12.12.15 to 12.12.16 ([e8d6c25](https://github.com/Oriflame/lumos/commit/e8d6c25))
- bump @types/node from 12.12.16 to 12.12.17 ([1f56bca](https://github.com/Oriflame/lumos/commit/1f56bca))
- bump @types/node from 12.12.17 to 12.12.20 ([1e10d4f](https://github.com/Oriflame/lumos/commit/1e10d4f))
- bump @types/node from 12.12.20 to 12.12.21 ([7f49bd0](https://github.com/Oriflame/lumos/commit/7f49bd0))
- bump @types/node from 12.12.21 to 13.1.0 ([6846466](https://github.com/Oriflame/lumos/commit/6846466))
- bump @types/node from 12.12.3 to 12.12.6 ([42e376b](https://github.com/Oriflame/lumos/commit/42e376b))
- bump @types/node from 12.12.6 to 12.12.7 ([746b75b](https://github.com/Oriflame/lumos/commit/746b75b))
- bump @types/node from 12.12.7 to 12.12.8 ([3ae36c2](https://github.com/Oriflame/lumos/commit/3ae36c2))
- bump @types/node from 12.12.8 to 12.12.9 ([054b248](https://github.com/Oriflame/lumos/commit/054b248))
- bump @types/node from 12.12.9 to 12.12.11 ([b1cb3ce](https://github.com/Oriflame/lumos/commit/b1cb3ce))
- bump @types/node from 13.1.0 to 13.1.1 ([a5933b4](https://github.com/Oriflame/lumos/commit/a5933b4))
- bump @types/node from 13.1.1 to 13.1.2 ([9e0e542](https://github.com/Oriflame/lumos/commit/9e0e542))
- bump @types/node from 13.1.2 to 13.1.4 ([02931d6](https://github.com/Oriflame/lumos/commit/02931d6))
- bump @types/node from 13.1.4 to 13.1.5 ([71394b8](https://github.com/Oriflame/lumos/commit/71394b8))
- bump @types/node from 13.1.5 to 13.1.6 ([1c98970](https://github.com/Oriflame/lumos/commit/1c98970))
- bump @types/node from 13.1.6 to 13.1.8 ([c8d3777](https://github.com/Oriflame/lumos/commit/c8d3777))
- bump @types/node from 13.1.8 to 13.5.0 ([38b3fac](https://github.com/Oriflame/lumos/commit/38b3fac))
- bump @types/node from 13.11.0 to 13.11.1 ([b13d8ff](https://github.com/Oriflame/lumos/commit/b13d8ff))
- bump @types/node from 13.11.1 to 13.13.0 ([08f7c63](https://github.com/Oriflame/lumos/commit/08f7c63))
- bump @types/node from 13.13.0 to 13.13.1 ([0c033ae](https://github.com/Oriflame/lumos/commit/0c033ae))
- bump @types/node from 13.13.1 to 13.13.2 ([7c0ef77](https://github.com/Oriflame/lumos/commit/7c0ef77))
- bump @types/node from 13.13.2 to 13.13.4 ([12b0d17](https://github.com/Oriflame/lumos/commit/12b0d17))
- bump @types/node from 13.13.4 to 13.13.5 ([81892cb](https://github.com/Oriflame/lumos/commit/81892cb))
- bump @types/node from 13.13.5 to 14.0.1 ([ba326c3](https://github.com/Oriflame/lumos/commit/ba326c3))
- bump @types/node from 13.5.0 to 13.5.1 ([0483078](https://github.com/Oriflame/lumos/commit/0483078))
- bump @types/node from 13.5.1 to 13.5.3 ([bee67cb](https://github.com/Oriflame/lumos/commit/bee67cb))
- bump @types/node from 13.5.3 to 13.7.0 ([b80773f](https://github.com/Oriflame/lumos/commit/b80773f))
- bump @types/node from 13.7.0 to 13.7.1 ([28c6a13](https://github.com/Oriflame/lumos/commit/28c6a13))
- bump @types/node from 13.7.1 to 13.7.2 ([f231536](https://github.com/Oriflame/lumos/commit/f231536))
- bump @types/node from 13.7.2 to 13.7.4 ([293675d](https://github.com/Oriflame/lumos/commit/293675d))
- bump @types/node from 13.7.4 to 13.7.7 ([a022f93](https://github.com/Oriflame/lumos/commit/a022f93))
- bump @types/node from 13.7.7 to 13.9.0 ([37f07c2](https://github.com/Oriflame/lumos/commit/37f07c2))
- bump @types/node from 13.9.0 to 13.9.1 ([aef08f8](https://github.com/Oriflame/lumos/commit/aef08f8))
- bump @types/node from 13.9.1 to 13.9.2 ([8b4d945](https://github.com/Oriflame/lumos/commit/8b4d945))
- bump @types/node from 13.9.2 to 13.9.3 ([757ad92](https://github.com/Oriflame/lumos/commit/757ad92))
- bump @types/node from 13.9.3 to 13.9.4 ([e52bc59](https://github.com/Oriflame/lumos/commit/e52bc59))
- bump @types/node from 13.9.4 to 13.9.5 ([89cec57](https://github.com/Oriflame/lumos/commit/89cec57))
- bump @types/node from 13.9.5 to 13.9.8 ([1c38a23](https://github.com/Oriflame/lumos/commit/1c38a23))
- bump @types/node from 13.9.8 to 13.11.0 ([b24f384](https://github.com/Oriflame/lumos/commit/b24f384))
- bump @types/node from 14.0.1 to 14.0.5 ([c5a8d28](https://github.com/Oriflame/lumos/commit/c5a8d28))
- bump @types/node from 14.0.11 to 14.0.12 (#397) ([69e0d4f](https://github.com/Oriflame/lumos/commit/69e0d4f)), closes [#397](https://github.com/Oriflame/lumos/issues/397)
- bump @types/node from 14.0.12 to 14.0.13 (#401) ([963a253](https://github.com/Oriflame/lumos/commit/963a253)), closes [#401](https://github.com/Oriflame/lumos/issues/401)
- bump @types/node from 14.0.13 to 14.0.14 (#438) ([17040bb](https://github.com/Oriflame/lumos/commit/17040bb)), closes [#438](https://github.com/Oriflame/lumos/issues/438)
- bump @types/node from 14.0.14 to 14.0.18 (#472) ([129b6b3](https://github.com/Oriflame/lumos/commit/129b6b3)), closes [#472](https://github.com/Oriflame/lumos/issues/472)
- bump @types/node from 14.0.18 to 14.0.19 (#475) ([f775373](https://github.com/Oriflame/lumos/commit/f775373)), closes [#475](https://github.com/Oriflame/lumos/issues/475)
- bump @types/node from 14.0.19 to 14.0.20 (#482) ([3d48caa](https://github.com/Oriflame/lumos/commit/3d48caa)), closes [#482](https://github.com/Oriflame/lumos/issues/482)
- bump @types/node from 14.0.20 to 14.0.22 (#486) ([2c1ac2c](https://github.com/Oriflame/lumos/commit/2c1ac2c)), closes [#486](https://github.com/Oriflame/lumos/issues/486)
- bump @types/node from 14.0.22 to 14.0.23 (#490) ([dc08f92](https://github.com/Oriflame/lumos/commit/dc08f92)), closes [#490](https://github.com/Oriflame/lumos/issues/490)
- bump @types/node from 14.0.23 to 14.0.24 (#510) ([b57e8d7](https://github.com/Oriflame/lumos/commit/b57e8d7)), closes [#510](https://github.com/Oriflame/lumos/issues/510)
- bump @types/node from 14.0.24 to 14.0.25 (#513) ([0e7ee6c](https://github.com/Oriflame/lumos/commit/0e7ee6c)), closes [#513](https://github.com/Oriflame/lumos/issues/513)
- bump @types/node from 14.0.25 to 14.0.26 (#516) ([1f62564](https://github.com/Oriflame/lumos/commit/1f62564)), closes [#516](https://github.com/Oriflame/lumos/issues/516)
- bump @types/node from 14.0.26 to 14.0.27 (#532) ([0004f9c](https://github.com/Oriflame/lumos/commit/0004f9c)), closes [#532](https://github.com/Oriflame/lumos/issues/532)
- bump @types/node from 14.0.27 to 14.6.0 (#586) ([4604c15](https://github.com/Oriflame/lumos/commit/4604c15)), closes [#586](https://github.com/Oriflame/lumos/issues/586)
- bump @types/node from 14.0.5 to 14.0.6 ([5a71ce3](https://github.com/Oriflame/lumos/commit/5a71ce3))
- bump @types/node from 14.0.6 to 14.0.9 (#383) ([0a22d53](https://github.com/Oriflame/lumos/commit/0a22d53)), closes [#383](https://github.com/Oriflame/lumos/issues/383)
- bump @types/node from 14.0.9 to 14.0.11 (#391) ([b0d4fc2](https://github.com/Oriflame/lumos/commit/b0d4fc2)), closes [#391](https://github.com/Oriflame/lumos/issues/391)
- bump @types/node from 14.10.0 to 14.10.1 (#654) ([8bbb307](https://github.com/Oriflame/lumos/commit/8bbb307)), closes [#654](https://github.com/Oriflame/lumos/issues/654)
- bump @types/node from 14.10.1 to 14.10.2 (#665) ([21cb5b2](https://github.com/Oriflame/lumos/commit/21cb5b2)), closes [#665](https://github.com/Oriflame/lumos/issues/665)
- bump @types/node from 14.10.2 to 14.10.3 (#672) ([a1b7c32](https://github.com/Oriflame/lumos/commit/a1b7c32)), closes [#672](https://github.com/Oriflame/lumos/issues/672)
- bump @types/node from 14.10.3 to 14.11.1 (#676) ([dd9e338](https://github.com/Oriflame/lumos/commit/dd9e338)), closes [#676](https://github.com/Oriflame/lumos/issues/676)
- bump @types/node from 14.11.1 to 14.11.2 (#691) ([fa7dce0](https://github.com/Oriflame/lumos/commit/fa7dce0)), closes [#691](https://github.com/Oriflame/lumos/issues/691)
- bump @types/node from 14.6.0 to 14.6.2 (#608) ([6a64422](https://github.com/Oriflame/lumos/commit/6a64422)), closes [#608](https://github.com/Oriflame/lumos/issues/608)
- bump @types/node from 14.6.2 to 14.6.3 (#628) ([07c0f2b](https://github.com/Oriflame/lumos/commit/07c0f2b)), closes [#628](https://github.com/Oriflame/lumos/issues/628)
- bump @types/node from 14.6.3 to 14.6.4 (#631) ([87b9b77](https://github.com/Oriflame/lumos/commit/87b9b77)), closes [#631](https://github.com/Oriflame/lumos/issues/631)
- bump @types/node from 14.6.4 to 14.10.0 (#651) ([d921f15](https://github.com/Oriflame/lumos/commit/d921f15)), closes [#651](https://github.com/Oriflame/lumos/issues/651)
- cleanup ([4cf38dc](https://github.com/Oriflame/lumos/commit/4cf38dc))
- Eslint fixes. ([abba1b5](https://github.com/Oriflame/lumos/commit/abba1b5))
- Final polish before release. (#5) ([207eaab](https://github.com/Oriflame/lumos/commit/207eaab)), closes [#5](https://github.com/Oriflame/lumos/issues/5)
- fix danger ([9a04236](https://github.com/Oriflame/lumos/commit/9a04236))
- fix danger file. ([aa3c8cd](https://github.com/Oriflame/lumos/commit/aa3c8cd))
- fix. ([a19a83a](https://github.com/Oriflame/lumos/commit/a19a83a))
- pr fix ([171a01e](https://github.com/Oriflame/lumos/commit/171a01e))
- release [ci skip]. ([e2c272a](https://github.com/Oriflame/lumos/commit/e2c272a))
- release [ci skip]. ([aa50b57](https://github.com/Oriflame/lumos/commit/aa50b57))
- release [ci skip]. ([f6addc8](https://github.com/Oriflame/lumos/commit/f6addc8))
- release [ci skip]. ([f704782](https://github.com/Oriflame/lumos/commit/f704782))
- release [ci skip]. ([191cc6f](https://github.com/Oriflame/lumos/commit/191cc6f))
- release [ci skip]. ([cb4ee2b](https://github.com/Oriflame/lumos/commit/cb4ee2b))
- release [ci skip]. ([1a822c5](https://github.com/Oriflame/lumos/commit/1a822c5))
- release [ci skip]. ([5414e4e](https://github.com/Oriflame/lumos/commit/5414e4e))
- release [ci skip]. ([e6c6907](https://github.com/Oriflame/lumos/commit/e6c6907))
- release [ci skip]. ([44a4a65](https://github.com/Oriflame/lumos/commit/44a4a65))
- release [ci skip]. ([53966de](https://github.com/Oriflame/lumos/commit/53966de))
- release [ci skip]. ([978743b](https://github.com/Oriflame/lumos/commit/978743b))
- release [ci skip]. ([a237a6c](https://github.com/Oriflame/lumos/commit/a237a6c))
- release [ci skip]. ([6f661a4](https://github.com/Oriflame/lumos/commit/6f661a4))
- release [ci skip]. ([3516fd2](https://github.com/Oriflame/lumos/commit/3516fd2))
- release [ci skip]. ([71ab17d](https://github.com/Oriflame/lumos/commit/71ab17d))
- release [ci skip]. ([1de0b58](https://github.com/Oriflame/lumos/commit/1de0b58))
- release [ci skip]. ([f011d33](https://github.com/Oriflame/lumos/commit/f011d33))
- release [ci skip]. ([3eff835](https://github.com/Oriflame/lumos/commit/3eff835))
- release [ci skip]. ([abc8e30](https://github.com/Oriflame/lumos/commit/abc8e30))
- release [ci skip]. ([af929e9](https://github.com/Oriflame/lumos/commit/af929e9))
- release [ci skip]. ([32184e0](https://github.com/Oriflame/lumos/commit/32184e0))
- release [ci skip]. ([82b5287](https://github.com/Oriflame/lumos/commit/82b5287))
- release [ci skip]. ([e0a9904](https://github.com/Oriflame/lumos/commit/e0a9904))
- release [ci skip]. ([8d833d2](https://github.com/Oriflame/lumos/commit/8d833d2))
- release [ci skip]. ([b2c90b4](https://github.com/Oriflame/lumos/commit/b2c90b4))
- release [ci skip]. ([0aaa140](https://github.com/Oriflame/lumos/commit/0aaa140))
- release [ci skip]. ([f4e976e](https://github.com/Oriflame/lumos/commit/f4e976e))
- release [ci skip]. ([424a6dd](https://github.com/Oriflame/lumos/commit/424a6dd))
- release [ci skip]. ([d793a26](https://github.com/Oriflame/lumos/commit/d793a26))
- release [ci skip]. ([9ea367f](https://github.com/Oriflame/lumos/commit/9ea367f))
- release [ci skip]. ([e82b0ef](https://github.com/Oriflame/lumos/commit/e82b0ef))
- release [ci skip]. ([7d1582c](https://github.com/Oriflame/lumos/commit/7d1582c))
- release [ci skip]. ([65c5e22](https://github.com/Oriflame/lumos/commit/65c5e22))
- release [ci skip]. ([da5b8c3](https://github.com/Oriflame/lumos/commit/da5b8c3))
- release [ci skip]. ([7bd6f2d](https://github.com/Oriflame/lumos/commit/7bd6f2d))
- release [ci skip]. ([37df11d](https://github.com/Oriflame/lumos/commit/37df11d))
- release [ci skip]. ([4d4f93b](https://github.com/Oriflame/lumos/commit/4d4f93b))
- release [ci skip]. ([38ba08b](https://github.com/Oriflame/lumos/commit/38ba08b))
- release [ci skip]. ([e505377](https://github.com/Oriflame/lumos/commit/e505377))
- release [ci skip]. ([d6ebe9b](https://github.com/Oriflame/lumos/commit/d6ebe9b))
- release [ci skip]. ([7c19c37](https://github.com/Oriflame/lumos/commit/7c19c37))
- release [ci skip]. ([3f3ec2e](https://github.com/Oriflame/lumos/commit/3f3ec2e))
- release [ci skip]. ([cb1bff7](https://github.com/Oriflame/lumos/commit/cb1bff7))
- release [ci skip]. ([3711a1b](https://github.com/Oriflame/lumos/commit/3711a1b))
- release [ci skip]. ([15719aa](https://github.com/Oriflame/lumos/commit/15719aa))
- release [ci skip]. ([32ba9b9](https://github.com/Oriflame/lumos/commit/32ba9b9))
- release [ci skip]. ([4958c79](https://github.com/Oriflame/lumos/commit/4958c79))
- release [ci skip]. ([f165264](https://github.com/Oriflame/lumos/commit/f165264))
- release [ci skip]. ([3b03cb8](https://github.com/Oriflame/lumos/commit/3b03cb8))
- release [ci skip]. ([fa73168](https://github.com/Oriflame/lumos/commit/fa73168))
- release [ci skip]. ([5eeb317](https://github.com/Oriflame/lumos/commit/5eeb317))
- release [ci skip]. ([d845179](https://github.com/Oriflame/lumos/commit/d845179))
- release [ci skip]. ([ea3cbea](https://github.com/Oriflame/lumos/commit/ea3cbea))
- release [ci skip]. ([a5990ee](https://github.com/Oriflame/lumos/commit/a5990ee))
- release [ci skip]. ([bbf9dbf](https://github.com/Oriflame/lumos/commit/bbf9dbf))
- release [ci skip]. ([b4724ad](https://github.com/Oriflame/lumos/commit/b4724ad))
- release [ci skip]. ([f275bc7](https://github.com/Oriflame/lumos/commit/f275bc7))
- release [ci skip]. ([db31d25](https://github.com/Oriflame/lumos/commit/db31d25))
- release [ci skip]. ([cc8b4bc](https://github.com/Oriflame/lumos/commit/cc8b4bc))
- release [ci skip]. ([5440dc7](https://github.com/Oriflame/lumos/commit/5440dc7))
- release [ci skip]. ([baad588](https://github.com/Oriflame/lumos/commit/baad588))
- release [ci skip]. ([93e4bcb](https://github.com/Oriflame/lumos/commit/93e4bcb))
- release [ci skip]. ([0ff7af1](https://github.com/Oriflame/lumos/commit/0ff7af1))
- release [ci skip]. ([a5e8d39](https://github.com/Oriflame/lumos/commit/a5e8d39))
- release [ci skip]. ([5d8df6e](https://github.com/Oriflame/lumos/commit/5d8df6e))
- release [ci skip]. ([1e74f3b](https://github.com/Oriflame/lumos/commit/1e74f3b))
- release [ci skip]. ([8f8d252](https://github.com/Oriflame/lumos/commit/8f8d252))
- release [ci skip]. ([29f4118](https://github.com/Oriflame/lumos/commit/29f4118))
- release [ci skip]. ([424da5e](https://github.com/Oriflame/lumos/commit/424da5e))
- release [ci skip]. ([51ca9f0](https://github.com/Oriflame/lumos/commit/51ca9f0))
- release [ci skip]. ([d7351fd](https://github.com/Oriflame/lumos/commit/d7351fd))
- release [ci skip]. ([d64ff8d](https://github.com/Oriflame/lumos/commit/d64ff8d))
- release [ci skip]. ([3d72b90](https://github.com/Oriflame/lumos/commit/3d72b90))
- release [ci skip]. ([40d1740](https://github.com/Oriflame/lumos/commit/40d1740))
- release [ci skip]. ([92ce9cd](https://github.com/Oriflame/lumos/commit/92ce9cd))
- release [ci skip]. ([f43eccb](https://github.com/Oriflame/lumos/commit/f43eccb))
- release [ci skip]. ([26be935](https://github.com/Oriflame/lumos/commit/26be935))
- release [ci skip]. ([f4477dc](https://github.com/Oriflame/lumos/commit/f4477dc))
- release [ci skip]. ([7a68d4a](https://github.com/Oriflame/lumos/commit/7a68d4a))
- release [ci skip]. ([89da4ef](https://github.com/Oriflame/lumos/commit/89da4ef))
- release [ci skip]. ([29b9c24](https://github.com/Oriflame/lumos/commit/29b9c24))
- release [ci skip]. ([79350fd](https://github.com/Oriflame/lumos/commit/79350fd))
- release [ci skip]. ([2d9b146](https://github.com/Oriflame/lumos/commit/2d9b146))
- release [ci skip]. ([52525e0](https://github.com/Oriflame/lumos/commit/52525e0))
- release [ci skip]. ([2d3b054](https://github.com/Oriflame/lumos/commit/2d3b054))
- release [ci skip]. ([8a3e47d](https://github.com/Oriflame/lumos/commit/8a3e47d))
- release [ci skip]. ([bc7fc2f](https://github.com/Oriflame/lumos/commit/bc7fc2f))
- release [ci skip]. ([2ce5acb](https://github.com/Oriflame/lumos/commit/2ce5acb))
- release [ci skip]. ([6720b98](https://github.com/Oriflame/lumos/commit/6720b98))
- release [ci skip]. ([b3b0b0c](https://github.com/Oriflame/lumos/commit/b3b0b0c))
- release [ci skip]. ([60b8ac3](https://github.com/Oriflame/lumos/commit/60b8ac3))
- release [ci skip]. ([0b3139c](https://github.com/Oriflame/lumos/commit/0b3139c))
- release [ci skip]. ([48f7598](https://github.com/Oriflame/lumos/commit/48f7598))
- Update tsconfig. ([fb5be86](https://github.com/Oriflame/lumos/commit/fb5be86))
- updated danger. ([2ff94e1](https://github.com/Oriflame/lumos/commit/2ff94e1))
- updated danger. ([1900480](https://github.com/Oriflame/lumos/commit/1900480))
- whole packages reset. ([a2b69f8](https://github.com/Oriflame/lumos/commit/a2b69f8))

**Note:** Version bump only for package @oriflame/config-danger
