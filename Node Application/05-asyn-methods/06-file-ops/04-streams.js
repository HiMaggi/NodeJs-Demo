const fs = require ('fs');
const rs = fs.createReadStream('../../package.json');
const ws = fs.createWriteStream('./package.bak');

rs.pipe(ws);

console.log('Reading and Writing via stream is complete');
