const express = require('express');
const data = require('../../data/seed.json');
const router = express.Router();

router.use('/', function(req,res,next) {
    res.json(data.products); // converts JS object to a JSON String
 
    // anothr request object method is sendFile()
    // res.sendFile(); // to read and sendfile 
 });

 
 module.exports = router;