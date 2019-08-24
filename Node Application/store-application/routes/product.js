const express = require('express');
const data = require('../data/seed.json');
const mongoose = require('mongoose');

const Product =  mongoose.model('Product');

const router = express.Router();

/*router.get('/', function(req,res,next) {
    res.render('products',{
     products : data.products
    });
 
    // anothr request object method is sendFile()
    // res.sendFile(); // to read and sendfile 
 });*/

 /*router.get("/",function(req,res,next){
    Product.find(function (error, products){
       if(error){
          res.status(500).json ({
          message : 'Error fetching products'
          });
          return;
       }
       res.json(products);
    });
 });*/


 router.get("/",function(req,res,next){
   Product.find()
         .select('name')
         .sort('name -description')
         .exec (function(error, products){
            if(error){
               res.status(500).json ({
               message : 'Error fetching products'
               });
               return;
            }
            res.json(products);
         });   
      
});

// findByIdAndUpdate(id, newData, {new : true, runValidator: true}) - put request
// by default it skips validations while updating - so we need to give runvalidators

// findByIdAndDelete(id)


 /*router.get('/:id', function(req,res) {
    res.render ('productdetail', {
      product : data.products[0]
    });
 });*/

 router.get('/:id', function(req,res,next){
  res.json({
     message: 'To be returned in ' +  req.query.format + 'format'
  });
 });

 router.post('/', function(req,res,next){
    Product.insertMany(req.body, function(error, insertedProduct){
      if(error){
         return res.status (400).json ({
           message: 'Product was not added'
         });
      }
      res.json(insertedProduct)
    });
 });



 module.exports = router;