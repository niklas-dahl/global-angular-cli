# :exclamation: Deprecated.

The angular-cli team decreased the install time drastically and the approch taken here would not work with future versions of the cli.

# Global angular-cli

[![npm][npm-badge]][npm-badge-url]
[![Build Status](https://travis-ci.org/niklas-dahl/global-angular-cli.svg?branch=master)](https://travis-ci.org/niklas-dahl/global-angular-cli)

A small helper to avoid installing the awesome but huge [angular-cli](https://github.com/angular/angular-cli) globally.

angular-cli: `~210MB`
global-angular-cli: `~50KB`

This project addresses the problem described in https://github.com/angular/angular-cli/issues/1263.
This is pretty much a proof of concept until the angular-cli team creates a real solution (or adapts this, who knows..).

## Usage

```bash
npm i -g global-angular-cli

// to create a new angular-cli project
ngg new projectA
cd projectA

// use every other command like normal
ngg serve
ngg generate component myComp --no-spec
ngg build -prod
```

## What it does
* `ngg new testProj` creates the project folder and locally installs the real angular-cli and proxies a `ng init` to it 
* `ngg <command> <args>` proxies the command and args to the locally installed angular-cli (the global version of the real angular-cli does the same)

## What it does not
* __does not__ initialize a git repository (use `git init`) (`ng init` strangely does not do that..)
* __does not__ recognize `ng new` command flags like `--sytle=sass` (set it by hand in `angular-cli.json`) (coming soon..)

[npm-badge]: https://img.shields.io/npm/v/global-angular-cli.svg
[npm-badge-url]: https://www.npmjs.com/package/global-angular-cli
