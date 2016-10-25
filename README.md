# Global angular-cli

[![npm][npm-badge]][npm-badge-url]
[![Build Status](https://travis-ci.org/niklas-dahl/global-angular-cli.svg?branch=master)](https://travis-ci.org/niklas-dahl/global-angular-cli)

A small helper to avoid installing the awesome but huge angular-cli globally.

angular-cli: `~210MB`
global-angular-cli: `~146KB`

This project addresses the problem described in https://github.com/angular/angular-cli/issues/1263.
This is pretty much a proof of concept until the angular-cli team creates a real solution.

## Usage

```bash
npm i -g global-angular-cli

// to create a new angular-cli project
ngg new projectA
cd projectA
npm i // or yarn

// use every other command like normal
ngg serve
ngg generate component myComp --no-spec
ngg build -prod
```

## What it does
* `ngg new testProj` creates the `testProj` dir and copies a fresh angular-cli project in it
* `ngg <command> <args>` proxies the command and args to the locally installed angular-cli (the global version of the real angular-cli does the same)

## What it does not
* __does not__ install your dependencies (so your are free to use `yarn`)
* __does not__ initialize a git repository (`git init`)
* __does not__ recognize `ng new` command flags like `--sytle=sass` (set it by hand in `angular-cli.json`)
* __does not__ insert your project name in the following places, so you have to do this by hand
  * `angular-cli.json`: `"name": "project-name"`
  * `package.json`: `"name": "project-name"`
  * `README.md`: `# project-name`
  * `e2e/app.po.ts`: `export class ProjectNamePage`
  * `e2e/e2e-spec.ts`: import, describe
  * `src/index.html`: `<title>project-name</title>`
  * `src/app/app.component.spec.ts`: `describe('App: project-name', () => { ..`

[npm-badge]: https://img.shields.io/npm/v/global-angular-cli.svg
[npm-badge-url]: https://www.npmjs.com/package/global-angular-cli
