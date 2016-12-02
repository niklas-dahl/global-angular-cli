'use strict';

let exec = require('child_process').exec;

function installLocally() {
  console.log('Installing local angular-cli using npm.', 'This may take a while..');

  return new Promise((resolve, reject) => {
    exec('npm install angular-cli', (err, stdout, stderr) => {
      if (err) {
        console.log(stderr);
        console.log('Package install failed, see above.');
        reject(err);
      } else {
        console.log('Installed successfully');
        resolve();
      }
    });
  });
}

module.exports = {
 installLocally
};
