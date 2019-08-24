const ee = require('./05-event-emitter').ee;

ee.on('new data', function (data) {
   console.log(data);
});