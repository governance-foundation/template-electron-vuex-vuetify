# template-electron-vuex-vuetify

[![build_status](https://github.com/governance-foundation/template-electron-vuex-vuetify/workflows/Build/release/badge.svg)](https://github.com/governance-foundation/template-electron-vuex-vuetify/actions?workflow=Build/release)
[![Coverage Status](https://coveralls.io/repos/github/governance-foundation/template-electron-vuex-vuetify/badge.svg?branch=master)](https://coveralls.io/github/governance-foundation/template-electron-vuex-vuetify?branch=master)
[![github license](https://img.shields.io/github/license/governance-foundation/template-electron-vuex-vuetify)](https://github.com/governance-foundation/template-electron-vuex-vuetify)
[![github issues](https://img.shields.io/github/issues/governance-foundation/template-electron-vuex-vuetify)](https://github.com/governance-foundation/template-electron-vuex-vuetify)
[![github last commit](https://img.shields.io/github/last-commit/governance-foundation/template-electron-vuex-vuetify)](https://github.com/governance-foundation/template-electron-vuex-vuetify)
[![github repo size](https://img.shields.io/github/repo-size/governance-foundation/template-electron-vuex-vuetify)](https://github.com/governance-foundation/template-electron-vuex-vuetify)
[![Gitter](https://badges.gitter.im/governance-foundation/community.svg)](https://gitter.im/governance-foundation/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Gitter](https://img.shields.io/badge/forum-Google-orange)](https://groups.google.com/forum/#!forum/governance-foundation)

## Overview

This template should help get you started developing `Electron` app using `Vue 3`, `Vite`, `Vuex` and `Vuetify`, and friends.

## Main Window

<img width="400px" src="https://raw.githubusercontent.com/governance-foundation/template-electron-vuex-vuetify/master/public/assets/electron-app.png" />

## Run Setup

```sh
# clone the project
git clone https://github.com/governance-foundation/template-electron-vuex-vuetify.git

# enter the project directory
cd template-electron-vuex-vuetify

# install dependency
npm install

# develop
npm run electron:dev
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

NOTE: this does not work yet, feel free to contribute.

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Electron Dev

Run development server and electron UI.

```sh
npm run electron:dev
```

### Build Electron Dist

Compile installable Electron packages.

```sh
npm run app:build
```

### Add Githooks

```sh
npx simple-git-hooks
```

## Customize configuration

- See [Configuration Reference](https://cli.vuejs.org/config/).
- Mac category [LSApplicationCategoryType](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8)
- Update App Icons in `electron/assets` folder.
- Update App Details and build config in `package.json`.

## Pipelines

Following pipleines exist for compiling code as its commited

- Build Branche (build.yml) - Build and Test all branches and create releases.

## Releasing

When you want to create a new release, follow these steps:

1. Update the project version `npm verison 2022.03.24` this will update the package.json and relevant commit.
2. If commit was not created, commit and sign that change (`git commit -s -a -m "chore: release 2022.02.20"`)
3. Tag and sign your commit (`git tag -s -a 2022.02.20 -m "2022.02.20"`). Make sure your tag name's format is `{YYYY}.{MM}.{DD}`. Your workflow will use this tag to detect when to create a release
4. Push your changes to GitHub (git push && git push --tags)

## Pull Request

When committing code please ensure that you add your commits to dedicated feature branch, name your branch `feature/#<issue id>-name-of-issue`.
When creating a PR please add default reviewers to your PR. Set title of your PR as `#<issue id> Title of issue`.
When interacting with reviews on your PR please resolve conversartions that you have fixed, and re-request reviews after you have pushed updates to your branch.

## App Generation

To generate this app from sratch run the following:

### Part 1 - Automated

- Install Vue globally - `npm install -g @vue/cli`
- Create Vue App `vue create template-electron-vuex-vuetify`
  - Please pick a preset:
    - Manually select features
  - Features (All Yes)
  - Babel
    - TypeScript
    - Progressive Web App (PWA) Support
    - Router
    - Vuex
    - CSS Pre-processors
    - Linter / Formatter
    - Unit Testing
    - E2E Testing
  - Use class-style component syntax?
    - Yes
  - Use Babel alongside TypeScript?
    - Yes
  - Use history mode for router?
    - Yes
  - Pick a CSS pre-processor:
    - Sass/SCSS (with dart-sass)
  - Pick a linter / formatter config:
    - ESLint + Prettier
- Pick additional lint features: \* Lint on save
  - Pick a unit testing solution:
    - Jest
  - Pick an E2E testing solution:
    Cypress
  - Where do you prefer placing config:
    - In dedicated config files
- Add Vuetify UI framework `vue add vuetify`
  - use `Default`

### Part 2 - Manual steps

- Remove Jest, will be replaced by [Vitest](https://vitest.dev/)
  - remove test folder
  - remove dependencies

```sh
npm remove @types/jest jest ts-jest @vue/vue3-jest @vue/cli-plugin-unit-jest babel-jest @vue/cli-plugin-babel
```

- Create [Vite template](https://vitejs.dev/guide/#trying-vite-online) for copying Vite config

  - create blank vite-vue app `npm create vite@latest my-vue-app -- --template vue`
  - copy accross folders `cypress` and `.vscode`
  - copy acresss all the conig files

- Add Electron, Vitest and Vite
  - add configs `package.json`, `vite.config.ts`, `electron.js` and `electron/preload.js` follow this [Vite + Vue 3 + electron + TypeScript](https://dev.to/brojenuel/vite-vue-3-electron-5h4o)
  - add dependencies

```sh
npm install vitest vue-tsc jsdom start-server-and-test @types/jsdom @types/node @vue/tsconfig @rushstack/eslint-patch @vitejs/plugin-vue concurrently cross-env electron electron-builder wait-on @types/electron-devtools-installer vite --save-dev
```
