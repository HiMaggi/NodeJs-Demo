const fs = require('fs');

const str = 'Hello World';

fs.writeFile('./file.txt',str,function(error,data){
  console.log('File successfuly written');
});

console.log('File writing is in process');