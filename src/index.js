#!/usr/bin/env node
'use strict';

const proxyCommand = require('./proxyCommand').proxyCommand;
const installLocally = require('./installLocally').installLocally;
const exit = require('exit');

let cliArgs = process.argv.slice(2);

// check for args
if (cliArgs.length === 0) {
  console.log('Usage:');
  console.log('  ngg new project-name    - Create new project');
  console.log('  ngg serve               - Use the real angular-cli');
  console.log('  ngg g component myComp  - Use the real angular-cli');
  return;
}

let command = cliArgs[0]; 

if (command === 'new') {

  let projectName = cliArgs[1];
  if (!projectName) {
    console.log('ERR', 'Please provide name for your project');
    console.log('ERR', 'ngg new <projectName>');
  } else {
    installLocally().then(() => {
      return proxyCommand(['init', '--skipNpm']);
    }).then(() => {
      console.log('Looks good');
    }).catch(err => {
      console.log(err);
    });
  }

} else {
  // proxy command to local angular-cli
  proxyCommand(cliArgs).catch(err => {
    console.log(err);
  });
}
