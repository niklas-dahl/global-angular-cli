'use strict';

let path = require('path');
let fs = require('fs');
let copyFile = require('./helpers').copyFile;

function createProject(projectName) {

  let folders = [
    'src',
    'src/app',
    'src/app/shared',
    'src/environments',
    'src/assets',
    'e2e',
  ]
  let files = [
    '.editorconfig',
    'README.md',
    'src/app/app.component.css',
    'src/app/app.component.html',
    'src/app/app.component.spec.ts',
    'src/app/app.component.ts',
    'src/app/app.module.ts',
    'src/app/index.ts',
    'src/app/shared/index.ts',
    'src/assets/.gitkeep',
    'src/assets/.npmignore',
    'src/environments/environment.prod.ts',
    'src/environments/environment.ts',
    'src/favicon.ico',
    'src/index.html',
    'src/main.ts',
    'src/polyfills.ts',
    'src/styles.css',
    'src/test.ts',
    'src/tsconfig.json',
    'src/typings.d.ts',
    'angular-cli.json',
    'e2e/app.e2e-spec.ts',
    'e2e/app.po.ts',
    'e2e/tsconfig.json',
    'gitignore',
    'karma.conf.js',
    'package.json',
    'protractor.conf.js',
    'tslint.json',
  ];

  let projectRootDir = path.join(process.cwd(), projectName);

  // create project folder
  console.log('Creating folder', projectRootDir);
  fs.mkdirSync(projectRootDir);

  // create sub folders
  folders.forEach(folder => {
    console.log('Creating folder', folder);
    fs.mkdirSync(path.join(projectRootDir, folder));
  });

  // copy files
  files.forEach(filePath => {
    let outPath = filePath;
    // add the dot to gitignore
    if(filePath === 'gitignore') {
      outPath = '.' + filePath;
    }

    console.log('Copying', filePath);
    copyFile(path.join(__dirname, '..', 'templateProject', filePath), path.join(projectRootDir, outPath), (err) => {
      if (err) {
        console.log('ERR', 'Copying', filePath);
        throw err;  
      }
    });
  });
}

module.exports = {
  createProject
}
