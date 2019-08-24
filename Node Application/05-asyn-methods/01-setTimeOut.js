setTimeout(function (){
 console.log('message apears after 2 seconds');
}, 2000);

console.log('after call to setTimeout');

for( let i =0 ; i < 10000000000; i++){
    ;
}

console.log('after call to for ');