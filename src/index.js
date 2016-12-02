#!/usr/bin/env node
'use strict';

const proxyCommand = require('./proxyCommand').proxyCommand;
const installLocally = require('./installLocally').installLocally;
const fs = require('fs');

const version = require('../package.json').version;

let cliArgs = process.argv.slice(2);

// check for args
if (cliArgs.length === 0) {
  console.log('(v' + version + ') Usage:');
  console.log('  ngg new project-name    - Create new project');
  console.log('  ngg serve               - Use the real angular-cli');
  console.log('  ngg g component myComp  - Use the real angular-cli');
  return;
}

let command = cliArgs[0]; 

// check for new command
if (command === 'new') {
  let projectName = cliArgs[1];

  if (!projectName) {
    console.log('ERR', 'Please provide name for your project');
    console.log('ERR', 'ngg new <projectName>');
    process.exit(1);
  } else {
    // create Project Folder
    fs.mkdirSync(projectName);
    console.log('Created ' + projectName + '/');
    // change current working directory to project folder
    process.chdir(projectName);
    // install and init
    installAndInit();
  }

} else if (command === 'init') {
  // install and init  
  installAndInit();
}

// not new or init command
else {
  // proxy command to local angular-cli
  proxyCommand(cliArgs).catch(err => {
    console.log(err);
  });
}

function installAndInit() {
  // install local angular-cli
  return installLocally()
  
    // proxy the init command to the freshly installed angular-cli
    .then(_ => proxyCommand(['init']))

    // success
    .then(() => {
      console.log('Looks good');
    })

    // inform if there are errors
    .catch(err => {
      console.log(err);
    });
}
