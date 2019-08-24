// function gets queued after 2 seconds
setImmediate(function (){
  console.log('message appears after 2 seconds');
});

console.log('after call to setImmediate');