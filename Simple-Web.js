const http = require('http');
const path = require('path');
const fs =  require('fs');
//const server = http.createServer (function (req,res){
 // res.end("hello js");
//});

const server = http.createServer();
server.on('request', function(req,res){
   switch(req.url){
      case '/' : 
        const rs = fs.createReadStream(path.resolve(__dirname,'index.html'));
         rs.pipe(res);
   }
});

server.on('listening', function(){
  console.log('Server is listening on port 3000');
});

server.listen (3000);
