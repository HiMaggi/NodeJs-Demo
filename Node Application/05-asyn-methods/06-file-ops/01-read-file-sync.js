const fs = require('fs');
try{
    const contents = fs.readFileSync('../../package.json','utf-8');
    console.log(contents);
    console.log('File reading is complete');
}
catch(error ){
  console.log(error.message);
}
