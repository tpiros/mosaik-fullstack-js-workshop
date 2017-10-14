const fs = require('fs');

function callbackFn(error, file) {
  if (error) {
    throw error;
  } else {
    console.log(file);
  }
}

console.log('Getting file content');
fs.readFile('myfile.txt', 'utf8', callbackFn);
console.log('finished reading file');
