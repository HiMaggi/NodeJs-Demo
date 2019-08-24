const mongoose = require('mongoose');

const ProductSchema =  new mongoose.Schema ({
  name :{
    type: String,
    required : true
  },
  description : String,
   releaseDate :{
     default : Date.now,
    type: Date  
   }
});

mongoose.model('Product',ProductSchema);