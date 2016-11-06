'use strict';

// pretty much taken from https://github.com/angular/angular-cli/blob/master/packages/angular-cli/bin/ng

const resolvePackage = require('resolve');

function proxyCommand(args) {
  return new Promise((resolve, reject) => {

    resolvePackage('angular-cli', { basedir: process.cwd() }, function (error, projectLocalCli) {
      if (error) {
        // If there is an error, resolve could not find the ng-cli
        // library from a package.json. Instead, include it from a relative
        // path to this script file (which is likely a globally installed
        // npm package). Most common cause for hitting this is `ng new`
        console.log('ERR', 'Local angular-cli could not be found. Make sure to install your depdencies first');
        reject(error);
      } else {
        // No error implies a projectLocalCli, which will load whatever
        // version of ng-cli you have installed in a local package.json
        let cli = require(projectLocalCli);
      
        if ('default' in cli) {
          cli = cli['default'];
        }

        return cli({
          cliArgs: args,
          inputStream: process.stdin,
          outputStream: process.stdout,
          // Leek: CustomLeek
        });
      }
    });
  });
}

module.exports = {
  proxyCommand
}
