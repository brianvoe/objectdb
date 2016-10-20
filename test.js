var objectdb = require('./index.js');

objectdb.name = 'dumb';

if(objectdb.name == 'dumb') {
  console.log("\x1b[32m", 'Success!!!');
} else {
  console.log("\x1b[31m", 'Failure! What did you do?');
}
