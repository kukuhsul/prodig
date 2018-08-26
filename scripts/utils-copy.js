const copyfiles = require('copyfiles');

//# Wrap copyfiles in Promise
function copy(paths, config) {
  return new Promise((resolve, reject) => {
    copyfiles(paths, config, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(`COPY: ${paths[0].replace(root, '')} to ${paths[1].replace(root, '')} succeed`);
      }
    });
  });
}

module.exports = copy;
