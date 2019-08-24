const fs = require('fs');
fs.readFile('../package.json', function(error,data){

    setImmediate(function(){
    console.log('setImmediate callback');
    });

    setTimeout(function(){
        console.log('setTimeout callback');
        },0);
});

console.log('file reading has been initiated but completed yet');