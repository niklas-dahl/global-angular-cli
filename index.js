#!/usr/bin/env node
'use strict';

let helpers = require('./helpers');

let proxyCommand = require('./proxyCommand').proxyCommand;
let createProject = require('./createProject').createProject;

let cliArgs = process.argv.slice(2);

// check for args
if (cliArgs.length === 0) {
  console.log('Usage:');
  console.log('  ngg new project-name    - Create new project');
  console.log('  ngg serve               - Use the real angular-cli');
  console.log('  ngg g component myComp  - Use the real angular-cli');
  return;
}

// check for new command
if (cliArgs[0] == 'new') {

  let projectName = cliArgs[1];
  if (!projectName) {
    console.log('ERR', 'Please provide name for your project');
    console.log('ERR', 'ngg new <projectName>');
  } else {
    createProject(projectName);
  }

} else {
  // proxy command to local angular-cli
  proxyCommand();
}
