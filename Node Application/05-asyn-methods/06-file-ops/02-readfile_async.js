const fs = require('fs');
// error-first callback pattern
fs.readFile('../../package.json',function (error,data){
  if(error){
      console.log(error.message);
  }
  else{
      console.log(data.toString());
  }
});
