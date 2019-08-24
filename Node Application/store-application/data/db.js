const  mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('connected', function(){
  console.log(" You are connected");
});

mongoose.connection.on('error', function (error) {
  console.log(error.message);
});

