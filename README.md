# template-electron-vuex-vuetify

[![build_status](https://github.com/governance-foundation/template-electron-vuex-vuetify/workflows/Build/release/badge.svg)](https://github.com/governance-foundation/template-electron-vuex-vuetify/actions?workflow=Build/release)
[![Coverage Status](https://coveralls.io/repos/github/governance-foundation/template-electron-vuex-vuetify/badge.svg?branch=master)](https://coveralls.io/github/governance-foundation/template-electron-vuex-vuetify?branch=master)
[![github license](https://img.shields.io/github/license/governance-foundation/template-electron-vuex-vuetify)](https://github.com/governance-foundation/template-electron-vuex-vuetify) 
[![github issues](https://img.shields.io/github/issues/governance-foundation/template-electron-vuex-vuetify)](https://github.com/governance-foundation/template-electron-vuex-vuetify) 
[![github last commit](https://img.shields.io/github/last-commit/governance-foundation/template-electron-vuex-vuetify)](https://github.com/governance-foundation/template-electron-vuex-vuetify) 
[![github repo size](https://img.shields.io/github/repo-size/governance-foundation/template-electron-vuex-vuetify)](https://github.com/governance-foundation/template-electron-vuex-vuetify) 
[![Gitter](https://badges.gitter.im/governance-foundation/community.svg)](https://gitter.im/governance-foundation/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Gitter](https://img.shields.io/badge/forum-Google-orange)](https://groups.google.com/forum/#!forum/governance-foundation)


## Project setup

```bash
yarn install
```

## Web App Dev Commands

To use this app in development cycles use following commands.

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Run your unit tests

```bash
yarn test:unit
```

### Run your end-to-end tests

```bash
yarn test:e2e
```

### Lints and fixes files

```bash
yarn lint
```

## Electron Dev Commands

To build and run your web app using electron use following commands.

### Compiles and hot-reloads for development

```bash
yarn electron:serve
```

### Compiles and minifies for production

```bash
yarn electron:build
```

## Customize configuration

* See [Configuration Reference](https://cli.vuejs.org/config/).
* Mac category [LSApplicationCategoryType](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8)
* Update App Icons in `build` folder
* Update App Details in `package.json`

## Pipelines

Following pipleines exist for compiling code as its commited

* Build Branche (build.yml) - Build and Test all branches.
* Build/release (build-master.yml) - Build, Test and Release master branch.
* PR Coverage Report (pr-coverage.yml) - Run coverage on PR's and add coverage results into PR history.

## Releasing

When you want to create a new release, follow these steps:

1. Update the version in your project's package.json file (e.g. `2020.09.01`)
2. Commit that change (`git commit -am 2020.09.01`)
3. Tag your commit (`git tag "2020.09.01"`).
4. Push your changes to GitHub (`git push && git push --tags`)

After building successfully, the action will publish your release artifacts. By default, a new release draft will be created on GitHub with download links for your app. If you want to change this behavior, have a look at the `electron-builder` docs.

More info on setting up release pipline found here [action-electron-builder](https://github.com/samuelmeuli/action-electron-builder).

## Build Config

Electron build configuration is mainated in `vue.config.js` under following node:

```json
pluginOptions: {
    electronBuilder: {
        ...
```

For possible configuration optons refer to [electron.build](https://www.electron.build/configuration/configuration) docs.

## Developer Windows WSL Setup

### Get some soft

* Install latest Powershell https://github.com/PowerShell/PowerShell/releases
* Install proper terminal https://github.com/microsoft/terminal/releases

### All Linux Version

* Install pre-requsites `sudo apt update && sudo apt install -y git curlgcc g++ make`
* Install node

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt -y install nodejs
```

### Ubuntu

* Install yarn `sudp apt install yarn`

### Debian

* Remove cmdtest `sudo apt-get remove cmdtest`
* Install yarn

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install -y yarn
```

## App Generation

To generate this app from sratch run the following

* Install Vue globally - `npm install -g @vue/cli`
* Create Vue App `vue create template-electron-vuex-vuetify`
  * Please pick a preset:
    * Manually select features
  * Features (All Yes)
  * Babel
    * TypeScript
    * Progressive Web App (PWA) Support
    * Router
    * Vuex
    * CSS Pre-processors
    * Linter / Formatter
    * Unit Testing
    * E2E Testing
  * Use class-style component syntax?
    * Yes
  * Use Babel alongside TypeScript?
    * Yes
  * Use history mode for router?
    * Yes
  * Pick a CSS pre-processor:
    * Sass/SCSS (with dart-sass)
  * Pick a linter / formatter config:
    * ESLint + Prettier
* Pick additional lint features:
      * Lint on save
  * Pick a unit testing solution:
    * Jest
  * Pick an E2E testing solution:
      Cypress
  * Where do you prefer placing config:
    * In dedicated config files
* Add Vuetify UI framework `vue add vuetify`
  * use `Default`
* Update `tsconfig.json`
  * add `vuetify` to `types[]`
* Add Electron dev tools `yarn add @types/electron-devtools-installer --dev`
* Add Electron to project `vue add electron-builder`
  * Latest Version
  * Add Spectron tests
* Add missing node types `yarn add @types/node@12 --dev`
* Update electron to latest version `yarn upgrade electron`
