const EventEmitter =  require('events');

//console.log(EventEmitter);

const ee =  new EventEmitter();

let data, result = 101;

setInterval(function(){
  data = {
    result: result ++
  };

  ee.emit('new data', data);

}, 1000);

// lets say you got some new data in your app



module.exports =  {
    ee:ee
}
